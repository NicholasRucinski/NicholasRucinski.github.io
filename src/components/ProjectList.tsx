import { useState, useEffect } from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";

type Project = {
  project_name: string;
  description: string;
  link: string;
  team_size: number;
  repoUrl: string;
  liveUrl: string | null;
  previewImage: string | null;
};

function ProjectButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const allProjects = Object.values(data).flat();
        setProjects(allProjects as Project[]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setProjects([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="h-64 w-full animate-pulse rounded-base bg-border" />
      ) : projects.length === 0 ? (
        <p>No projects available at the moment.</p>
      ) : (
        <ul className="flex flex-col gap-5">
          {projects.map((project) => {
            return (
              <div
                className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
                key={project.project_name}
              >
                <AspectRatio
                  className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2"
                  ratio={71 / 26}
                >
                  <img
                    className="rounded-base w-full"
                    src={`${project.previewImage ?? "/project1.png"}`}
                    alt={project.project_name}
                  />
                </AspectRatio>

                <div className="text-main-foreground font-base mt-5">
                  <h2 className="font-heading text-xl sm:text-2xl">
                    {project.project_name}
                  </h2>

                  <p className="mt-2">{project.description}</p>
                  <div
                    className={`mt-8 grid gap-5 ${
                      project.liveUrl ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {project.liveUrl && (
                      <ProjectButton href={project.liveUrl}>
                        Visit
                      </ProjectButton>
                    )}
                    <ProjectButton href={project.repoUrl}>GitHub</ProjectButton>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
