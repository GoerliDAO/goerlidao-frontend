// import "src/components/TopBar/TopBar.scss";

import { AppBar, Button, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as MenuIcon } from "src/assets/icons/hamburger.svg";
import ConnectButton from "src/components/ConnectButton/ConnectButton";

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

function TopBar({ handleDrawerToggle }: TopBarProps) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up(1048));
  return (
    <div className="container mx-auto flex items-center justify-between m-4">
      <a href="/">GOERLIDAO</a>
      <div className="grid grid-cols-5 grid-rows-1 gap-16 text-sm">
        <a href="/dashboard">Dashboard</a>
        <a href="/stake">Stake</a>
        <a href="/bonds">Bond</a>
        <a href="/bridge">Bridge</a>
        <a href="">Docs</a>
      </div>
      <ConnectButton />
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
  );
}

export default TopBar;
