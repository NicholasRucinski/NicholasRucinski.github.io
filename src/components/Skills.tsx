import { SiAndroid, SiKotlin } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import {
  SiCss3,
  SiDocker,
  SiHtml5,
  SiTypescript,
  SiNginx,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import {
  FaGolang,
  FaLinux,
  FaWindows,
  FaApple,
  FaJava,
  FaPython,
  FaC,
} from "react-icons/fa6";

import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {
  const skills = [
    {
      field: "Languages & Frameworks",
      skills: [
        { skill: "HTML", icon: SiHtml5 },
        { skill: "CSS", icon: SiCss3 },
        { skill: "TypeScript", icon: SiTypescript },
        { skill: "React", icon: SiReact },
        { skill: "Tailwind", icon: SiTailwindcss },
        { skill: "Golang", icon: FaGolang },
        { skill: "Java", icon: FaJava },
        { skill: "Kotlin", icon: SiKotlin },
        { skill: "Python", icon: FaPython },
        { skill: "C#", icon: TbBrandCSharp },
        { skill: "C", icon: FaC },
        { skill: "Android", icon: SiAndroid },
      ],
    },
    {
      field: "DevOps & Infrastructure",
      skills: [
        { skill: "Docker", icon: SiDocker },
        { skill: "Nginx", icon: SiNginx },
        { skill: "PostgreSQL", icon: SiPostgresql },
        { skill: "Linux", icon: FaLinux },
        { skill: "Windows", icon: FaWindows },
        { skill: "MacOS", icon: FaApple },
      ],
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

      {skills.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return (
                  <TooltipProvider key={id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <skill.icon className="h-8 w-8" title="" />
                      </TooltipTrigger>
                      <TooltipContent>{skill.skill}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
