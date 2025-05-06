import ProjectList from "../components/ProjectList";
// import { AspectRatio } from "../components/ui/aspect-ratio";

export default function Projects() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Projects</h1>

      <div className="flex flex-col gap-5">
        <ProjectList />
      </div>
    </div>
  );
}
