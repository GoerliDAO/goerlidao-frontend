import React from "react";
import Footer from "src/components/Footer";

const LandingPage = () => {
  return (
    <>
      <main className="container mx-auto">
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold">Goerli is more than a testnet. </h1>
          <p className="w-1/2 text-sm text-center">
            With LayerZero’s bridge, real money exists on Goerli. This means that Goerli is no longer a testnet. It is
            now a canary network for Ethereum. GoerliDAO is the first production project built on Goerli mainnet.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="p-4 col-span-12 md:col-span-9 border border-gray-500">
              <span className="font-light text-5xl">How to Participate</span>
              <hr className="my-2.5" />
            </div>
            <div className="p-4 col-span-12 md:col-span-3 border border-gray-500">
              <span className="font-light text-5xl">Stats</span>
              <hr className="my-2.5" />
            </div>
          </div>
        </div>

        <div className="my-10 p-4 border border-gray-500 mx-auto">
          <span className="font-light text-5xl">Cross the Bridge</span>
          <hr className="my-2.5" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
