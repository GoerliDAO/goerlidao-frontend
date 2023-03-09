import React from "react";

const LandingPage = () => {
  return (
    <main className="container mx-auto border border-red-500">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold">Goerli is more than a testnet. </h1>
        <p className="w-1/2 text-sm text-center">
          With LayerZero’s bridge, real money exists on Goerli. This means that Goerli is no longer a testnet. It is now
          a canary network for Ethereum. GoerliDAO is the first production project built on Goerli mainnet.
        </p>
      </div>
    </main>
  );
};

export default LandingPage;
