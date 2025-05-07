import Links from "../components/links";

export default function Home() {
  return (
    <div className="font-base">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-2xl font-heading sm:text-4xl">Nick Rucinski</h1>

          <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/48574032?s=512&v=4"
            className="h-24 w-24 rounded-full object-cover sm:h-32 sm:w-32"
          />
        </div>
      </div>
      <div className="mt-8 text-base sm:text-lg">
        <p className="pb-4">
          Hi, my name is Nick Rucinski, software engineer based in the
          Philadelphia area.
        </p>

        <p>
          Checkout my links below to get in touch with me or find out more about
          me and my work on the About and Projects pages.
        </p>
      </div>

      <Links />
    </div>
  );
}
