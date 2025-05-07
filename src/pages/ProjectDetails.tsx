import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Project = {
  name: string;
  description: string;
  team_size: number;
  repoUrl: string;
  liveUrl: string | null;
  previewImage: string | null;
};

export default function ProjectDetails() {
  const { name } = useParams<{ name: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Projects.json"
    )
      .then((res) => res.json())
      .then((data: Record<string, Project[]>) => {
        const allProjects = Object.values(data).flat();
        const found = allProjects.find(
          (proj) => proj.name === decodeURIComponent(name || "")
        );
        setProject(found || null);
      });
  }, [name]);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="mt-2">{project.description}</p>
      {project.previewImage && (
        <img
          src={project.previewImage}
          alt={project.name}
          className="mt-4 rounded-base border-2"
        />
      )}
      <div className="mt-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" className="underline">
            Visit Live
          </a>
        )}
        <br />
        <a href={project.repoUrl} target="_blank" className="underline">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
