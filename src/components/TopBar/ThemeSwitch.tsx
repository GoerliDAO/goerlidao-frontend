import { Icon } from "@olympusdao/component-library";

interface IThemeSwitcherProps {
  theme: string;
  toggleTheme: (e: any) => void;
}

function ThemeSwitcher({ theme, toggleTheme }: IThemeSwitcherProps) {
  return (
    <button className="toggle-button mr-2 p-1" type="button" title={`Change Theme`} value="check" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Icon name={"moon"} color={"primary"} style={{ fontSize: "25px" }} />
      ) : (
        <Icon name={"sun"} color={"primary"} style={{ fontSize: "25px" }} />
      )}
    </button>
  );
}

export default ThemeSwitcher;
