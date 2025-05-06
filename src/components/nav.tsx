import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "./theme-switcher";

export default function Nav() {
  const location = useLocation();
  const links = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/projects", text: "Projects" },
  ];

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={clsx(
              "hover:border-border rounded-base border-2 px-2 py-1 transition-colors",
              location.pathname === link.path
                ? "border-border"
                : "border-transparent"
            )}
          >
            {link.text}
          </Link>
        ))}
        <ThemeSwitcher />
      </nav>
    </div>
  );
}
