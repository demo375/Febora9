
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-full glass transition-all duration-500 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-all duration-300"></div>
      <Sun className={`w-5 h-5 absolute transition-all duration-500 ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
      <Moon className={`w-5 h-5 absolute transition-all duration-500 ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`} />
    </button>
  );
};

export default ThemeToggle;
