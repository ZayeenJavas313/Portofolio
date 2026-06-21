import { ExternalLinkIcon, FolderGit2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Web Aira Dry Cleaning",
    description:
      "A modern landing page and service catalog for a dry-cleaning business — includes service pricing, pickup/delivery info, location map, and a contact form for customer inquiries.",
    stack: "React",
    url: "#",
    repoUrl: "#",
    tags: ["Company Profile", "Landing Page", "System CRUD", "Payment Gateway"],
  },
  {
    name: "Web Scholarify Academy",
    description:
      "A company profile website and an SNBT tryout platform with professional data analysis to support evaluation and decision-making.",
    stack: "Next.js",
    url: "https://scholarify.id/",
    repoUrl: "#",
    tags: ["Company Profile", "SNBT Tryout", "Data Analysis"],
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-background text-foreground py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex rounded-lg border px-4 py-1 text-sm">
              Portfolio
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Featured projects
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/80">
              Selected projects — focused on clean UI, clear user flow, and production-ready implementations.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
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
                      Repo
                    </a>
                  </Button>
                  <Button className="rounded-full" asChild>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Live Demo
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

