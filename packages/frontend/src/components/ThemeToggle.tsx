import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
