import { ReactComponent as Moon } from "src/assets/icons/DarkModeThemeSwitcher.svg";
import { ReactComponent as Sun } from "src/assets/icons/LightModeThemeSwitcher.svg";

interface IThemeSwitcherProps {
  theme: string;
  toggleTheme: (e: any) => void;
}

function ThemeSwitcher({ theme, toggleTheme }: IThemeSwitcherProps) {
  return (
    <button className="toggle-button mr-2 p-1" type="button" title={`Change Theme`} value="check" onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
