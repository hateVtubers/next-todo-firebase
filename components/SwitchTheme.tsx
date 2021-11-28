import { useState } from "react";
import { Moon, Sun } from "./svg/ThemesIcons";

export const SwitchTheme = () => {
  const [themes, setThemes] = useState(true); // true = light, false = dark
  const handleThemes = () => {
    document.documentElement.classList.toggle("dark");
    setThemes(!themes);
  };
  return (
    <button className="absolute top-5 left-5" onClick={handleThemes}>
      {themes ? <Moon /> : <Sun />}
    </button>
  );
};
