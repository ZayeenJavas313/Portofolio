import TextBlockAnimation from "@/components/ui/text-block-animation";

export function Story() {
  return (
    <section id="about" className="relative w-full bg-background text-foreground">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full">
          <TextBlockAnimation blockColor="#6366f1" animateOnScroll duration={0.8}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
              I don&apos;t just write code.
              <br />
              <span className="inline-block bg-foreground text-background px-3 pb-1 rounded-md mt-2">
                I design experiences.
              </span>
            </h2>
          </TextBlockAnimation>
        </div>
      </div>

      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 bg-muted/40">
        <div className="max-w-3xl w-full space-y-16">
          <TextBlockAnimation blockColor="#10b981" duration={0.7}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What I do.
            </h3>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#f59e0b" stagger={0.03}>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-foreground/80">
              I&apos;m a fullstack web developer who builds end-to-end web products—from
              clean UI and smooth interactions to reliable backend systems. I&apos;ve
              worked on company profiles, dashboards/admin panels, and data-driven
              apps. My goal is simple: ship fast, keep it maintainable, and make it
              feel professional in production.
            </p>
          </TextBlockAnimation>

          <div className="pl-6 border-l-2 border-indigo-500">
            <TextBlockAnimation blockColor="#8b5cf6" duration={0.6}>
              <p className="text-base md:text-lg italic text-muted-foreground">
                "Good UI is obvious. Great engineering is invisible."
              </p>
            </TextBlockAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

