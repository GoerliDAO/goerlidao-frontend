import { SwapWidget } from "@uniswap/widgets";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

declare let window: any;

const Swap = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
  }, []);

  const jsonRPCUrl = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

  return (
    <div className="Uniswap flex items-center justify-center">
      <SwapWidget provider={provider} />
    </div>
  );
};

export default Swap;
