import { ArrowRightIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <>
      <section id="home" className="mx-auto w-full max-w-5xl relative px-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
        >
          <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklch,var(--color-foreground)_8%,transparent),transparent)] contain-strict" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
        >
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-5 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-border to-border md:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-border to-border md:right-8" />
            <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:left-12" />
            <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:right-12" />
          </div>

          <a
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
              "animate-(--animate-fade-in) animate-(--animate-slide-in-from-bottom-10)"
            )}
            href="#work"
          >
            <SparklesIcon className="size-3 text-muted-foreground" />
            <span className="text-xs">Available for freelance (Remote)</span>
            <span className="block h-5 border-l" />
            <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
          </a>

          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
            Building web products <br /> that are fast, clean, and scalable
          </h1>

          <p className="mx-auto max-w-md text-center text-sm sm:text-base md:text-lg text-foreground/80 tracking-wide">
            I&apos;m Ahmad Na&apos;im, a fullstack web developer based in Yogyakarta.
            Available for remote work—company profiles, dashboards, and data-driven apps.
          </p>

          <div className="flex w-full flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              className="rounded-full w-full sm:w-auto"
              size="lg"
              variant="secondary"
              asChild
            >
              <a
                href="https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircleIcon className="size-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button className="rounded-full w-full sm:w-auto" size="lg" asChild>
              <a href="#work">
                View Projects
                <ArrowRightIcon className="size-4 ms-2" />
              </a>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Contact:{" "}
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="mailto:ahmdnaim3@gmail.com"
            >
              ahmdnaim3@gmail.com
            </a>{" "}
            ·{" "}
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="https://www.linkedin.com/in/ahmadznaim/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <LogosSection />
    </>
  );
}

function LogosSection() {
  return (
    <section className="relative space-y-4 border-t pt-6 pb-10">
      <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        Built with <span className="text-foreground">modern tools</span>
      </h2>
      <div className="relative z-10 mx-auto max-w-4xl">
        <LogoCloud logos={techLogos} />
      </div>
    </section>
  );
}

const techLogos = [
  { src: "https://cdn.simpleicons.org/react/000000", alt: "React" },
  { src: "https://cdn.simpleicons.org/typescript/000000", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/tailwindcss/000000", alt: "Tailwind" },
  { src: "https://cdn.simpleicons.org/nodedotjs/000000", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/vite/000000", alt: "Vite" },
  { src: "https://cdn.simpleicons.org/postgresql/000000", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/figma/000000", alt: "Figma" },
];

