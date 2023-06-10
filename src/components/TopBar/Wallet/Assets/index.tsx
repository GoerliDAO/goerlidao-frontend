import { Box, Fade } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OHMTokenStackProps, WalletBalance } from "@olympusdao/component-library";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Balances from "src/components/TopBar/Wallet/Assets/Balances";
import { TransactionHistory } from "src/components/TopBar/Wallet/Assets/TransactionHistory";
import { useFaucet } from "src/components/TopBar/Wallet/hooks/useFaucet";
import { GetTokenPrice } from "src/components/TopBar/Wallet/queries";
import { formatCurrency, formatNumber } from "src/helpers";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  useFuseBalance,
  useGdaoBalance,
  useGohmBalance,
  useGohmTokemakBalance,
  useOhmBalance,
  useSgdaoBalance,
  useSohmBalance,
  useV1OhmBalance,
  useV1SohmBalance,
  useWsohmBalance,
  useXgdaoBalance,
} from "src/hooks/useBalance";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";
import { useGdaoPrice, useOhmPrice } from "src/hooks/usePrices";
import { useStakingRebaseRate } from "src/hooks/useStakingRebaseRate";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { NetworkId } from "src/networkDetails";
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
  const { data: ohmPrice = 0 } = useOhmPrice();
  const { data: priceFeed = { usd_24h_change: -0 } } = GetTokenPrice();
  const gdaoPrice = useGdaoPrice();
  const { data: currentIndex = new DecimalBigNumber("0", 9) } = useCurrentIndex();
  const { data: nextRebaseDate } = useNextRebaseDate();
  const { data: rebaseRate = 0 } = useStakingRebaseRate();
  const { data: gdaoBalance = new DecimalBigNumber("0", 9) } = useGdaoBalance()[networks.MAINNET];
  const { data: sGdaoBalance = new DecimalBigNumber("0", 9) } = useSgdaoBalance()[networks.MAINNET];
  const { data: xGdaoBalance = new DecimalBigNumber("0", 9) } = useXgdaoBalance()[networks.MAINNET];
  const { data: ohmBalance = new DecimalBigNumber("0", 9) } = useOhmBalance()[networks.MAINNET];
  const { data: v1OhmBalance = new DecimalBigNumber("0", 9) } = useV1OhmBalance()[networks.MAINNET];
  const { data: v1SohmBalance = new DecimalBigNumber("0", 9) } = useV1SohmBalance()[networks.MAINNET];
  const { data: sOhmBalance = new DecimalBigNumber("0", 9) } = useSohmBalance()[networks.MAINNET];
  const wsohmBalances = useWsohmBalance();
  const gohmBalances = useGohmBalance();
  const { data: gohmFuseBalance = new DecimalBigNumber("0", 18) } = useFuseBalance()[NetworkId.MAINNET];
  const { data: gohmTokemakBalance = new DecimalBigNumber("0", 18) } = useGohmTokemakBalance()[NetworkId.MAINNET];
  const [faucetToken, setFaucetToken] = useState("OHM V2");
  const theme = useTheme();

  const gohmTokens = [
    gohmFuseBalance,
    gohmTokemakBalance,
    gohmBalances[networks.MAINNET].data,
    gohmBalances[NetworkId.ARBITRUM].data,
    gohmBalances[NetworkId.AVALANCHE].data,
    gohmBalances[NetworkId.POLYGON].data,
    gohmBalances[NetworkId.FANTOM].data,
    gohmBalances[NetworkId.OPTIMISM].data,
  ];

  const xgdaoTokens = [xGdaoBalance];
  const wsohmTokens = [
    wsohmBalances[NetworkId.MAINNET].data,
    wsohmBalances[NetworkId.ARBITRUM].data,
    wsohmBalances[NetworkId.AVALANCHE].data,
  ];

  const totalGohmBalance = gohmTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const totalWsohmBalance = wsohmTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const formattedohmBalance = ohmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedgdaoBalance = gdaoBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedsgdaoBalance = sGdaoBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedxgdaoBalance = xGdaoBalance.toString({ decimals: 4, trim: false, format: true });

  const formattedV1OhmBalance = v1OhmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedV1SohmBalance = v1SohmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedWsOhmBalance = totalWsohmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedgOhmBalance = totalGohmBalance.toString({ decimals: 4, trim: false, format: true });
  const formattedSOhmBalance = sOhmBalance.toString({ decimals: 4, trim: false, format: true });
  // const gOhmPriceChange = priceFeed.usd_24h_change * currentIndex.toApproxNumber();
  const xGdaoPriceChange = priceFeed.usd_24h_change * currentIndex.toApproxNumber();
  const gOhmPrice = ohmPrice * currentIndex.toApproxNumber();
  // const xGdaoPrice = gdaoPrice * currentIndex.toApproxNumber();
  const rebaseAmountPerDay = rebaseRate * Number(formattedSOhmBalance) * 3;

  const tokenArray = [
    // {
    //   symbol: ["OHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedohmBalance,
    //   assetValue: ohmBalance.toApproxNumber() * ohmPrice,
    //   alwaysShow: true,
    // },
    {
      //@ts-ignore
      symbol: ["GDAO"] as OHMTokenStackProps["tokens"],
      balance: formattedgdaoBalance,
      assetValue: gdaoBalance.toApproxNumber() * ohmPrice,
      alwaysShow: true,
    },
    // {
    //   symbol: ["OHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedV1OhmBalance,
    //   label: "(v1)",
    //   assetValue: v1OhmBalance.toApproxNumber() * ohmPrice,
    // },
    // {
    //   //@ts-ignore
    //   symbol: ["sGDAO"] as OHMTokenStackProps["tokens"],
    //   balance: formattedSOhmBalance,
    //   timeRemaining:
    //     nextRebaseDate && `Stakes in ${prettifySeconds((nextRebaseDate.getTime() - new Date().getTime()) / 1000)}`,
    //   assetValue: sOhmBalance.toApproxNumber() * ohmPrice,
    //   alwaysShow: true,
    //   lineThreeLabel: "Rebases per day",
    //   lineThreeValue: Number(formattedSOhmBalance) > 0 ? `${trim(rebaseAmountPerDay, 3)} sGDAO ` : undefined,
    // },
    // {
    //   symbol: ["sOHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedSOhmBalance,
    //   timeRemaining:
    //     nextRebaseDate && `Stakes in ${prettifySeconds((nextRebaseDate.getTime() - new Date().getTime()) / 1000)}`,
    //   assetValue: sOhmBalance.toApproxNumber() * ohmPrice,
    //   alwaysShow: true,
    //   lineThreeLabel: "Rebases per day",
    //   lineThreeValue: Number(formattedSOhmBalance) > 0 ? `${trim(rebaseAmountPerDay, 3)} sOHM ` : undefined,
    // },
    // {
    //   symbol: ["sOHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedV1SohmBalance,
    //   label: "(v1)",
    //   timeRemaining:
    //     nextRebaseDate && `Stakes in ${prettifySeconds((nextRebaseDate.getTime() - new Date().getTime()) / 1000)}`,
    //   assetValue: v1SohmBalance.toApproxNumber() * ohmPrice,
    // },
    // {
    //   symbol: ["wsOHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedWsOhmBalance,
    //   assetValue: gOhmPrice * totalWsohmBalance.toApproxNumber(),
    //   geckoTicker: "governance-ohm",
    // },
    {
      //@ts-ignore
      symbol: ["xGDAO"] as OHMTokenStackProps["tokens"],
      balance: formattedxgdaoBalance,
      assetValue: gOhmPrice * totalXgdaoBalance.toApproxNumber(),
      pnl: formattedxgdaoBalance ? 0 : formatCurrency(totalXgdaoBalance.toApproxNumber() * xGdaoPriceChange, 2),
      alwaysShow: true,
      geckoTicker: "governance-ohm",
    },
    // {
    //   symbol: ["gOHM"] as OHMTokenStackProps["tokens"],
    //   balance: formattedgOhmBalance,
    //   assetValue: gOhmPrice * totalGohmBalance.toApproxNumber(),
    //   pnl: formattedgOhmBalance ? 0 : formatCurrency(totalGohmBalance.toApproxNumber() * gOhmPriceChange, 2),
    //   alwaysShow: true,
    //   geckoTicker: "governance-ohm",
    // },
  ];

  const assets = [...tokenArray];
  const walletTotalValueUSD = Object.values(assets).reduce((totalValue, token) => totalValue + token.assetValue, 0);

  const faucetMutation = useFaucet();
  const isFaucetLoading = faucetMutation.isLoading;

  return (
    <StyledFade in={true}>
      <div>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <WalletBalance
            title="Balance"
            usdBalance={formatCurrency(walletTotalValueUSD, 2)}
            underlyingBalance={`${formatNumber(walletTotalValueUSD / (ohmPrice !== 0 ? ohmPrice : 1), 2)} GDAO`}
          />
        </Box>
        <Box display="flex" flexDirection="row" className={classes.selector} mb="18px" mt="18px">
          <span
            style={{
              color: theme.palette.mode === "light" ? "#000" : "#fff",
            }}
          >
            My Wallet
          </span>
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
      </div>
    </StyledFade>
  );
};

export default AssetsIndex;
