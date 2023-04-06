import { Listbox, Transition } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SwapCallsOutlinedIcon from "@mui/icons-material/SwapCallsOutlined";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Fragment, useState } from "react";

const TOKEN_LIST = [
  {
    name: "Dai Stablecoin",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    symbol: "DAI",
    decimals: 18,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  {
    name: "Tether USD",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    decimals: 6,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  },
  {
    name: "USD Coin",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    symbol: "USDC",
    decimals: 6,
    chainId: 1,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
];

interface TokenListProps {
  tokens: Array<any>;
  typeOfInput?: string;
}

const Bridge = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(TOKEN_LIST[0]);
  const [globalInput, setGlobalInput] = useState(TOKEN_LIST[0]);
  const [globalOutput, setGlobalOutput] = useState(TOKEN_LIST[0]);

  const TokenList = ({ tokens, typeOfInput }: TokenListProps) => {
    return (
      <>
        <div className="w-full z-50">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative border border-black">
              <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <KeyboardArrowDownOutlinedIcon />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-50 border border-black absolute max-h-60 w-full overflow-auto bg-white sm:text-sm">
                  {TOKEN_LIST.map((token, tokenIdx) => (
                    <Listbox.Option
                      key={tokenIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-2 ${
                          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={token}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`pl-5 block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            <Typography style={{ fontSize: "1.075em" }}>{token.name}</Typography>
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center text-amber-600">
                              <CheckIcon />
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
          <div className="z-30 border-l border-r border-b border-black">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <button className="text-xs bg-gray-100 p-1">MAX</button>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full p-4 pl-12 pr-12 sm:text-sm"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex flex-col justify-center p-1.5 text-gray-400">
                <span
                  style={{
                    fontSize: "0.6rem",
                  }}
                  className="uppercase"
                >
                  Balance
                </span>
                <span
                  style={{
                    fontSize: "0.6rem",
                  }}
                >
                  0.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="my-20 flex items-center justify-center">
        <div className="p-5 w-1/3 border border-black grid grid-cols-1 auto-rows-auto gap-4">
          <span className="flex justify-center font-semibold text-xl">Bridge</span>

          <TokenList tokens={TOKEN_LIST} />

          <div className="flex justify-center">
            <SwapCallsOutlinedIcon />
          </div>

          <TokenList tokens={TOKEN_LIST} />

          {/* CUSTOMER RECEIPT AND BRIDGE BUTTON */}
          <div className="grid grid-cols-1 auto-rows-auto gap-4">
            <div className="text-xs text-gray-600">
              <div className="flex items-center justify-between">
                <span>You will recieve</span>
                <span>0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gas Cost</span>
                <span>0.00</span>
              </div>
            </div>

            <button className="py-3 px-6 bg-blue-800 text-white w-full font-semibold">ENTER AMOUNT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bridge;
