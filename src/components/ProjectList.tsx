import { useState, useEffect } from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";

type Project = {
  name: string;
  description: string;
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
    >
      {children}
    </a>
  );
}

export default function ProjectList() {
  const [projectsByYear, setProjectsByYear] = useState<
    Record<string, Project[]>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProjectsByYear(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setProjectsByYear({});
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="h-64 w-full animate-pulse rounded-base bg-border" />
      ) : Object.keys(projectsByYear).length === 0 ? (
        <p>No projects available at the moment.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {Object.entries(projectsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, projects]) => (
              <div key={year}>
                <h1 className="font-heading mb-4 text-2xl sm:text-3xl">
                  {year}
                </h1>
                <ul className="flex flex-col gap-5">
                  {projects.map((project) => (
                    <div
                      className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
                      key={project.name}
                    >
                      {project.previewImage && (
                        <AspectRatio
                          className="border-border shadow-shadow overflow-hidden rounded-base border-2"
                          ratio={71 / 26}
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={project.previewImage}
                            alt={project.name}
                          />
                        </AspectRatio>
                      )}
                      <div className="text-main-foreground font-base mt-5">
                        <h2 className="font-heading text-xl sm:text-2xl flex flex-row gap-1">
                          {project.name}
                        </h2>
                        <p className="mt-2">{project.description}</p>
                        <div className="mt-8 grid grid-cols-1">
                          <ProjectButton
                            href={`/projects/${encodeURIComponent(
                              project.name
                            )}`}
                          >
                            Learn More
                          </ProjectButton>
                        </div>
                        <div
                          className={`mt-4 grid gap-5 ${
                            project.liveUrl ? "grid-cols-2" : "grid-cols-1"
                          }`}
                        >
                          {project.liveUrl && (
                            <ProjectButton href={project.liveUrl}>
                              Visit
                            </ProjectButton>
                          )}
                          <ProjectButton href={project.repoUrl}>
                            GitHub
                          </ProjectButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
