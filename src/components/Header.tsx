import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useScroll } from "@/hooks/use-scroll";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "work", href: "#work" },
  { key: "contact", href: "#contact" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <a href="#home" className="hover:bg-accent rounded-md p-2">
          <Wordmark className="h-4" />
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t("nav.letsTalk")}
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>
      <MobileMenu open={open}>
        <div className="grid gap-y-2">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t("nav.letsTalk")}
            </a>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = {
  open: boolean;
  children: React.ReactNode;
};

function MobileMenu({ open, children }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
    >
      <div className="size-full p-4 flex flex-col justify-between gap-2 animate-(--animate-zoom-in-97)">
        {children}
      </div>
    </div>,
    document.body
  );
}

function Wordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 140 20" fill="currentColor" {...props}>
      <text
        x="0"
        y="15"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="900"
        letterSpacing="-0.05em"
      >
        Ahmad Na&apos;im
      </text>
    </svg>
  );
}

