// import "src/components/TopBar/TopBar.scss";
import { AppBar, Button, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { ReactComponent as LogoIcon } from "src/assets/GDAO-ape.svg";
import { ReactComponent as GDAOFullLogo } from "src/assets/gorlidao-full-logo.svg";
import { ReactComponent as MenuIcon } from "src/assets/icons/hamburger.svg";
import ConnectButton from "src/components/ConnectButton/ConnectButton";
import ThemeSwitcher from "src/components/TopBar/ThemeSwitch";

const PREFIX = "TopBar";

const classes = {
  appBar: `${PREFIX}-appBar`,
  menuButton: `${PREFIX}-menuButton`,
  pageTitle: `${PREFIX}-pageTitle`,
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.appBar}`]: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      padding: "10px",
      paddingTop: "22.5px",
    },
    backdropFilter: "none",
  },

  [`& .${classes.menuButton}`]: {
    [theme.breakpoints.up(1048)]: {
      display: "none",
    },
  },

  [`& .${classes.pageTitle}`]: {
    [theme.breakpoints.up(1048)]: {
      marginLeft: "287px",
    },
    marginLeft: "0px",
  },
}));

interface TopBarProps {
  theme: string;
  toggleTheme: (e: KeyboardEvent) => void;
  handleDrawerToggle: () => void;
}

function TopBar({ handleDrawerToggle, toggleTheme }: TopBarProps) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up(1048));

  useEffect(() => {
    if (location.pathname !== "/") {
      document.body.style.backgroundColor = theme.palette.mode === "dark" ? "#121415" : "#C6D9F9";
      // replace element with id 'navigationBar' with a new element
    }
    if (location.pathname === "/") {
      // @ts-ignore
      document.getElementById("navigationBar").style.backgroundColor =
        theme.palette.mode === "dark" ? "#121415" : "#0202FF";
      (document.getElementById("navigationBar") as HTMLElement).style.color = "#fff";
      document.body.style.backgroundColor = theme.palette.mode === "dark" ? "#121415" : "#C6D9F9";
    } else {
      document.body.style.backgroundColor = theme.palette.mode === "dark" ? "#121415" : "#C6D9F9";
    }
  }, [location, theme]);

  return (
    <div id="navigationBar">
      <div className="py-3 container mx-auto flex items-center justify-between">
        <a className="flex items-center justify-center" href="/">
          <LogoIcon className="w-5 md:w-10" />
          <GDAOFullLogo className="w-20 md:w-24 ml-2" />
        </a>

        <div id="navLinks" className="hidden md:grid grid-cols-5 grid-rows-1 gap-8 text-sm font-semibold">
          <a href="/bridge">Bridge</a>
          <a href="/swap">Swap</a>
          <a href="/stake">Stake</a>
          <a href="/bonds">Bond</a>
          <a href="/stats">Stats</a>
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
