import "@rainbow-me/rainbowkit/styles.css";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  braveWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { chain, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// adding in more chains..
// const boba: Chain = {
//   id: 288,
//   name: "Boba Network",
//   network: "boba",
//   nativeCurrency: {
//     name: "Boba",
//     symbol: "BOBA",
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: "https://mainnet.boba.network",
//   },
//   testnet: false,
// };

// const avalanche: Chain = {
//   name: "Avalanche",
//   network: "avalanche",
//   id: 43114,
//   nativeCurrency: {
//     name: "Avalanche",
//     symbol: "AVAX",
//     decimals: 18,
//   },
//   rpcUrls: { default: "https://api.avax.network/ext/bc/C/rpc" },
// };

// const fantom: Chain = {
//   name: "Fantom",
//   network: "fantom",
//   id: 250,
//   nativeCurrency: {
//     name: "Fantom",
//     symbol: "FTM",
//     decimals: 18,
//   },
//   rpcUrls: { default: "https://rpc.fantom.network" },
// };

export const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      ...chain.goerli,
      rpcUrls: { infura: import.meta.env.GOERLI_VITE_INFURA_URL_KEY, default: "https://rpc.ankr.com/eth_goerli" },
    },
    { ...chain.mainnet, rpcUrls: { default: "https://rpc.ankr.com/eth" } },
  ],
  [publicProvider()],
);

const needsInjectedWalletFallback =
  typeof window !== "undefined" && window.ethereum && !window.ethereum.isMetaMask && !window.ethereum.isCoinbaseWallet;

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true }),
      braveWallet({ chains, shimDisconnect: true }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ appName: "GoerliDAO", chains }),
      ...(needsInjectedWalletFallback ? [injectedWallet({ chains, shimDisconnect: true })] : []),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
