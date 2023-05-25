import { Listbox, Transition } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useTheme } from "@mui/material";
import { ethers } from "ethers";
import React, { Fragment, useEffect, useState } from "react";
import bondFixedTerm from "src/abi/bond-protocol/bondFixedTerm";
import gdaoABI from "src/abi/bond-protocol/gdaoABI";
import Footer from "src/components/Footer";
import { useAccount } from "wagmi";

const markets = [{ id: "181", marketName: "GDAO" }];

const auctioneerContractAddress = "0xF75DAFffaF63f5D935f8A481EE827d68974FD992";
const payoutTokenAddress = "0x4AB540a00C618DE15aC7D297Bb7250d0D8314a6B";
const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
const contract = new ethers.Contract(auctioneerContractAddress, bondFixedTerm, provider);
const payoutTokenContract = new ethers.Contract(payoutTokenAddress, gdaoABI, provider);

const Bond = () => {
  const account = useAccount();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState(0);
  const [selected, setSelected] = useState(markets[0].id);
  const [contractDetails, setContractDetails] = useState<{
    marketPrice: string;
    currentCapacity: string;
    marketScale: string;
    maxAmountAccepted: string;
    marketInfo: string;
    isLive: string;
    markets: string;
    ownerPayoutBalance: string;
    ownerPayoutAllowance: string;
  }>({
    marketPrice: "0",
    currentCapacity: "0",
    marketScale: "0",
    maxAmountAccepted: "0",
    marketInfo: "0",
    isLive: "0",
    markets: "0",
    ownerPayoutBalance: "0",
    ownerPayoutAllowance: "0",
  });
  console.log("selected :", selected);
  console.log("contractDetails :", contractDetails);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9.]/g, ""); // allow only digits and decimal point
    const floatValue = parseFloat(sanitizedValue);
    if (sanitizedValue === "" || (!isNaN(floatValue) && floatValue >= 0)) {
      setInputValue(floatValue);
    }
  };

  const marketId = "181";

  // User Vesting Tokens Query
  // const {
  //   loading: userVestedTokensLoading,
  //   error: userVestedTokensError,
  //   data: userVestedTokenData,
  // } = useQuery(BOND_PURCHASES_ON_MARKET, {
  //   variables: { selected },
  // });

  // console.log("userVestedTokenData :", userVestedTokenData)

  // const retrieveContractDetails = async (id: string) => {
  //   const marketPrice = await contract.marketPrice(id);
  //   const currentCapacity = await contract.currentCapacity(id);
  //   const maxPayout = await contract.maxPayout(id);
  //   //let amount = ethers.utils.parseEther(inputValue.toString());
  //   //let payoutFor = await contract.payoutFor(id, amount, '0');

  //   setContractDetails({
  //     marketPrice: ethers.utils.formatEther(marketPrice),
  //     currentCapacity: ethers.utils.formatEther(currentCapacity),
  //     maxPayout: ethers.utils.formatEther(maxPayout),
  //     //payoutFor: payoutFor.toString(),
  //   });
  // };

  const referrerAddress = "0x0000000000000000000000000000000000000000";
  const ownerAddress = "0xeBf84bbAA9562Fe5Ee0CdEd52dA80063C7af5FDc";
  const tellerAddress = "0x007F7735baF391e207E3aA380bb53c4Bd9a5Fed6";

  const retrieveContractDetails = async (id: string) => {
    const [
      currentCapacity,
      marketPrice,
      marketScale,
      maxAmountAccepted,
      marketInfo,
      isLive,
      markets,
      ownerPayoutBalance,
      ownerPayoutAllowance,
    ] = await Promise.all([
      contract.currentCapacity(id),
      contract.marketPrice(id),
      contract.marketScale(id),
      contract.maxAmountAccepted(id, referrerAddress),
      contract.getMarketInfoForPurchase(id),
      contract.isLive(id),
      contract.markets(id),
      payoutTokenContract.balanceOf(ownerAddress),
      payoutTokenContract.allowance(ownerAddress, tellerAddress),
    ]);

    setContractDetails({
      marketPrice: ethers.utils.formatEther(marketPrice),
      currentCapacity: ethers.utils.formatEther(currentCapacity),
      marketScale: marketScale.toString(),
      maxAmountAccepted: ethers.utils.formatEther(maxAmountAccepted),
      marketInfo: marketInfo.toString(),
      isLive: isLive.toString(),
      markets: markets.toString(),
      ownerPayoutBalance: ethers.utils.formatEther(ownerPayoutBalance),
      ownerPayoutAllowance: ethers.utils.formatEther(ownerPayoutAllowance),
    });
  };

  useEffect(() => {
    retrieveContractDetails(selected);
  }, [selected]);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div
          style={{
            border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
          className="p-4 rounded-lg"
        >
          <div className="flex flex-col">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default border border-black rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownOutlinedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {markets.map((market, marketIdx) => (
                      <Listbox.Option
                        key={marketIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                          }`
                        }
                        value={market}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                              {market.marketName}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <div
              style={{
                border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
              }}
              className="text-xs my-5 p-2 rounded-md grid grid-cols-1 auto-rows-auto gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Market Status</span>
                <span className="">{contractDetails.isLive ? "Live" : "Not Live"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Market Price</span>
                <span className="">{contractDetails.marketPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Max Capacity</span>
                <span className="">{contractDetails.currentCapacity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Max Amount Accepted</span>
                <span className="">{contractDetails.maxAmountAccepted}</span>
              </div>
            </div>

            <input
              min={0}
              type="number"
              onChange={handleInputChange}
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 mt-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter bond amount"
            />
            <button className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5">
              Bond
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bond;
