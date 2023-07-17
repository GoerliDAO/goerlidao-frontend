import { useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ReactComponent as CeramicApe } from "src/assets/GDAO-ceramic-ape.svg";
// other icons
import { ReactComponent as DarkBondIcon } from "src/assets/icons/bonding-dark.svg";
import { ReactComponent as LightBondIcon } from "src/assets/icons/bonding-light.svg";
// dark icons
import { ReactComponent as DarkBridgeIcon } from "src/assets/icons/bridge-dark.svg";
// light icons
import { ReactComponent as LightBridgeIcon } from "src/assets/icons/bridge-light.svg";
import { ReactComponent as DarkGovernanceIcon } from "src/assets/icons/governance-dark.svg";
import { ReactComponent as LightGovernanceIcon } from "src/assets/icons/governance-light.svg";
import { ReactComponent as DarkStakeIcon } from "src/assets/icons/staking-dark.svg";
import { ReactComponent as LightStakeIcon } from "src/assets/icons/staking-light.svg";
import { ReactComponent as DarkSwapIcon } from "src/assets/icons/swapping-dark.svg";
import { ReactComponent as LightSwapIcon } from "src/assets/icons/swapping-light.svg";
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
  const theme = useTheme();

  return (
    <div
      style={{
        border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
        backgroundColor:
          theme.palette.mode === "dark" ? "#181818" : "rgba(232, 232, 252, 1), rgba(232, 232, 252, 0.72)",
      }}
      className="rounded-md"
    >
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <span
          style={{
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000",
          }}
        >
          {icon}
        </span>
      </div>
      <hr
        style={{
          borderBottom: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
        }}
        className="my-2.5 w-3/4"
      />
      <div className="p-4 grid grid-cols-1 grid-rows-2 gap-8">
        <p className="text-base">{description}</p>
        <Link
          style={{
            border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
          className="w-fit h-fit px-10 py-2 text-base border border-black"
          to={`${actionLink}`}
        >
          {actionTitle}
        </Link>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const theme = useTheme();

  const [data, setPrice] = useState([0]);
  const [liq, setLiquidity] = useState([0]);

  useEffect(() => {
    const token_addr = "0xd59Abc4D7E6948De9344574A3a63754186e17a2C"; // update to GDAO
    const url = `https://api.dexscreener.com/latest/dex/search/?q=${token_addr}`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        const json_data = JSON.stringify(res.data.pairs[0]);
        const price_ = JSON.parse(json_data).priceUsd;
        setPrice(price_);

        const liq_ = JSON.parse(json_data).liquidity.usd;
        setLiquidity(liq_);
        console.log(`price usd: ${price_}`);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <main className="">
        <div
          style={{
            backgroundColor: theme.palette.mode === "dark" ? "#181818" : "#0202FF",
          }}
          className="h-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-white w-full text-4xl md:w-1/2 md:text-4xl xl:text-7xl text-center font-light">
              Empowering the Goerli Ecosystem
            </h1>
            <CeramicApe style={{ width: "300px" }} className="w-full" />
            <p className="p-2 w-full md:w-1/2 text-xs md:text-sm text-center text-white">
              With LayerZero’s bridge, real money exists on Goerli. This means that Goerli is no longer a testnet. It is
              now a canary network for Ethereum. GoerliDAO is the first production project built on Goerli mainnet.
            </p>
            <Link
              className="text-sm my-5 px-6 py-2 tracking-wider border border-white text-white font-semibold"
              to="/donate"
            >
              Donation Event Live!
            </Link>
          </div>
        </div>

        <div className="container mx-auto">
          <div
            style={{
              border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
              background: theme.palette.mode === "dark" ? "#181818" : "#E8E8FC",
            }}
            className="hidden font-base my-10 border border-black"
          >
            <div className="p-4 flex items-end">
              <p style={{ color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF" }} className="text-5xl">
                Protocol Statistics
              </p>
              <span>
                <FiCornerRightDown
                  style={{
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                  }}
                  className="w-10 h-10 ml-8"
                />
              </span>
            </div>

            <hr
              style={{ width: "35%", borderColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF" }}
              className="my-2.5"
            />

            <div className="p-4 my-10 md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
              <div>
                <p className="my-2.5 text-lg">Treasury Balance</p>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                  }}
                  className="text-3xl md:text-5xl"
                >
                  $0
                </span>
              </div>

              <div>
                <p className="my-2.5 text-lg">Number of Holders</p>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                    }}
                    className="text-3xl md:text-5xl"
                  >
                    20
                  </span>

                  <div className="hidden md:flex items-center justify-between">
                    <img src="../src/assets/GDAO-golden-ape.svg" />
                    <img src="../src/assets/GDAO-golden-ape.svg" />
                    <img src="../src/assets/GDAO-golden-ape.svg" />
                  </div>
                </div>
              </div>

              <div>
                <p className="my-2.5 text-lg">Protocol-Owned Liquidity</p>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                  }}
                  className="text-3xl md:text-5xl"
                >
                  ${liq}
                </span>
              </div>

              <div>
                <p className="my-2.5 text-lg">Unique Tokens in Treasury</p>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                  }}
                  className="text-3xl md:text-5xl"
                >
                  2
                </span>
              </div>

              <div>
                <p className="my-2.5 text-lg">GDAO Price</p>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#0202FF",
                  }}
                  className="text-3xl md:text-5xl"
                >
                  ${data}
                </span>
              </div>
            </div>
          </div>

          <div className="container mx-auto my-20 flex items-center justify-center">
            <span className="md:w-1/2 text-center font-light text-4xl md:text-6xl">Discover the Power of GDAO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4">
            <Features
              title="Bridging"
              description="Bridging allows you to transfer ETH and GETH from Ethereum mainnet to the Goerli network. Once you bridge, you can swap to gain GDAO tokens, participate in the governance process, and earn rewards through staking and bonding. GoerliDAO utilizes LayerZero’s bridge contracts, allowing you to bring liquidity and capital from other ecosystems to the Goerli blockchain, contributing to its growth and development."
              icon={theme.palette.mode === "dark" ? <LightBridgeIcon /> : <DarkBridgeIcon />}
              actionLink="bridge"
              actionTitle="Bridge"
            />

            <Features
              title="Swapping"
              description="Swapping allows you to trade Goerli ETH and METH for GDAO. With deep liquidity, GDAO tokens can be easily exchanged for other tokens, providing favorable trading conditions for investors and traders. Swapping is an efficient way to acquire GDAO, manage your portfolio, and maximize your returns on investment."
              icon={theme.palette.mode === "dark" ? <LightSwapIcon /> : <DarkSwapIcon />}
              actionLink="swap"
              actionTitle="Swap"
            />

            <Features
              title="Staking"
              description="By staking GDAO, you contribute to the growth of the Goerli ecosystem while earning rewards for your participation. Stakers deposit GDAO into the protocol to earn rewards and participate in governance processes. "
              icon={theme.palette.mode === "dark" ? <LightStakeIcon /> : <DarkStakeIcon />}
              actionLink="/"
              actionTitle="Stake"
            />

            <Features
              title="Bonding"
              description="You can exchange various tokens for GDAO at a discounted rate by bonding. Bond sales provide additional liquidity and reserve assets to the GoerliDAO treasury, ensuring favorable trading conditions and deep liquidity for GDAO."
              icon={theme.palette.mode === "dark" ? <LightBondIcon /> : <DarkBondIcon />}
              actionLink="/"
              actionTitle="Bond"
            />

            <Features
              title="Governance"
              description="As a GDAO staker, your governance rights will allow you to participate in allocating funds for investments, financing new projects, and distributing grants to developers building on Goerli. "
              icon={theme.palette.mode === "dark" ? <LightGovernanceIcon /> : <DarkGovernanceIcon />}
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
