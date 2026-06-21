import { ArrowRightIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section id="home" className="mx-auto w-full max-w-6xl relative px-4">
        {/* Background shade */}
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
        >
          <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklch,var(--color-foreground)_8%,transparent),transparent)] contain-strict" />
        </div>

        {/* Side borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-6xl lg:block"
        >
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
        </div>

        {/* Two-column layout */}
        <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-16 pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-32 lg:items-center">
          {/* Left: Text */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-5">
            <a
              className={cn(
                "group mx-auto lg:mx-0 flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
                "animate-(--animate-fade-in) animate-(--animate-slide-in-from-bottom-10)"
              )}
              href="#work"
            >
              <SparklesIcon className="size-3 text-muted-foreground" />
              <span className="text-xs">{t("hero.badge")}</span>
              <span className="block h-5 border-l" />
              <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
            </a>

            <h1 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
              {t("hero.title")}
            </h1>

            <p className="mx-auto lg:mx-0 max-w-md text-center lg:text-left text-sm sm:text-base md:text-lg text-foreground/80 tracking-wide">
              {t("hero.subtitle")}
            </p>

            <div className="flex w-full flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-3 pt-2">
              <Button
                className="rounded-full w-full sm:w-auto"
                size="lg"
                variant="secondary"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircleIcon className="size-4 mr-2" />
                  {t("hero.whatsapp")}
                </a>
              </Button>
              <Button className="rounded-full w-full sm:w-auto" size="lg" variant="outline" asChild>
                <a href="#pricing">
                  {t("hero.freeConsultation")}
                  <ArrowRightIcon className="size-4 ms-2" />
                </a>
              </Button>
              <Button className="rounded-full w-full sm:w-auto" size="lg" asChild>
                <a href="#work">
                  {t("hero.viewProjects")}
                  <ArrowRightIcon className="size-4 ms-2" />
                </a>
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center lg:text-left">
              {t("hero.contact")}:{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="mailto:ahmdnaim3@gmail.com"
              >
                {t("hero.email")}
              </a>{" "}
              ·{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="https://www.linkedin.com/in/ahmadznaim/"
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.linkedin")}
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-end mt-10 sm:mt-14 lg:mt-0">
            <div className="relative w-[65%] sm:w-3/5 md:w-1/2 lg:w-full max-w-[240px] sm:max-w-xs lg:max-w-sm xl:max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
                <div className="aspect-[3/4] bg-background">
                  <img
                    src="/images/profile-hero.jpg"
                    alt="Ahmad Na'im - Fullstack Web Developer"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogosSection />
    </>
  );
}

function LogosSection() {
  const { t } = useTranslation();

  return (
    <section className="relative space-y-4 border-t pt-6 pb-10">
      <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        {t("logos.title")} <span className="text-foreground">{t("logos.titleHighlight")}</span>
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
