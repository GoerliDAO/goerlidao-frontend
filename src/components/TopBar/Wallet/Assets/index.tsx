import { Box, Fade, FormControl, Link, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OHMTokenStackProps, SecondaryButton, WalletBalance } from "@olympusdao/component-library";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Balances from "src/components/TopBar/Wallet/Assets/Balances";
import { TransactionHistory } from "src/components/TopBar/Wallet/Assets/TransactionHistory";
import { useFaucet } from "src/components/TopBar/Wallet/hooks/useFaucet";
import { GetTokenPrice } from "src/components/TopBar/Wallet/queries";
import { formatCurrency, formatNumber, trim } from "src/helpers";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { prettifySeconds, prettifySecondsInDays } from "src/helpers/timeUtil";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  useFuseBalance,
  // useGohmBalance,
  useGdaoBalance,
  useGohmTokemakBalance,
  useSgdaoBalance,
  useXgdaoBalance,
  // useOhmBalance,
  // useSohmBalance,
  // useV1OhmBalance,
  // useV1SohmBalance,
  // useWsohmBalance,
} from "src/hooks/useBalance";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";
import { useGdaoPrice } from "src/hooks/usePrices";
import { useStakingRebaseRate } from "src/hooks/useStakingRebaseRate";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { NetworkId } from "src/networkDetails";
import { useBondNotes } from "src/views/Bond/components/ClaimBonds/hooks/useBondNotes";
import { useNextRebaseDate } from "src/views/Stake/components/StakeArea/components/RebaseTimer/hooks/useNextRebaseDate";
import { useNetwork } from "wagmi";

const PREFIX = "AssetsIndex";

const classes = {
  selector: `${PREFIX}-selector`,
  forecast: `${PREFIX}-forecast`,
  faucet: `${PREFIX}-faucet`,
};

const StyledFade = styled(Fade)(({ theme }) => ({
  [`& .${classes.selector}`]: {
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",

      cursor: "pointer",
    },
    "& a": {
      color: theme.colors.gray[90],
      marginRight: "18px",
    },
    "& a:last-child": {
      marginRight: 0,
    },
    "& .active": {
      color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.colors.primary[300],
      textDecoration: "inherit",
    },
  },

  [`& .${classes.forecast}`]: {
    textAlign: "right",
    "& .number": {
      fontWeight: 400,
    },
    "& .numberSmall": {
      justifyContent: "flex-end",
    },
  },

  [`& .${classes.faucet}`]: {
    width: "30%",
  },
}));

/**
 * Component for Displaying Assets
 */

export interface OHMAssetsProps {
  path?: string;
}
const AssetsIndex: FC<OHMAssetsProps> = (props: { path?: string }) => {
  const navigate = useNavigate();
  const networks = useTestableNetworks();
  const { chain = { id: 1 } } = useNetwork();
  const { data: gdaoPrice = 0 } = useGdaoPrice();
  const { data: priceFeed = { usd_24h_change: -0 } } = GetTokenPrice();
  const { data: currentIndex = new DecimalBigNumber("0", 9) } = useCurrentIndex();
  const { data: nextRebaseDate } = useNextRebaseDate();
  const { data: rebaseRate = 0 } = useStakingRebaseRate();
  const { data: gdaoBalance = new DecimalBigNumber("0", 9) } = useGdaoBalance()[networks.MAINNET];
  // const { data: v1OhmBalance = new DecimalBigNumber("0", 9) } = useV1OhmBalance()[networks.MAINNET];
  // const { data: v1SohmBalance = new DecimalBigNumber("0", 9) } = useV1SohmBalance()[networks.MAINNET];
  const { data: sGdaoBalance = new DecimalBigNumber("0", 9) } = useSgdaoBalance()[networks.MAINNET];
  // const wsohmBalances = useWsohmBalance();
  const xgdaoBalances = useXgdaoBalance();
  const { data: gohmFuseBalance = new DecimalBigNumber("0", 18) } = useFuseBalance()[NetworkId.MAINNET];
  const { data: gohmTokemakBalance = new DecimalBigNumber("0", 18) } = useGohmTokemakBalance()[NetworkId.MAINNET];
  const [faucetToken, setFaucetToken] = useState("GDAO");

  const xgdaoTokens = [
    gohmFuseBalance,
    gohmTokemakBalance,
    xgdaoBalances[networks.MAINNET].data,
    // xgdaoBalances[NetworkId.ARBITRUM].data,
    // xgdaoBalances[NetworkId.AVALANCHE].data,
    // xgdaoBalances[NetworkId.POLYGON].data,
    // xgdaoBalances[NetworkId.FANTOM].data,
    // xgdaoBalances[NetworkId.OPTIMISM].data,
  ];
  // const wsohmTokens = [
  //   wsohmBalances[NetworkId.MAINNET].data,
  //   wsohmBalances[NetworkId.ARBITRUM].data,
  //   wsohmBalances[NetworkId.AVALANCHE].data,
  // ];

  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  // const totalWsohmBalance = wsohmTokens
  //   .filter(nonNullable)
  //   .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const notes = useBondNotes().data;
  const formattedgdaoBalance = gdaoBalance.toString({ decimals: 4, trim: false, format: true });
  // const formattedV1OhmBalance = v1OhmBalance.toString({ decimals: 4, trim: false, format: true });
  // const formattedV1SohmBalance = v1SohmBalance.toString({ decimals: 4, trim: false, format: true });
  // const formattedWsOhmBalance = totalWsohmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedxGdaoBalance = totalXgdaoBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedSGdaoBalance = sGdaoBalance.toString({ decimals: 4, trim: false, format: true });
  const xGdaoPriceChange = priceFeed.usd_24h_change * currentIndex.toApproxNumber();
  const xgdaoPrice = gdaoPrice * currentIndex.toApproxNumber();
  const rebaseAmountPerDay = rebaseRate * Number(formattedSGdaoBalance) * 3;

  const tokenArray = [
    {
      symbol: ["GDAO"] as OHMTokenStackProps["tokens"],
      balance: formattedgdaoBalance,
      assetValue: gdaoBalance.toApproxNumber() * gdaoPrice,
      alwaysShow: true,
    },
    {
      symbol: ["sGDAO"] as OHMTokenStackProps["tokens"],
      balance: formattedSGdaoBalance,
      timeRemaining:
        nextRebaseDate && `Stakes in ${prettifySeconds((nextRebaseDate.getTime() - new Date().getTime()) / 1000)}`,
      assetValue: sGdaoBalance.toApproxNumber() * gdaoPrice,
      alwaysShow: true,
      lineThreeLabel: "Rebases per day",
      lineThreeValue: Number(formattedSGdaoBalance) > 0 ? `${trim(rebaseAmountPerDay, 3)} sGDAO ` : undefined,
    },
    {
      symbol: ["xGDAO"] as OHMTokenStackProps["tokens"],
      balance: formattedxGdaoBalance,
      assetValue: xgdaoPrice * totalXgdaoBalance.toApproxNumber(),
      pnl: formattedxGdaoBalance ? 0 : formatCurrency(totalXgdaoBalance.toApproxNumber() * xGdaoPriceChange, 2),
      alwaysShow: true,
      geckoTicker: "governance-ohm",
    },
  ];

  const bondsArray =
    notes?.map(note => ({
      key: note.id,
      symbol: note.bond.quoteToken.icons,
      balance: note.payout.toString({ decimals: 4, trim: false }),
      label: "(Bond)",
      timeRemaining:
        Date.now() > note.matured ? "Fully Vested" : prettifySecondsInDays((note.matured - Date.now()) / 1000),
      assetValue: note.payout.toApproxNumber() * xgdaoPrice,
      underlyingSymbol: "gGDAO",
      pnl: Number(note.payout) === 0 ? 0 : formatCurrency(note.payout.toApproxNumber() * xGdaoPriceChange, 2),
      ctaText: "Claim",
      ctaOnClick: () => navigate("/bonds"),
      geckoTicker: "governance-ohm",
    })) || [];

  const assets = [...tokenArray, ...bondsArray];
  const walletTotalValueUSD = Object.values(assets).reduce((totalValue, token) => totalValue + token.assetValue, 0);

  const faucetMutation = useFaucet();
  const isFaucetLoading = faucetMutation.isLoading;

  return (
    <StyledFade in={true}>
      <Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <WalletBalance
            title="Balance"
            usdBalance={formatCurrency(walletTotalValueUSD, 2)}
            underlyingBalance={`${formatNumber(walletTotalValueUSD / (gdaoPrice !== 0 ? gdaoPrice : 1), 2)} GDAO`}
          />
        </Box>
        <Box display="flex" flexDirection="row" className={classes.selector} mb="18px" mt="18px">
          <Link component={NavLink} to="/wallet" end>
            <Typography>My Wallet</Typography>
          </Link>
          <Link component={NavLink} to="/wallet/history">
            <Typography>History</Typography>
          </Link>
        </Box>
        {(() => {
          switch (props.path) {
            case "history":
              return <TransactionHistory />;
            default:
              return (
                <>
                  {assets.map((asset, index) => (
                    <Balances key={index} token={asset} />
                  ))}
                </>
              );
          }
        })()}
        {(chain.id === NetworkId.TESTNET_GOERLI ||
          chain.id === NetworkId.LOCALHOST ||
          chain.id === NetworkId.TESTNET_SEPOLIA) && (
          <>
            <Typography variant="h5">Dev Faucet</Typography>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mt="18px">
              <FormControl className={classes.faucet}>
                <Select
                  label="Contract"
                  id="contract-select"
                  value={faucetToken}
                  onChange={event => setFaucetToken(event.target.value)}
                >
                  <MenuItem value="DAI">DAI</MenuItem>
                  <MenuItem value="GDAO">GDAO</MenuItem>
                  <MenuItem value="GDAO">SGDAO</MenuItem>
                  <MenuItem value="GDAO">XGDAO</MenuItem>
                </Select>
              </FormControl>
              <SecondaryButton onClick={() => faucetMutation.mutate(faucetToken)}>
                {isFaucetLoading ? "Loading..." : "Get Tokens"}
              </SecondaryButton>
            </Box>
          </>
        )}
      </Box>
    </StyledFade>
  );
};

export default AssetsIndex;
