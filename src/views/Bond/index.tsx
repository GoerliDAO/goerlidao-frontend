import { Listbox, Transition } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useTheme } from "@mui/material";
import { ethers } from "ethers";
import React, { Fragment, useEffect, useState } from "react";
import bondFixedTerm from "src/abi/bond-protocol/bondFixedTerm";
import Footer from "src/components/Footer";
import { useAccount } from "wagmi";

const markets = [{ id: "181", marketName: "GDAO" }];

const contractAddress = "0xF75DAFffaF63f5D935f8A481EE827d68974FD992";
const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
const contract = new ethers.Contract(contractAddress, bondFixedTerm, provider);

const Bond = () => {
  const account = useAccount();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState(0);
  const [selected, setSelected] = useState(markets[0].id);
  const [contractDetails, setContractDetails] = useState<{
    marketPrice: string;
    currentCapacity: string;
    maxPayout: string;
    //payoutFor: string
  }>({
    marketPrice: "0",
    currentCapacity: "0",
    maxPayout: "0",
    //payoutFor: '0'
  });
  console.log("selected :", selected);

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

  const retrieveContractDetails = async (id: string) => {
    const marketPrice = await contract.marketPrice(id);
    const currentCapacity = await contract.currentCapacity(id);
    const maxPayout = await contract.maxPayout(id);
    //let amount = ethers.utils.parseEther(inputValue.toString());
    //let payoutFor = await contract.payoutFor(id, amount, '0');

    setContractDetails({
      marketPrice: ethers.utils.formatEther(marketPrice),
      currentCapacity: ethers.utils.formatEther(currentCapacity),
      maxPayout: ethers.utils.formatEther(maxPayout),
      //payoutFor: payoutFor.toString(),
    });
  };

  useEffect(() => {
    retrieveContractDetails(selected);
  }, [selected]);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div>
          <div
            style={{
              backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
            }}
            className="p-4 rounded-md"
          >
            <div className="my-5 text-xs font-semibold grid grid-cols-3 grid-rows-1 gap-2">
              <div className="flex flex-col text-center">
                <h2>Market Price</h2>
                <span className="font-bold text-xl">{contractDetails.marketPrice}</span>
              </div>
              <div className="flex flex-col text-center">
                <h2>Max Capacity</h2>
                <span className="font-bold text-xl">{contractDetails.currentCapacity}</span>
              </div>
              <div className="flex flex-col text-center">
                <h2>Max Payout</h2>
                <span className="font-bold text-xl">{contractDetails.maxPayout}</span>
              </div>
            </div>
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
      </div>
      <Footer />
    </>
  );
};

export default Bond;
