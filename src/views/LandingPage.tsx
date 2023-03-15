import React from "react";
import FAQ from "src/components/FAQ";
import Footer from "src/components/Footer";

interface FeaturesProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLink?: string;
  actionTitle?: string;
}

const Features = ({ title, description, icon, actionLink, actionTitle }: FeaturesProps) => {
  return (
    <div className="border border-black rounded-md">
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <span>{icon}</span>
      </div>
      <hr className="my-2.5 w-3/4 text-black" />
      <div className="p-4 grid grid-cols-1 grid-rows-2 gap-8">
        <p className="text-lg">{description}</p>
        <div>
          <a className="px-8 py-3 text-base border border-black" href={`/${actionLink}`}>
            {actionTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <main className="">
        {/* INTRO */}
        <div className="h-screen flex flex-col items-center justify-center bg-blue-800">
          <h1 className="w-1/2 text-7xl font-extralight text-center">Empowering the Goerli ecosystem. </h1>
          <p className="w-1/2 text-base text-center">
            With LayerZero’s bridge, real money exists on Goerli. This means that Goerli is no longer a testnet. It is
            now a canary network for Ethereum. GoerliDAO is the first production project built on Goerli mainnet.
          </p>
          <a
            className="my-5 border border-white text-white hover:bg-white hover:text-black px-6 py-2 tracking-wider"
            href=""
          >
            Discover How
          </a>
        </div>

        <div className="container mx-auto my-10 p-4 border border-gray-500">
          <span className="font-light text-5xl">Protocol Statistics</span>
          <hr className="my-2.5" />

          <div className="my-10 md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            <div>
              <p className="my-2.5 text-lg">Treasury Balance</p>
              <span className="font-light md:text-5xl">$0</span>
            </div>

            <div>
              <p className="my-2.5 text-lg">Number of Holders</p>
              <span className="font-light md:text-5xl">$0</span>
            </div>

            <div>
              <p className="my-2.5 text-lg">Protocol-Owned Liquidity</p>
              <span className="font-light md:text-5xl">$0</span>
            </div>

            <div>
              <p className="my-2.5 text-lg">Unique Tokens in Treasury</p>
              <span className="font-light md:text-5xl">2</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="my-20 flex items-center justify-center">
            <span className="md:w-1/2 text-center font-light text-7xl">Discover the Power of GDAO</span>
          </div>

          {/* GDAO Features */}
          <div className="grid grid-cols-2 auto-rows-auto gap-4">
            <Features
              title="Bridging"
              description="Bridging allows you to transfer ETH and GETH from Ethereum mainnet to the Goerli network. Once you bridge, you can swap to gain GDAO tokens, participate in the governance process, and earn rewards through staking and bonding. GoerliDAO utilizes LayerZero’s bridge contracts, allowing you to bring liquidity and capital from other ecosystems to the Goerli blockchain, contributing to its growth and development."
              icon="Icon"
              actionLink="bridge"
              actionTitle="Bridge"
            />

            <Features
              title="Swapping"
              description="Swapping allows you to trade Goerli ETH and METH for GDAO. With deep liquidity, GDAO tokens can be easily exchanged for other tokens, providing favorable trading conditions for investors and traders. Swapping is an efficient way to acquire GDAO, manage your portfolio, and maximize your returns on investment."
              icon="Icon"
              actionLink="swap"
              actionTitle="Swap"
            />

            <Features
              title="Staking"
              description="By staking GDAO, you contribute to the growth of the Goerli ecosystem while earning rewards for your participation. Stakers deposit GDAO into the protocol to earn rewards and participate in governance processes. "
              icon="Icon"
              actionLink="stake"
              actionTitle="Stake"
            />

            <Features
              title="Bonding"
              description="You can exchange various tokens for GDAO at a discounted rate by bonding. Bond sales provide additional liquidity and reserve assets to the GoerliDAO treasury, ensuring favorable trading conditions and deep liquidity for GDAO."
              icon="Icon"
              actionLink="bond"
              actionTitle="Bond"
            />

            <Features
              title="Governance"
              description="As a GDAO staker, your governance rights will allow you to participate in allocating funds for investments, financing new projects, and distributing grants to developers building on Goerli. "
              icon="Icon"
              actionLink="governance"
              actionTitle="Coming Soon"
            />
          </div>
        </div>
      </main>
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
