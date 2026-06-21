import { ExternalLinkIcon, FolderGit2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/language-provider";

const PROJECT_KEYS = [
  {
    nameKey: "portfolio.airaName",
    descKey: "portfolio.airaDesc",
    stack: "React",
    url: "https://aira-dry-cleaning.vercel.app/",
    repoUrl: "https://github.com/ZayeenJavas313/Aira-Dry-Cleaning",
    tags: ["Company Profile", "Landing Page", "System CRUD", "Payment Gateway"],
  },
  {
    nameKey: "portfolio.scholarifyName",
    descKey: "portfolio.scholarifyDesc",
    stack: "Next.js",
    url: "https://scholarify-academy.vercel.app/",
    repoUrl: "https://github.com/ZayeenJavas313/Company-Profile---Scholarify-Academy/tree/main/landing-page",
    tags: ["Company Profile", "SNBT Tryout", "Data Analysis"],
  },
];

export function Portfolio() {
  const { t } = useTranslation();

  const projects = PROJECT_KEYS.map((p) => ({
    ...p,
    name: t(p.nameKey),
    description: t(p.descKey),
  }));

  return (
    <section id="work" className="bg-background text-foreground py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex rounded-lg border px-4 py-1 text-sm">
              {t("portfolio.badge")}
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              {t("portfolio.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/80">
              {t("portfolio.description")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <div
              key={project.nameKey}
              className="rounded-3xl border bg-card p-8 shadow-lg shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {project.stack}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 shrink-0">
                  <Button className="rounded-full" variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      <FolderGit2Icon className="size-4 me-2" />
                      {t("portfolio.repo")}
                    </a>
                  </Button>
                  <Button className="rounded-full" asChild>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {t("portfolio.liveDemo")}
                      <ExternalLinkIcon className="size-4 ms-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
