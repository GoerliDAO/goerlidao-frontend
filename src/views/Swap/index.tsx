import React from "react";
import Footer from "src/components/Footer";
import { useProvider } from "wagmi";

declare let window: any;

type Token = string;

interface TokensListProps {
  selected: Token;
  tokens: Token[];
}

const TOKEN_LIST = [
  {
    name: "Mainnet ETH",
    address: "0xdD69DB25F6D620A7baD3023c5d32761D353D3De9",
    symbol: "METH",
    decimals: 18,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  {
    name: "Test Goerli DAO",
    address: "0xe12873dfeab0ba61ac7b742fc3679f702a6808e9",
    symbol: "GDAO",
    decimals: 9,
    chainId: 5,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  {
    name: "Goerli ETH",
    address: "0x4f7a67464b5976d7547c860109e4432d50afb38e",
    symbol: "GETH",
    decimals: 18,
    chainId: 5,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
];

const mainnet_RPC_URL = import.meta.env.VITE_INFURA_URL_KEY;
const goerli_RPC_URL = import.meta.env.VITE_INFURA_URL_KEY;

const jsonRpcUrlMap = {
  1: [mainnet_RPC_URL],
  5: [goerli_RPC_URL],
};

const tokens = ["wETH", "ETH", "SGDAO", "GDAO", "XGDAO"];

const TokensList: React.FC<TokensListProps> = ({ selected, tokens }) => {
  return (
    <select
      className="bg-slate-50 border border-purple-400 rounded mb-2 rounded-tl-none rounded-bl-none border-l-0"
      defaultValue={selected}
    >
      {tokens.map(t => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );
};

const Swap = () => {
  const provider = useProvider();

  return (
    <>
      <div className="flex items-center justify-center">
        <iframe height={500} style={{ borderRadius: 20 }} src="https://graceful-cactus-2bd4c8.netlify.app/"></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Swap;
