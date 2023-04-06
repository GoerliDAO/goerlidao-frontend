// import "src/components/TopBar/TopBar.scss";
import { Button, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuIcon } from "src/assets/icons/hamburger.svg";
import { ReactComponent as GDAOBlackApe } from "src/assets/logos/GDAOBlackApe.svg";
import { ReactComponent as GDAOFullBlackLogo } from "src/assets/logos/GDAOFullBlack.svg";
import { ReactComponent as GDAOFullWhiteLogo } from "src/assets/logos/GDAOFullWhite.svg";
import { ReactComponent as GDAOWhiteApe } from "src/assets/logos/GDAOWhiteApe.svg";
import ConnectButton from "src/components/ConnectButton/ConnectButton";
import ThemeSwitcher from "src/components/TopBar/ThemeSwitch";

interface TopBarProps {
  theme: string;
  toggleTheme: (e: KeyboardEvent) => void;
  handleDrawerToggle: () => void;
}

function TopBar({ handleDrawerToggle, toggleTheme }: TopBarProps) {
  const location = useLocation();
  const theme = useTheme();
  console.log("This is the theme : ", theme);
  const desktop = useMediaQuery(theme.breakpoints.up(1048));

  useEffect(() => {
    renderedLogo();
  }, [location.pathname]);

  const renderedLogo = () => {
    const isBondsPath = (path: string): boolean => {
      const bondsPattern = /^\/bonds(\/.*)?$/;
      return bondsPattern.test(path);
    };

    const isBonds = isBondsPath(location.pathname);

    switch (true) {
      case location.pathname === "/bridge" ||
        location.pathname === "/swap" ||
        location.pathname === "/stake" ||
        (location.pathname === "/stats" && theme.palette.mode === "light"):
        return (
          <Link className="flex items-center justify-center" to="/">
            <GDAOBlackApe className="w-5 md:w-10" />
            <GDAOFullBlackLogo className="w-20 md:w-24 ml-2" />
          </Link>
        );
      case location.pathname === "/bridge" ||
        location.pathname === "/swap" ||
        location.pathname === "/stake" ||
        (location.pathname === "/stats" && theme.palette.mode === "dark"):
        return (
          <Link className="flex items-center justify-center" to="/">
            <GDAOWhiteApe className="w-5 md:w-10" />
            <GDAOFullWhiteLogo className="w-20 md:w-24 ml-2" />
          </Link>
        );
      case isBonds:
        return (
          <Link className="flex items-center justify-center" to="/">
            <GDAOBlackApe className="w-5 md:w-10" />
            <GDAOFullBlackLogo className="w-20 md:w-24 ml-2" />
          </Link>
        );
      default:
        return (
          <Link className="flex items-center justify-center" to="/">
            <GDAOWhiteApe className="w-5 md:w-10" />
            <GDAOFullWhiteLogo className="w-20 md:w-24 ml-2" />
          </Link>
        );
    }
  };

  return (
    <div
      style={{
        backgroundColor:
          location.pathname === "/" && theme.palette.mode === "dark"
            ? "#181818"
            : location.pathname === "/" && theme.palette.mode === "light"
            ? "#0202FF"
            : "transparent",
      }}
      id="navigationBar"
    >
      <div className="py-3 container mx-auto flex items-center justify-between">
        <div>{renderedLogo()}</div>

        <div id="navLinks" className="hidden md:grid grid-cols-5 grid-rows-1 gap-8 text-sm font-base">
          <Link to="/bridge">Bridge</Link>
          <Link to="/swap">Swap</Link>
          <Link to="/stake">Stake</Link>
          <Link to="/bonds">Bond</Link>
          <Link to="/stats">Stats</Link>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center jusitfy-between">
            {/* @ts-ignore */}
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <ConnectButton />
          </div>

          {!desktop && (
            <Button
              id="hamburger"
              aria-label="open drawer"
              size="large"
              variant="text"
              color="secondary"
              onClick={handleDrawerToggle}
            >
              <SvgIcon component={MenuIcon} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
