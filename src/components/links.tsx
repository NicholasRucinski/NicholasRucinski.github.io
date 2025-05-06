import { SiGithub, SiGmail, SiMedium, SiLinkedin } from "react-icons/si";
import { IconType } from "react-icons";

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: "mailto:johndoe@gmail.com",
    },
    {
      icon: SiGithub,
      href: "https://github.com/johndoe",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/johndoe/",
    },
    {
      icon: SiMedium,
      href: "https://medium.com/@johndoe",
    },
  ];

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}
