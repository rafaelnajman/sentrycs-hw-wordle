import { useEffect, useState } from "react";
import { Theme } from "../types/theme";
import styles from "./ThemeSwitcher.module.scss";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const preferred = stored || Theme.LIGHT;
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className={`${styles.themeSwitcher}`}
      onClick={toggleTheme}
      aria-label={theme === Theme.LIGHT ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className={styles.icon}>{theme === Theme.LIGHT ? "🌙" : "☀️"}</span>
      <span className={styles.text}>{theme === Theme.LIGHT ? "Dark" : "Light"}</span>
    </button>
  );
}
