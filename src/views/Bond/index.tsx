import { Listbox, Tab } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useTheme } from "@mui/material";
import axios from "axios";
import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import bondFixedTerm from "src/abi/bond-protocol/bondFixedTerm";
import gdaoABI from "src/abi/bond-protocol/gdaoABI";
import Footer from "src/components/Footer";
import { erc20ABI, useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";

const markets = [
  {
    id: "181",
    marketName: "GDAO / WETH",
    quoteTokenDecimals: 18,
    payoutTokenDecimals: 9,
  },
];
const bondABI = [
  {
    inputs: [
      { internalType: "address", name: "protocol_", type: "address" },
      { internalType: "contract IBondAggregator", name: "aggregator_", type: "address" },
      { internalType: "address", name: "guardian_", type: "address" },
      { internalType: "contract Authority", name: "authority_", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "Teller_InvalidCallback", type: "error" },
  { inputs: [], name: "Teller_InvalidParams", type: "error" },
  { inputs: [], name: "Teller_NotAuthorized", type: "error" },
  {
    inputs: [
      { internalType: "contract ERC20", name: "underlying", type: "address" },
      { internalType: "uint48", name: "expiry", type: "uint48" },
    ],
    name: "Teller_TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint48", name: "maturesOn", type: "uint48" }],
    name: "Teller_TokenNotMatured",
    type: "error",
  },
  { inputs: [], name: "Teller_UnsupportedToken", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "owner", type: "address" },
      { indexed: true, internalType: "address", name: "operator", type: "address" },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "contract Authority", name: "newAuthority", type: "address" },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
      { indexed: true, internalType: "address", name: "referrer", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "payout", type: "uint256" },
    ],
    name: "Bonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "tokenId", type: "uint256" },
      { indexed: true, internalType: "contract ERC20", name: "underlying", type: "address" },
      { indexed: true, internalType: "uint48", name: "expiry", type: "uint48" },
    ],
    name: "ERC1155BondTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "operator", type: "address" },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256[]", name: "ids", type: "uint256[]" },
      { indexed: false, internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "operator", type: "address" },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE_DECIMALS",
    outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [{ internalType: "contract Authority", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "owners", type: "address[]" },
      { internalType: "uint256[]", name: "ids", type: "uint256[]" },
    ],
    name: "balanceOfBatch",
    outputs: [{ internalType: "uint256[]", name: "balances", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds_", type: "uint256[]" },
      { internalType: "uint256[]", name: "amounts_", type: "uint256[]" },
    ],
    name: "batchRedeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20[]", name: "tokens_", type: "address[]" },
      { internalType: "address", name: "to_", type: "address" },
    ],
    name: "claimFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "underlying_", type: "address" },
      { internalType: "uint48", name: "expiry_", type: "uint48" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
    ],
    name: "create",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createFeeDiscount",
    outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "underlying_", type: "address" },
      { internalType: "uint48", name: "expiry_", type: "uint48" },
    ],
    name: "deploy",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "referrer_", type: "address" }],
    name: "getFee",
    outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "underlying_", type: "address" },
      { internalType: "uint48", name: "expiry_", type: "uint48" },
    ],
    name: "getTokenId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId_", type: "uint256" }],
    name: "getTokenNameAndSymbol",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFee",
    outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient_", type: "address" },
      { internalType: "address", name: "referrer_", type: "address" },
      { internalType: "uint256", name: "id_", type: "uint256" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut_", type: "uint256" },
    ],
    name: "purchase",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint48", name: "", type: "uint48" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId_", type: "uint256" },
      { internalType: "uint256", name: "amount_", type: "uint256" },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "referrerFees",
    outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "contract ERC20", name: "", type: "address" },
    ],
    name: "rewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256[]", name: "ids", type: "uint256[]" },
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Authority", name: "newAuthority", type: "address" }],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint48", name: "discount_", type: "uint48" }],
    name: "setCreateFeeDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint48", name: "fee_", type: "uint48" }],
    name: "setProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint48", name: "fee_", type: "uint48" }],
    name: "setReferrerFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tokenMetadata",
    outputs: [
      { internalType: "bool", name: "active", type: "bool" },
      { internalType: "contract ERC20", name: "underlying", type: "address" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "uint48", name: "expiry", type: "uint48" },
      { internalType: "uint256", name: "supply", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const quoteTokenAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const auctioneerContractAddress = "0xF75DAFffaF63f5D935f8A481EE827d68974FD992";
const payoutTokenAddress = "0x4AB540a00C618DE15aC7D297Bb7250d0D8314a6B";
const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
const contract = new ethers.Contract(auctioneerContractAddress, bondFixedTerm, provider);
const payoutTokenContract = new ethers.Contract(payoutTokenAddress, gdaoABI, provider);

const Bond = () => {
  const account = useAccount();
  const theme = useTheme();
  const [wethPrice, setWethPrice] = useState([0]);
  const [bondTab, setBondTab] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [selected, setSelected] = useState(markets[0].id);

  const referrerAddress = "0x0000000000000000000000000000000000000000";
  const ownerAddress = "0xeBf84bbAA9562Fe5Ee0CdEd52dA80063C7af5FDc";
  const tellerAddress = "0x007F7735baF391e207E3aA380bb53c4Bd9a5Fed6";
  const wantApproval = useContractRead({
    abi: erc20ABI,
    functionName: "allowance",
    address: quoteTokenAddress,
    args: [account?.address || "0x0", tellerAddress],
  });

  const wantApproveConfig = usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "approve",
    address: quoteTokenAddress,
    args: [tellerAddress, ethers.constants.MaxUint256],
  });

  const buyBondConfig = usePrepareContractWrite({
    abi: bondABI,
    functionName: "purchase",
    address: tellerAddress,
    args: [
      account?.address || "0x0",
      account?.address || "0x0",
      selected,
      ethers.utils.parseEther(inputValue.toString()),
      0,
    ],
  });
  const wantApprove = useContractWrite(wantApproveConfig.config);
  const buyBond = useContractWrite(buyBondConfig.config);
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
    discount: string;
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
    discount: "0",
  });
  console.log("contractDetails :", contractDetails);

  // User Vesting Tokens Query
  // const {
  //   loading: userVestedTokensLoading,
  //   error: userVestedTokensError,
  //   data: userVestedTokenData,
  // } = useQuery(BOND_PURCHASES_ON_MARKET, {
  //   variables: { selected },
  // });

  // console.log("userVestedTokenData :", userVestedTokenData)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9.]/g, ""); // allow only digits and decimal point
    const floatValue = parseFloat(sanitizedValue);
    if (sanitizedValue === "" || (!isNaN(floatValue) && floatValue >= 0)) {
      setInputValue(floatValue);
    } else {
      setInputValue(0);
    }
  };

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

    const baseScale = BigNumber.from("10").pow(
      BigNumber.from("36")
        .add(9) //payout token decimals
        .sub(18), // quote token decimals
    );

    const shift = Number(baseScale) / Number(marketScale);
    const price = Number(marketPrice) * shift;
    const quoteTokensPerPayoutToken = price / Math.pow(10, 36);
    // quote token hardcoded in for now. will need to use uniswap to get price
    //@ts-ignore
    const discountedPrice = quoteTokensPerPayoutToken * wethPrice;

    // will need to get payout token price (gdao) to figure out discount
    // hardcoded gdao value for now
    // let discount = (discountedPrice - payoutToken.price) / payoutToken.price;
    let discount = (discountedPrice - 0.000051848112998) / 0.000051848112998;
    discount *= 100;

    const capacity = Number(currentCapacity) / Math.pow(10, 18);

    const maxPayout = Number(marketInfo.maxPayout) / Math.pow(10, 18);
    // will need to get payout token price (gdao) to figure out discount
    // maxPayoutUSD = maxPayout * payoutToken.price;
    //@ts-ignore
    const maxPayoutUsd = maxPayout * wethPrice;
    console.log("maxpayout :", maxPayoutUsd);

    const formattedMaxAccepted = (Number(maxAmountAccepted) - Number(maxAmountAccepted) * 0.005) / Math.pow(10, 18);

    setContractDetails({
      marketPrice: marketPrice.toString(),
      currentCapacity: capacity.toString(),
      marketScale: marketScale.toString(),
      maxAmountAccepted: formattedMaxAccepted.toString(),
      marketInfo: marketInfo.toString(),
      isLive: isLive.toString(),
      markets: markets.toString(),
      ownerPayoutBalance: ownerPayoutBalance.toString(),
      ownerPayoutAllowance: ownerPayoutAllowance.toString(),
      discount: discount.toString(),
    });
  };

  useEffect(() => {
    retrieveContractDetails(selected);
  }, [selected]);

  useEffect(() => {
    const fetchData = () => {
      const token_addr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // update to GDAO (currently OHM)
      const url = `https://api.dexscreener.com/latest/dex/search/?q=${token_addr}`;
      axios
        .get(url)
        .then(res => {
          console.log(res.data);
          const json_data = JSON.stringify(res.data.pairs[0]);
          const price_ = JSON.parse(json_data).priceUsd;
          setWethPrice(price_);
        })
        .catch(err => console.log(err));
    };
    fetchData(); // fetch data immediately
    const intervalId = setInterval(fetchData, 5 * 60 * 1000); // fetch data every 5 mins
    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div
          style={{
            border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
          className="p-4 rounded-lg w-full md:w-1/2"
        >
          <div className="flex flex-col">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default border border-black rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownOutlinedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {markets.map((market, marketIdx) => (
                    <Listbox.Option
                      key={marketIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={market.marketName}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {market.id} - {market.marketName}
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
              </div>
            </Listbox>

            <div
              style={{
                border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
              }}
              className="text-xs my-5 p-2 rounded-md grid grid-cols-1 auto-rows-auto gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Status</span>
                <span className="">{contractDetails.isLive ? "Live" : "Not Live"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Discount</span>
                <span style={{ color: parseFloat(contractDetails.discount) < 0 ? "red" : "green" }}>
                  {contractDetails.discount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Market Price</span>
                <span className="">{ethers.utils.formatUnits(contractDetails.marketPrice)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Purchase Limit</span>
                <span className="">{ethers.utils.formatEther(contractDetails.currentCapacity)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Max Amount Accepted</span>
                <span className="">{contractDetails.maxAmountAccepted}</span>
              </div>
            </div>

            <Tab.Group>
              <Tab.List className="text-xs flex items-center justify-around">
                <Tab className="underline">Purchase Bond</Tab>
                <Tab className="underline">Redeem Bond</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <input
                    min={0}
                    type="number"
                    onChange={handleInputChange}
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 mt-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter bond amount in quote token"
                  />

                  {wantApproval.data?.lt(ethers.utils.parseEther(inputValue.toString()) || 0) ? (
                    <button
                      onClick={() => wantApprove?.writeAsync?.()}
                      className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5"
                    >
                      Approve
                    </button>
                  ) : (
                    <></>
                  )}
                  {wantApproval.data?.gte(ethers.utils.parseEther(inputValue.toString()) || 0) ? (
                    <button
                      onClick={() => buyBond?.writeAsync?.()}
                      className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5"
                    >
                      Bond
                    </button>
                  ) : (
                    <></>
                  )}
                </Tab.Panel>
                <Tab.Panel>
                  <input
                    min={0}
                    type="number"
                    onChange={handleInputChange}
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 mt-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter redemption amount"
                  />
                  <button className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5">
                    Redeem
                  </button>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        <div>
          <span></span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bond;
