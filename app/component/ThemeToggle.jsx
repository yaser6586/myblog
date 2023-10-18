import React from "react";
import { useTheme } from "./ContextProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col justify-center align-middle">
      <div>{theme === "light" ? "light mode" : "dark mode"}</div>
      <input
        type="checkbox"
        className="toggle toggle-info ml-3"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
}

export default ThemeToggle;
