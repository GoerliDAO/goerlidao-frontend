import { Box, Paper, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GDAOBlackApe } from "src/assets/logos/GDAOBlackApe.svg";
import { ReactComponent as GDAOWhiteApe } from "src/assets/logos/GDAOWhiteApe.svg";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { useNetwork } from "wagmi";

const PREFIX = "NavContent";

const classes = {
  gray: `${PREFIX}-gray`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.gray}`]: {
    color: theme.colors.gray[90],
  },
}));

const NavContent: React.VFC = () => {
  const theme = useTheme();
  const { chain = { id: 1 } } = useNetwork();
  const networks = useTestableNetworks();

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <div className="flex items-center justify-center my-5">
            <Link className="flex flex-col items-center" to="/">
              {theme.palette.mode === "light" ? <GDAOBlackApe /> : <GDAOWhiteApe />}
              <Typography fontSize="24px" fontWeight="700" lineHeight="32px">
                GoerliDAO
              </Typography>
            </Link>
          </div>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              {chain.id === networks.MAINNET && (
                <div className="grid grid-cols-1 grid-rows-6 gap-4 m-4">
                  <Link className="" to="/donate">
                    Donate
                  </Link>
                  <Link className="" to="/bridge">
                    Bridge
                  </Link>
                  <Link className="" to="/swap">
                    Swap
                  </Link>
                  <Link className="" to="/stake">
                    Stake
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Paper>
  );
};

export default NavContent;
