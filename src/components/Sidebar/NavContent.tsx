import { Box, Link, Paper, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon, NavItem } from "@olympusdao/component-library";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as GDAOBlackApe } from "src/assets/logos/GDAOBlackApe.svg";
import { ReactComponent as GDAOWhiteApe } from "src/assets/logos/GDAOWhiteApe.svg";
import { sortByDiscount } from "src/helpers/bonds/sortByDiscount";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { BondDiscount } from "src/views/Bond/components/BondDiscount";
import { useLiveBonds, useLiveBondsV3 } from "src/views/Bond/hooks/useLiveBonds";
import { DetermineRangeDiscount } from "src/views/Range/hooks";
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
            <Link className="flex flex-col items-center" href="/" target="_blank" rel="noopener noreferrer">
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
                  <Link className="" href="/donate" target="_blank" rel="noopener noreferrer">
                    - Donate
                  </Link>
                  <Link className="" href="/bridge" target="_blank" rel="noopener noreferrer">
                    - Bridge
                  </Link>
                  <Link className="" href="/swap" target="_blank" rel="noopener noreferrer">
                    - Swap
                  </Link>
                  <Link className="" href="/stake" target="_blank" rel="noopener noreferrer">
                    - Stake
                  </Link>
                  <Link className="" href="/bond" target="_blank" rel="noopener noreferrer">
                    - Bond
                  </Link>
                  <Link className="" href="/stats" target="_blank" rel="noopener noreferrer">
                    - Stats
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <Box>
          <NavItem href="https://docs.olympusdao.finance/" icon="docs" label={`Docs`} />
          <StyledBox display="flex" justifyContent="space-around" paddingY="24px">
            <Link href="https://github.com/OlympusDAO" target="_blank" rel="noopener noreferrer">
              <Icon name="github" className={classes.gray} />
            </Link>

            <Link href="https://olympusdao.medium.com/" target="_blank" rel="noopener noreferrer">
              <Icon name="medium" className={classes.gray} />
            </Link>

            <Link href="https://twitter.com/OlympusDAO" target="_blank" rel="noopener noreferrer">
              <Icon name="twitter" className={classes.gray} />
            </Link>

            <Link href="https://discord-invite.olympusdao.finance" target="_blank" rel="noopener noreferrer">
              <Icon name="discord" className={classes.gray} />
            </Link>
          </StyledBox>
        </Box>
      </Box>
    </Paper>
  );
};

const Bonds: React.VFC = () => {
  const { data: bondsV2 = [] } = useLiveBonds();
  const { data: bondsV3 = [] } = useLiveBondsV3();

  const bonds = bondsV2.concat(bondsV3);

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mb="12px" mr="18px">
      {sortByDiscount(bonds)
        .filter(bond => !bond.isSoldOut)
        .map(bond => (
          <Box mt="8px" key={bond.id}>
            <Link key={bond.id} component={NavLink} to={`/bonds/${bond.isV3Bond ? `v3/` : ""}${bond.id}`}>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Typography variant="body1">{bond.quoteToken.name}</Typography>
                <BondDiscount discount={bond.discount} />
              </Box>
            </Link>
          </Box>
        ))}
    </Box>
  );
};

const RangePrice = (props: { bidOrAsk: "bid" | "ask" }) => {
  const { data, isFetched } = DetermineRangeDiscount(props.bidOrAsk);
  return (
    <>
      {isFetched && (
        <Box ml="26px" mt="12px" mb="12px" mr="18px">
          <Typography variant="body2" color="textSecondary">
            {props.bidOrAsk === "bid" ? `Bid` : `Ask`}
          </Typography>
          <Box mt="12px">
            <Box mt="8px">
              <Link component={NavLink} to={`/range`}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  <Typography variant="body1">{data.quoteToken}</Typography>
                  <BondDiscount discount={new DecimalBigNumber(data.discount.toString())} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

const InverseBonds: React.VFC = () => {
  const { data: bondsV2 = [] } = useLiveBonds({ isInverseBond: true });
  const { data: bondsV3 = [] } = useLiveBondsV3({ isInverseBond: true });

  const bonds = bondsV2.concat(bondsV3);

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="12px" mb="12px" mr="18px">
      <Typography variant="body2" color="textSecondary">
        Inverse Bonds
      </Typography>

      <Box mt="12px">
        {sortByDiscount(bonds)
          .filter(bond => !bond.isSoldOut)
          .map(bond => (
            <Box mt="8px" key={bond.id}>
              <Link component={NavLink} to={`/bonds/${bond.isV3Bond ? `v3/` : ""}inverse/${bond.id}`}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  <Typography variant="body1">{bond.quoteToken.name}</Typography>
                  <BondDiscount discount={bond.discount} />
                </Box>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default NavContent;
