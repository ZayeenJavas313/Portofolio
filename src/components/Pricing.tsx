import { MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex rounded-lg border px-4 py-1 text-sm">
            {t("pricing.title")}
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            {t("pricing.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl border bg-card p-8 shadow-lg shadow-primary/10 flex flex-col"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {t(`pricing.card${i}Title`)}
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {t(`pricing.card${i}Subtitle`)}
              </p>
              <div className="mt-6 text-3xl font-bold tracking-tight text-primary">
                {t(`pricing.card${i}Price`)}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="rounded-full" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircleIcon className="size-4 mr-2" />
              {t("pricing.cta")}
            </a>
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
