import { SwapWidget } from "@uniswap/widgets";
import React from "react";
import Footer from "src/components/Footer";
import { useProvider } from "wagmi";

declare let window: any;

type Token = string;

interface TokensListProps {
  selected: Token;
  tokens: Token[];
}

const mainnet_RPC_URL = import.meta.env.VITE_INFURA_URL_KEY;

const jsonRpcUrlMap = {
  1: [mainnet_RPC_URL],
};

const tokens = ["WETH", "USDC", "SGDAO", "GDAO", "XGDAO"];

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
  // const getPairs = async () => {
  //   try {
  //     const currentPoolAddress = computePoolAddress({
  //       factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
  //       tokenA: USDC_TOKEN,
  //       tokenB: WETH_TOKEN,
  //       fee: FeeAmount.LOWEST,
  //     });

  //     const poolContract = new ethers.Contract(currentPoolAddress, IUniswapV3PoolABI.abi, provider);

  //     const [token0, token1, fee] = await Promise.all([
  //       poolContract.token0(),
  //       poolContract.token1(),
  //       poolContract.fee(),
  //     ]);

  //     const quoterContract = new ethers.Contract(QUOTER_CONTRACT_ADDRESS, Quoter.abi, provider);

  //     const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
  //       token0,
  //       token1,
  //       fee,
  //       fromReadableAmount(10, 10).toString(),
  //       0,
  //     );

  //     const number = ethers.BigNumber.from(quotedAmountOut);

  //     console.log("This is the quoted amount: ", quotedAmountOut);
  //     console.log("This is the final number :", number);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // useEffect(() => {
  // //   setProvider(new ethers.providers.Web3Provider(window.ethereum));
  // //   getPairs();
  // // }, []);

  return (
    <>
      <div className="Uniswap flex items-center justify-center">
        <form className="hidden flex flex-col">
          <fieldset className="flex flex-row">
            <input
              className="border border-purple-400 rounded mb-2 px-4 py-2 bg-slate-50 text-xl rounded-tr-none rounded-br-none border-r-0 w-full"
              type="text"
              placeholder="0.0"
            />
            <TokensList selected="USDC" tokens={tokens} />
          </fieldset>
          <fieldset className="flex flex-row">
            <input
              className="border border-purple-400 rounded mb-2 px-4 py-2 bg-slate-50 text-xl rounded-tr-none rounded-br-none border-r-0 w-full"
              type="text"
              placeholder="0.0"
              readOnly
            />
            <TokensList selected="WETH" tokens={tokens} />
          </fieldset>
        </form>
        <div className="Uniswap my-10">
          <SwapWidget
            jsonRpcUrlMap={jsonRpcUrlMap}
            brandedFooter={false}
            //@ts-ignore
            provider={provider}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Swap;
