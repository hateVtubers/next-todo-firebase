import { useState } from "react";
import { Moon, Sun } from "./svg/ThemesIcons";

export const SwitchTheme = () => {
  const [themes, setThemes] = useState(true); // true = light, false = dark
  const handleThemes = () => {
    document.documentElement.classList.toggle("dark");
    setThemes(!themes);
  };
  return (
    <div className="absolute top-5 left-5 w-14 h-14">
      <button className="relative w-full h-full grid items-center" onClick={handleThemes}>
        <Moon state={themes} />
        <Sun state={themes} />
      </button>
    </div>
  );
};
