import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      setTheme(saved);
    }
  }, []);

  return (
    <button onClick={toggleTheme}>
      <Sun className="stroke-main-foreground hidden size-5 sm:size-6 dark:inline" />
      <Moon className="stroke-main-foreground inline size-5 sm:size-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
