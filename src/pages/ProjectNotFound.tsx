export default function ProjectNotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-center px-4">
      <div>
        <h1 className="text-2xl sm:text-4xl font-heading">Project Not Found</h1>
        <p className="mt-6 text-lg sm:text-xl">
          The project you are looking for has been removed or does not exist.
        </p>
      </div>
    </div>
  );
}
