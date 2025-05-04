import { useState, useEffect } from "react";

type Project = {
  project_name: string;
  description: string;
  link: string;
  team_size: number;
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const allProjects: Project[] = Object.values(data).flat();
        setProjects(allProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Projects</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.project_name}>
              <h2>{project.project_name}</h2>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
