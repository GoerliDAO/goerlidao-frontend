import React from "react";
import Footer from "src/components/Footer";

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

const mainnet_RPC_URL = import.meta.env.MAINNET_VITE_INFURA_URL_KEY;
const goerli_RPC_URL = import.meta.env.GOERLI_VITE_INFURA_URL_KEY;

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
  return (
    <>
      <div className="mt-10 flex items-center justify-center">
        {/* <iframe height={500} style={{ borderRadius: 20 }} src="https://graceful-cactus-2bd4c8.netlify.app/"></iframe> */}
        <iframe height={470} style={{ borderRadius: 20 }} src="https://gdao-swap.vercel.app/"></iframe>
        {/* <SwapWidget
        tokenList={[
          { name: 'GDAO', symbol: 'GDAO', address: '0xE12873DFEab0Ba61aC7b742fc3679F702a6808e9', decimals: 9, chainId: 5 },
          { name: 'USD//C', symbol: 'USDC', address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', decimals: 6, chainId: 5}
        ]}
        jsonRpcUrlMap={jsonRpcUrlMap}
        defaultOutputTokenAddress={'0xE12873DFEab0Ba61aC7b742fc3679F702a6808e9'} 
        defaultChainId={5}/> */}
      </div>
      <Footer />
    </>
  );
};

export default Swap;
