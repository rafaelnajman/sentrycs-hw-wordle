import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = stored || "light";
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className={`${styles.themeSwitcher}`}
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className={styles.icon}>{theme === "light" ? "🌙" : "☀️"}</span>
      <span className={styles.text}>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
