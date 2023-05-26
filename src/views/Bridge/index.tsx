import { Listbox } from "@headlessui/react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import Footer from "src/components/Footer";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { useBalance, useContractWrite, usePrepareContractWrite } from "wagmi";
import { useAccount, useNetwork } from "wagmi";

const abiGETH = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      { internalType: "address", name: "_lzEndpoint", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "owner", type: "address" },
      { indexed: true, internalType: "address", name: "spender", type: "address" },
      { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { indexed: false, internalType: "bytes", name: "_srcAddress", type: "bytes" },
      { indexed: false, internalType: "uint64", name: "_nonce", type: "uint64" },
      { indexed: false, internalType: "bytes", name: "_payload", type: "bytes" },
      { indexed: false, internalType: "bytes", name: "_reason", type: "bytes" },
    ],
    name: "MessageFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
      { indexed: false, internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "ReceiveFromChain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { indexed: false, internalType: "bytes", name: "_srcAddress", type: "bytes" },
      { indexed: false, internalType: "uint64", name: "_nonce", type: "uint64" },
      { indexed: false, internalType: "bytes32", name: "_payloadHash", type: "bytes32" },
    ],
    name: "RetryMessageSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint16", name: "_dstChainId", type: "uint16" },
      { indexed: true, internalType: "address", name: "_from", type: "address" },
      { indexed: false, internalType: "bytes", name: "_toAddress", type: "bytes" },
      { indexed: false, internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "SendToChain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "_dstChainId", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "_type", type: "uint16" },
      { indexed: false, internalType: "uint256", name: "_minDstGas", type: "uint256" },
    ],
    name: "SetMinDstGas",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "precrime", type: "address" }],
    name: "SetPrecrime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "_remoteChainId", type: "uint16" },
      { indexed: false, internalType: "bytes", name: "_path", type: "bytes" },
    ],
    name: "SetTrustedRemote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "_remoteChainId", type: "uint16" },
      { indexed: false, internalType: "bytes", name: "_remoteAddress", type: "bytes" },
    ],
    name: "SetTrustedRemoteAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "bool", name: "_useCustomAdapterParams", type: "bool" }],
    name: "SetUseCustomAdapterParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "NO_EXTRA_GAS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PT_SEND",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_dstChainId", type: "uint16" },
      { internalType: "bytes", name: "_toAddress", type: "bytes" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "bool", name: "_useZro", type: "bool" },
      { internalType: "bytes", name: "_adapterParams", type: "bytes" },
    ],
    name: "estimateSendFee",
    outputs: [
      { internalType: "uint256", name: "nativeFee", type: "uint256" },
      { internalType: "uint256", name: "zroFee", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "", type: "uint16" },
      { internalType: "bytes", name: "", type: "bytes" },
      { internalType: "uint64", name: "", type: "uint64" },
    ],
    name: "failedMessages",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_srcAddress", type: "bytes" },
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_version", type: "uint16" },
      { internalType: "uint16", name: "_chainId", type: "uint16" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "_configType", type: "uint256" },
    ],
    name: "getConfig",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "_remoteChainId", type: "uint16" }],
    name: "getTrustedRemoteAddress",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_srcAddress", type: "bytes" },
    ],
    name: "isTrustedRemote",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lzEndpoint",
    outputs: [{ internalType: "contract ILayerZeroEndpoint", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_srcAddress", type: "bytes" },
      { internalType: "uint64", name: "_nonce", type: "uint64" },
      { internalType: "bytes", name: "_payload", type: "bytes" },
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "", type: "uint16" },
      { internalType: "uint16", name: "", type: "uint16" },
    ],
    name: "minDstGasLookup",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_srcAddress", type: "bytes" },
      { internalType: "uint64", name: "_nonce", type: "uint64" },
      { internalType: "bytes", name: "_payload", type: "bytes" },
    ],
    name: "nonblockingLzReceive",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "precrime",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_srcAddress", type: "bytes" },
      { internalType: "uint64", name: "_nonce", type: "uint64" },
      { internalType: "bytes", name: "_payload", type: "bytes" },
    ],
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_from", type: "address" },
      { internalType: "uint16", name: "_dstChainId", type: "uint16" },
      { internalType: "bytes", name: "_toAddress", type: "bytes" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "address payable", name: "_refundAddress", type: "address" },
      { internalType: "address", name: "_zroPaymentAddress", type: "address" },
      { internalType: "bytes", name: "_adapterParams", type: "bytes" },
    ],
    name: "sendFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_version", type: "uint16" },
      { internalType: "uint16", name: "_chainId", type: "uint16" },
      { internalType: "uint256", name: "_configType", type: "uint256" },
      { internalType: "bytes", name: "_config", type: "bytes" },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_dstChainId", type: "uint16" },
      { internalType: "uint16", name: "_packetType", type: "uint16" },
      { internalType: "uint256", name: "_minGas", type: "uint256" },
    ],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_precrime", type: "address" }],
    name: "setPrecrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "_version", type: "uint16" }],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "_version", type: "uint16" }],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_srcChainId", type: "uint16" },
      { internalType: "bytes", name: "_path", type: "bytes" },
    ],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_remoteChainId", type: "uint16" },
      { internalType: "bytes", name: "_remoteAddress", type: "bytes" },
    ],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_useCustomAdapterParams", type: "bool" }],
    name: "setUseCustomAdapterParams",
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
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    name: "trustedRemoteLookup",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useCustomAdapterParams",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

const abi = [
  {
    inputs: [
      { internalType: "address", name: "_oft", type: "address" },
      { internalType: "address", name: "_nativeOft", type: "address" },
      { internalType: "address", name: "_uniswapRouter", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint16", name: "dstChainId", type: "uint16" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "address payable", name: "refundAddress", type: "address" },
      { internalType: "address", name: "zroPaymentAddress", type: "address" },
      { internalType: "bytes", name: "adapterParams", type: "bytes" },
    ],
    name: "bridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "nativeOft",
    outputs: [{ internalType: "contract INativeOFT", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oft",
    outputs: [{ internalType: "contract IOFTCore", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "uint16", name: "dstChainId", type: "uint16" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "address payable", name: "refundAddress", type: "address" },
      { internalType: "address", name: "zroPaymentAddress", type: "address" },
      { internalType: "bytes", name: "adapterParams", type: "bytes" },
    ],
    name: "swapAndBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouter",
    outputs: [{ internalType: "contract IUniswapV2Router02", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

const PREFIX = "BridgeInputArea";

const TOKEN_LIST = [
  {
    name: "ETH on Mainnet",
    address: "0xdD69DB25F6D620A7baD3023c5d32761D353D3De9",
    symbol: "ETH",
    decimals: 18,
    chainId: 1,
    logoURI: "https://goerli.etherscan.io/images/main/empty-token.png",
  },
  // {
  //   name: "Test Goerli DAO",
  //   address: "0xba7cac3e2a1391bb9d5edfd64793ccd4fd29dc09",
  //   symbol: "GDAO",
  //   decimals: 9,
  //   chainId: 5,
  //   logoURI:
  //     "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  // },
  {
    name: "GETH on Mainnet",
    address: "0xdD69DB25F6D620A7baD3023c5d32761D353D3De9",
    symbol: "GETH",
    decimals: 18,
    chainId: 5,
    logoURI: "https://etherscan.io/token/images/goerli-eth.png",
  },
];

const TOKEN_LIST_GOERLI = [
  {
    name: "METH on Goerli",
    address: "0xdD69DB25F6D620A7baD3023c5d32761D353D3De9",
    symbol: "METH",
    decimals: 18,
    chainId: 1,
    logoURI: "https://goerli.etherscan.io/images/main/empty-token.png",
  },

  {
    name: "GETH on Goerli",
    address: "0x4f7a67464b5976d7547c860109e4432d50afb38e",
    symbol: "GETH",
    decimals: 18,
    chainId: 5,
    logoURI: "https://goerli.etherscan.io/images/main/empty-token.png",
  },
];

interface TokenListProps {
  tokens: Array<any>;
  typeOfInput?: string;
}

const Bridge = () => {
  const networks = useTestableNetworks();
  const { chain = { id: 1 } } = useNetwork();
  const theme = useTheme();
  const [selected, setSelected] = useState(TOKEN_LIST[0]);
  const [inputSelectedToken, setInputSelectedToken] = useState(TOKEN_LIST[0]);
  const [outputSelectedToken, setOutputSelectedToken] = useState(TOKEN_LIST_GOERLI[0]);
  const [inputAmount, setInputAmount] = useState(0);
  const [gasCost, setGasCost] = useState();
  const { isConnected } = useAccount();

  const [amount, setAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const account = useAccount();
  const prepared = usePrepareContractWrite({
    chainId: 1,
    address: "0x0A9f824C05A74F577A536A8A0c673183a872Dff4",
    abi,
    functionName: "bridge",
    args: [
      parseEther(inputAmount ? Number(inputAmount).toFixed(18) : "0"),
      154,
      account?.address,
      account?.address,
      "0x0000000000000000000000000000000000000000",
      "0x",
      { value: parseEther(String((Number(inputAmount) + 0.0015).toFixed(18))) },
    ],
  });

  const prepareGeth = usePrepareContractWrite({
    chainId: 1,
    address: "0xdd69db25f6d620a7bad3023c5d32761d353d3de9",
    abi: abiGETH,
    functionName: "sendFrom",
    args: [
      account?.address,
      154,
      account?.address,
      parseEther(inputAmount ? Number(inputAmount).toFixed(18) : "0"),
      account?.address,
      "0x0000000000000000000000000000000000000000",
      "0x",
      { value: parseEther("0.0015") },
    ],
  });
  //@ts-ignore
  const bridge = useContractWrite(prepared.config);
  //@ts-ignore
  const sendFrom = useContractWrite(prepareGeth.config);
  // balance stuff
  // const addresses = fromToken === "GDAO" ? GDAO_ADDRESSES : fromToken === "sGDAO" ? SGDAO_ADDRESSES : XGDAO_ADDRESSES;
  // const balance = useBalance(addresses)[networks.MAINNET].data;
  // const wethBalance = useBalance(WETH_ADDRESSES)[networks.MAINNET].data;
  // const gethBalance = useBalance(GETH_ADDRESSES)[networks.MAINNET].data;
  // const methBalance = useBalance(METH_ADDRESSES)[networks.MAINNET].data;

  const ethBalance = useBalance({
    // @ts-ignore
    addressOrName: account?.address,
    formatUnits: "ether",
    chainId: 1,
  });
  console.log(account, ethBalance);

  const gethBalance = useBalance({
    // @ts-ignore
    addressOrName: account?.address,
    token: "0xdd69db25f6d620a7bad3023c5d32761d353d3de9",
    chainId: 1,
    // formatUnits: "ether",
  });
  console.log(account, gethBalance);

  const handleInputValue = (e: any) => {
    if (inputSelectedToken == TOKEN_LIST[0]) {
      if (Number(e.target.value) > Number(ethBalance.data?.formatted) - 0.0015)
        setInputAmount(
          Number(
            (Number(ethBalance.data?.formatted) - 0.0015 < 0 ? 0 : Number(ethBalance.data?.formatted) - 0.0015).toFixed(
              18,
            ),
          ),
        );
      else setInputAmount(Number(Number(e.target.value).toFixed(18)));
    } else {
      if (Number(e.target.value) > Number(gethBalance.data?.formatted))
        setInputAmount(Number(Number(gethBalance.data?.formatted).toFixed(18)));
      else setInputAmount(Number(Number(e.target.value).toFixed(18)));
    }
  };

  const handleInputToken = (e: any) => {
    const token = e;
    const index = TOKEN_LIST.findIndex(x => x.name == e.name);
    console.log(token);
    //@ts-ignore
    setInputSelectedToken(token);
    //@ts-ignore
    setOutputSelectedToken(TOKEN_LIST_GOERLI[index]);
  };

  const handleOutputToken = (e: any) => {
    const token = TOKEN_LIST.find(token => token.name === e.target.value);
    //@ts-ignore
    setOutputSelectedToken(token);
  };

  // handle swap of input and output tokens
  const handleSwap = () => {
    const temp = inputSelectedToken;
    setInputSelectedToken(outputSelectedToken);
    setOutputSelectedToken(temp);
  };

  return (
    <>
      <div className="my-20 flex items-center justify-center">
        <div
          style={{
            width: "400px",
            border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          }}
          className="p-5 grid grid-cols-1 auto-rows-auto gap-8"
        >
          <span className="flex justify-center font-semibold text-xl">Bridge</span>

          {/* INPUT + LISTBOX */}
          <div className="w-full z-50">
            <Listbox value={inputSelectedToken} onChange={handleInputToken}>
              <div className="relative border border-black">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-end justify-between">
                      <div className="w-8 h-8">
                        <img src={inputSelectedToken?.logoURI} className="w-full h-full" />
                      </div>
                      <div
                        style={{
                          color: theme.palette.mode === "dark" ? "#000" : "#000",
                          fontSize: "0.7rem",
                        }}
                        className="flex flex-col truncate mx-2"
                      >
                        <span>{inputSelectedToken?.name}</span>
                        <span>{inputSelectedToken?.symbol}</span>
                      </div>
                      <KeyboardArrowDownOutlinedIcon className="pointer-events-none flex items-center pr-2" />
                    </div>
                  </div>
                </Listbox.Button>
                <Listbox.Options
                  style={{ zIndex: 99 }}
                  className="border border-black absolute max-h-60 w-full overflow-auto bg-white sm:text-sm"
                >
                  {TOKEN_LIST.map((token, tokenIdx) => (
                    <Listbox.Option
                      onChange={handleInputToken}
                      key={tokenIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-1 ${
                          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={token}
                    >
                      {({ selected }) => (
                        <div className="flex items-center justify-between">
                          <span className={`pl-5 block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            <Typography style={{ fontSize: "0.7rem" }}>{token?.name}</Typography>
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center text-amber-600">
                              <CheckIcon
                                style={{
                                  marginLeft: 5,
                                  fontSize: 14,
                                  color: theme.palette.mode === "dark" ? "#000" : "#000",
                                }}
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#000" : "#000",
                  }}
                  className="m-1 text-xs absolute top-0 right-0"
                >
                  {inputSelectedToken?.symbol}
                </span>
              </div>
            </Listbox>
            <div className="z-30 border-l border-r border-b border-black">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  {/* <button
                    style={{
                      fontSize: 9,
                      fontWeight: 500,
                      marginLeft:-40,
                      color: theme.palette.mode === "dark" ? "#000" : "#000",
                    }}
                    onClick={() => setInputAmount(Number(ethBalance.data?.formatted))}
                    className="bg-gray-300 p-1.5"
                  >
                    MAX
                  </button> */}
                </div>
                <input
                  onChange={handleInputValue}
                  type="number"
                  name="price"
                  id="price"
                  step="0.000000000000000001"
                  value={inputAmount}
                  style={{
                    color: theme.palette.mode === "dark" ? "#000" : "#000",
                  }}
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
                    {inputSelectedToken == TOKEN_LIST[0] ? ethBalance?.data?.formatted : gethBalance?.data?.formatted}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div onClick={handleSwap} className="flex justify-center">
            <SwapCallsOutlinedIcon />
          </div> */}

          {/* OUTPUT + LISTBOX */}
          <div className="w-full z-50">
            <Listbox value={outputSelectedToken} disabled onChange={setOutputSelectedToken}>
              <div className="relative border border-black">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-end justify-between">
                      <div className="w-8 h-8">
                        <img src={outputSelectedToken?.logoURI} className="w-full h-full" />
                      </div>
                      <div
                        style={{
                          color: theme.palette.mode === "dark" ? "#000" : "#000",
                          fontSize: "0.7rem",
                        }}
                        className="flex flex-col truncate mx-2"
                      >
                        <span>{outputSelectedToken?.name}</span>
                        <span>{outputSelectedToken?.symbol}</span>
                      </div>
                      <KeyboardArrowDownOutlinedIcon className="pointer-events-none flex items-center pr-2" />
                    </div>
                  </div>
                </Listbox.Button>
                <Listbox.Options
                  style={{ zIndex: 99 }}
                  className="border border-black absolute max-h-60 w-full overflow-auto bg-white sm:text-sm"
                >
                  {TOKEN_LIST.map((token, tokenIdx) => (
                    <Listbox.Option
                      onChange={handleOutputToken}
                      key={tokenIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none p-1 ${
                          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={token}
                    >
                      {({ selected }) => (
                        <div className="flex items-center justify-between">
                          <span className={`pl-5 block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            <Typography style={{ fontSize: "0.7rem" }}>{token.name}</Typography>
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center text-amber-600">
                              <CheckIcon
                                style={{
                                  marginLeft: 5,
                                  fontSize: 14,
                                  color: theme.palette.mode === "dark" ? "#000" : "#000",
                                }}
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
                <span
                  style={{
                    color: theme.palette.mode === "dark" ? "#000" : "#000",
                  }}
                  className="m-1 text-xs absolute top-0 right-0"
                >
                  {outputSelectedToken?.symbol}
                </span>
              </div>
            </Listbox>
            <div className="z-30 border-l border-r border-b border-black">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  {/* <button
                  onClick={() => setInputAmount(Number(ethBalance.data?.formatted))}
                    style={{
                      fontSize: 9,
                      fontWeight: 500,
                      color: theme.palette.mode === "dark" ? "#000" : "#000",
                    }}
                    className="bg-gray-300 p-1.5"
                  >
                    MAX
                  </button> */}
                </div>
                <input
                  onChange={handleInputValue}
                  type="number"
                  name="price"
                  id="price"
                  step="0.000000000000000001"
                  value={inputAmount}
                  style={{
                    color: theme.palette.mode === "dark" ? "#000" : "#000",
                  }}
                  className="block w-full p-4 pl-12 pr-12 sm:text-sm"
                  placeholder="0.00"
                />
                {/* <div className="absolute inset-y-0 right-0 flex flex-col justify-center p-1.5 text-gray-400">
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
                    {0.00}
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          {/* CUSTOMER RECEIPT AND BRIDGE BUTTON */}
          {isConnected && (
            <div
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
              className="grid grid-cols-1 auto-rows-auto gap-4"
            >
              <div className="text-xs">
                <div className="flex items-center justify-between">
                  <span>You will recieve</span>
                  <span>
                    {inputAmount} {outputSelectedToken.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Gas Cost</span>
                  <span>0.0015 ETH messaging + gas</span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (inputAmount <= 0) {
                    alert("No zero inputs");
                  }
                  console.log(parseEther(String(Number(inputAmount) + 0.0015)).toString());
                  if (inputSelectedToken == TOKEN_LIST[0]) {
                    bridge?.writeAsync?.();
                  } else {
                    sendFrom?.writeAsync?.();
                  }
                }}
                className="py-3 px-6 bg-blue-800 text-white w-full font-semibold"
              >
                {inputAmount == 0 ? "ENTER AMOUNT" : "BRIDGE"}
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bridge;
