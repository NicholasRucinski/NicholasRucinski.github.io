import Experience from "../components/Experience";
import Skills from "../components/Skills";
import School from "../components/School";

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>
      <a
        className="font-heading underline"
        href="https://raw.githubusercontent.com/NicholasRucinski/NicholasRucinski/refs/heads/main/Resume.pdf"
      >
        View my Resume
      </a>
      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hi, my name is Nick Rucinski. I am a software engineer with a passion
          for building application and learning new technologies. I have a
          strong interest in backend development and have experience with a
          variety of programming languages and frameworks. I am always looking
          for new challenges and opportunities to grow my skills.
        </p>
      </div>

      <Skills />

      <Experience />

      <School />
    </div>
  );
}
