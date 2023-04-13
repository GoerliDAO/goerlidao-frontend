/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { EggChefV2, EggChefV2Interface } from "../../EggChefV2.sol/EggChefV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEggsToken",
        name: "_eggs",
        type: "address",
      },
      {
        internalType: "contract IUniswapPair",
        name: "_eggsLp",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router",
        name: "_router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRewardPerBlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "LogSetLockDuration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "principal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "compound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountTokenDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountETHMin",
        type: "uint256",
      },
    ],
    name: "compoundBig",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundSmol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eggs",
    outputs: [
      {
        internalType: "contract IEggsToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eggsLp",
    outputs: [
      {
        internalType: "contract IUniswapPair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lockDurations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "x",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "pow",
    outputs: [
      {
        internalType: "int128",
        name: "r",
        type: "int128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
    ],
    name: "setLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockEndedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526509184e72a0006006556000600c553480156200002057600080fd5b506040516200256a3803806200256a83398101604081905262000043916200010d565b6200004e33620000a4565b60018055600280546001600160a01b03199081166001600160a01b039788161790915560038054821695871695909517909455600480549094169290941691909117909155600555600d81905560075562000172565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200010a57600080fd5b50565b600080600080600060a086880312156200012657600080fd5b85516200013381620000f4565b60208701519095506200014681620000f4565b60408701519094506200015981620000f4565b6060870151608090970151959894975095949392505050565b6123e880620001826000396000f3fe6080604052600436106101525760003560e01c806301f8a97614610157578063081e3eda14610179578063126796dd1461019d5780631526fe27146101bd57806317caf6f1146102075780631eaaa0451461021d57806332298be11461023d57806342f83cce1461026a578063441a3e701461027d57806348cd4cb11461029d57806351eb05a6146102b3578063538fb492146102d3578063630b5ba1146102e857806364482f79146102fd578063715018a61461031d578063806b984f146103325780638ae39cac146103485780638da5cb5b1461035e5780638dbdbe6d1461038057806393f1a40b146103a057806398969e82146104025780639fdff70314610422578063ae581bc214610442578063d295ea7014610475578063ddd5e1b21461048b578063e33f76cf146104ab578063f2fde38b146104cb578063f3c85eba146104eb578063f887ea401461050b575b600080fd5b34801561016357600080fd5b50610177610172366004611f95565b61052b565b005b34801561018557600080fd5b506008545b6040519081526020015b60405180910390f35b3480156101a957600080fd5b506101776101b8366004611fae565b610576565b3480156101c957600080fd5b506101dd6101d8366004611f95565b6105cf565b604080516001600160a01b0390951685526020850193909352918301526060820152608001610194565b34801561021357600080fd5b5061018a600c5481565b34801561022957600080fd5b50610177610238366004611ff3565b610613565b34801561024957600080fd5b5061018a610258366004611f95565b600b6020526000908152604090205481565b610177610278366004612035565b610788565b34801561028957600080fd5b50610177610298366004611fae565b6109ad565b3480156102a957600080fd5b5061018a600d5481565b3480156102bf57600080fd5b506101776102ce366004611f95565b610c05565b3480156102df57600080fd5b50610177610e0d565b3480156102f457600080fd5b50610177610ed2565b34801561030957600080fd5b50610177610318366004612061565b610efd565b34801561032957600080fd5b50610177610fbe565b34801561033e57600080fd5b5061018a60075481565b34801561035457600080fd5b5061018a60055481565b34801561036a57600080fd5b50610373610fd2565b604051610194919061208f565b34801561038c57600080fd5b5061017761039b3660046120a3565b610fe1565b3480156103ac57600080fd5b506103e76103bb3660046120d1565b600960209081526000928352604080842090915290825290208054600182015460029092015490919083565b60408051938452602084019290925290820152606001610194565b34801561040e57600080fd5b5061018a61041d3660046120d1565b6111de565b34801561042e57600080fd5b50600354610373906001600160a01b031681565b34801561044e57600080fd5b5061046261045d366004612101565b611409565b604051600f9190910b8152602001610194565b34801561048157600080fd5b5061018a60065481565b34801561049757600080fd5b5061018a6104a63660046120d1565b611465565b3480156104b757600080fd5b50600254610373906001600160a01b031681565b3480156104d757600080fd5b506101776104e6366004612133565b6117d8565b3480156104f757600080fd5b5061018a610506366004612035565b611851565b34801561051757600080fd5b50600454610373906001600160a01b031681565b610533611891565b61053b610ed2565b60058190556040518181527f4e91b3ffa2cd4d03d69ce17f42b0023d0316960080c578857b6f05470d96cdab9060200160405180910390a150565b61057e611891565b6000828152600b6020526040908190208290555182907f6e4fdd86ed4186281f108d19169264f10ab9a86531113410b92c1cfc19971b59906105c39084815260200190565b60405180910390a25050565b600881815481106105df57600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b61061b611891565b801561062957610629610ed2565b6000600d54431161063c57600d5461063e565b435b905083600c5461064e9190612166565b600c55604080516080810182526001600160a01b038581168083526020830188815293830185815260006060850181815260088054600180820183559382905296517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3600490980297880180546001600160a01b031916919097161790955595517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee486015590517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee585015593517ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee69093019290925554909161074f9161217e565b6040518681527f4710feb78e3bce8d2e3ca2989a8eb2f8bcd32a6a55b4535942c180fc4d2e29529060200160405180910390a350505050565b604051636eeaf0d960e11b8152309063ddd5e1b2906107ae906000903390600401612195565b6020604051808303816000875af11580156107cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f191906121ac565b5060025461080a906001600160a01b03163330866118f0565b6002546004805460405163095ea7b360e01b81526001600160a01b039384169363095ea7b39361084093909116918891016121c5565b6020604051808303816000875af115801561085f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088391906121de565b506004805460025460405163f305d71960e01b81526001600160a01b03918216938101939093526024830186905260448301859052606483018490523360848401524260a48401526000928392919091169063f305d71990349060c40160606040518083038185885af11580156108fe573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061092391906121fb565b604051638dbdbe6d60e01b815292945092503091638dbdbe6d91506109519060009085903390600401612229565b600060405180830381600087803b15801561096b57600080fd5b505af115801561097f573d6000803e3d6000fd5b505050506109a6338387610993919061217e565b6002546001600160a01b03169190611961565b5050505050565b600081116109d65760405162461bcd60e51b81526004016109cd90612248565b60405180910390fd5b6000600883815481106109eb576109eb612270565b600091825260208083208684526009825260408085203386529092529220600281015460049092029092019250421015610a565760405162461bcd60e51b815260206004820152600c60248201526b1cdd1a5b1b081b1bd8dad95960a21b60448201526064016109cd565b8054831115610a775760405162461bcd60e51b81526004016109cd90612248565b610a8084610c05565b610a8a8433611980565b82816000016000828254610a9e919061217e565b90915550506003820154815464e8d4a5100091610aba91612286565b610ac491906122bb565b600182015560025482546001600160a01b03918216911603610b5057600254604051631116a97760e11b8152600481018590526001600160a01b039091169063222d52ee90602401602060405180830381865afa158015610b29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4d91906121ac565b92505b8154610b66906001600160a01b03163385611961565b604051838152849033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a3604051636eeaf0d960e11b8152309063ddd5e1b290610bc29087903390600401612195565b6020604051808303816000875af1158015610be1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a691906121ac565b600060088281548110610c1a57610c1a612270565b9060005260206000209060040201905080600201544311610c39575050565b80546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610c6990309060040161208f565b602060405180830381865afa158015610c86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caa91906121ac565b60025483549192506001600160a01b03908116911603610d3857600254604051633af9e66960e01b81526001600160a01b0390911690633af9e66990610cf490309060040161208f565b602060405180830381865afa158015610d11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3591906121ac565b90505b80600003610d4b57504360029091015550565b6000600c548360010154600554856002015443610d68919061217e565b610d729190612286565b610d7c9190612286565b610d8691906122bb565b905081610d988264e8d4a51000612286565b610da291906122bb565b836003016000828254610db59190612166565b909155505043600284018190556003840154604080519283526020830185905282015284907fcb7325664a4a3b7c7223eefc492a97ca4fdf94d46884621e5a8fae5a04b2b9d29060600160405180910390a250505050565b604051636eeaf0d960e11b8152600090309063ddd5e1b290610e36906001903390600401612195565b6020604051808303816000875af1158015610e55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7991906121ac565b604051638dbdbe6d60e01b81529091503090638dbdbe6d90610ea49060019085903390600401612229565b600060405180830381600087803b158015610ebe57600080fd5b505af11580156109a6573d6000803e3d6000fd5b60085460005b81811015610ef957610ee981610c05565b610ef2816122cf565b9050610ed8565b5050565b610f05611891565b8015610f1357610f13610ed2565b8160088481548110610f2757610f27612270565b906000526020600020906004020160010154600c54610f46919061217e565b610f509190612166565b600c819055508160088481548110610f6a57610f6a612270565b906000526020600020906004020160010181905550827f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c83604051610fb191815260200190565b60405180910390a2505050565b610fc6611891565b610fd06000611a60565b565b6000546001600160a01b031690565b610fe9611ab0565b336001600160a01b0382161480610fff57503330145b61101b5760405162461bcd60e51b81526004016109cd906122e8565b6000821161103b5760405162461bcd60e51b81526004016109cd90612248565b60006008848154811061105057611050612270565b600091825260208083208784526009825260408085206001600160a01b03881686528352808520898652600b90935290932054600490920290920192506110979042612166565b60028201556110a585610c05565b6110af8584611980565b81546110c6906001600160a01b03168430876118f0565b84836001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158660405161110291815260200190565b60405180910390a360025482546001600160a01b039182169116036111915760025460405163f455cb3b60e01b8152600481018690526001600160a01b039091169063f455cb3b90602401602060405180830381865afa15801561116a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118e91906121ac565b93505b838160000160008282546111a59190612166565b90915550506003820154815464e8d4a51000916111c191612286565b6111cb91906122bb565b600191820155805550505050565b505050565b600080600884815481106111f4576111f4612270565b600091825260208083208784526009825260408085206001600160a01b038981168752935280852060049485029092016003810154815492516370a0823160e01b815291975092959294929391909116916370a08231916112579130910161208f565b602060405180830381865afa158015611274573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129891906121ac565b60025485549192506001600160a01b0390811691160361132657600254604051633af9e66960e01b81526001600160a01b0390911690633af9e669906112e290309060040161208f565b602060405180830381865afa1580156112ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132391906121ac565b90505b83600201544311801561133857508015155b156113a2576000600c54856001015460055487600201544361135a919061217e565b6113649190612286565b61136e9190612286565b61137891906122bb565b90508161138a8264e8d4a51000612286565b61139491906122bb565b61139e9084612166565b9250505b6001830154835464e8d4a51000906113bb908590612286565b6113c591906122bb565b6000898152600a602090815260408083206001600160a01b038c1684529091529020546113f29190612166565b6113fc919061217e565b9450505050505b92915050565b60006114156001611b09565b90505b81156114035761142960028361230d565b60010361144e5761143a8184611b26565b905061144760018361217e565b9150611418565b6114588384611b26565b92506114476002836122bb565b600061146f611ab0565b336001600160a01b038316148061148557503330145b6114a15760405162461bcd60e51b81526004016109cd906122e8565b6114aa83610c05565b6114b48383611980565b6000838152600a602090815260408083206001600160a01b0386168452909152902054806115195760405162461bcd60e51b81526020600482015260126024820152716e6f2070656e64696e67207265776172647360701b60448201526064016109cd565b60008481526009602090815260408083206001600160a01b03871684528252808320878452600b909252909120546115519042612166565b60028201556000858152600a602090815260408083206001600160a01b03881684529091528120556008805464e8d4a5100091908790811061159557611595612270565b60009182526020808320600360049093020191909101548883526009825260408084206001600160a01b038a1685529092529120546115d49190612286565b6115de91906122bb565b60008681526009602090815260408083206001600160a01b03891684529091529020600101556007544314611724576002546006546007546001600160a01b0390921691637af548c1914391670de0b6b3a76400009161164591839190610506908661217e565b61164f919061217e565b6040516001600160e01b031960e085901b16815260048101929092526024820152600060448201526064016020604051808303816000875af1158015611699573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bd91906121ac565b50436007556003546040805160016209351760e01b0319815290516001600160a01b039092169163fff6cae99160048082019260009290919082900301818387803b15801561170b57600080fd5b505af115801561171f573d6000803e3d6000fd5b505050505b6002546040516340c10f1960e01b81526001600160a01b03909116906340c10f199061175690879086906004016121c5565b600060405180830381600087803b15801561177057600080fd5b505af1158015611784573d6000803e3d6000fd5b5050505084846001600160a01b03167fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f51846040516117c491815260200190565b60405180910390a350905061140360018055565b6117e0611891565b6001600160a01b0381166118455760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109cd565b61184e81611a60565b50565b600061188961188361187d6118666001611b09565b61187887670de0b6b3a7640000611b64565b611b9e565b84611409565b85611bd1565b949350505050565b3361189a610fd2565b6001600160a01b031614610fd05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109cd565b6040516001600160a01b038085166024830152831660448201526064810182905261195b9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611c3c565b50505050565b6111d98363a9059cbb60e01b84846040516024016119249291906121c5565b60008281526009602090815260408083206001600160a01b03851684528252808320815160608101835281548152600182015493810184905260029091015491810191909152600880549193929164e8d4a510009190879081106119e6576119e6612270565b9060005260206000209060040201600301548460000151611a079190612286565b611a1191906122bb565b611a1b919061217e565b9050801561195b576000848152600a602090815260408083206001600160a01b038716845290915281208054839290611a55908490612166565b909155505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600260015403611b025760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109cd565b6002600155565b600060016001603f1b03821115611b1f57600080fd5b5060401b90565b6000600f83810b9083900b0260401d60016001607f1b03198112801590611b54575060016001607f1b038113155b611b5d57600080fd5b9392505050565b600081600003611b7357600080fd5b6000611b7f8484611d0e565b905060016001607f1b036001600160801b0382161115611b5d57600080fd5b6000600f83810b9083900b0160016001607f1b03198112801590611b54575060016001607f1b03811315611b5d57600080fd5b600081600003611be357506000611403565b600083600f0b1215611bf457600080fd5b600f83900b6001600160801b038316810260401c90608084901c026001600160c01b03811115611c2357600080fd5b60401b8119811115611c3457600080fd5b019392505050565b6000611c91826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e729092919063ffffffff16565b8051909150156111d95780806020019051810190611caf91906121de565b6111d95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109cd565b600081600003611d1d57600080fd5b60006001600160c01b038411611d485782604085901b81611d4057611d406122a5565b049050611e5e565b60c084811c600160201b8110611d60576020918201911c5b620100008110611d72576010918201911c5b6101008110611d83576008918201911c5b60108110611d93576004918201911c5b60048110611da3576002918201911c5b60028110611db2576001820191505b60bf820360018603901c6001018260ff0387901b81611dd357611dd36122a5565b0492506001600160801b03831115611dea57600080fd5b608085901c83026001600160801b038616840260c088901c604089901b82811015611e16576001820391505b608084901b92900382811015611e2d576001820391505b829003608084901c8214611e4357611e43612321565b888181611e5257611e526122a5565b04870196505050505050505b6001600160801b03811115611b5d57600080fd5b6060611889848460008585600080866001600160a01b03168587604051611e999190612363565b60006040518083038185875af1925050503d8060008114611ed6576040519150601f19603f3d011682016040523d82523d6000602084013e611edb565b606091505b5091509150611eec87838387611ef7565b979650505050505050565b60608315611f66578251600003611f5f576001600160a01b0385163b611f5f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109cd565b5081611889565b6118898383815115611f7b5781518083602001fd5b8060405162461bcd60e51b81526004016109cd919061237f565b600060208284031215611fa757600080fd5b5035919050565b60008060408385031215611fc157600080fd5b50508035926020909101359150565b6001600160a01b038116811461184e57600080fd5b801515811461184e57600080fd5b60008060006060848603121561200857600080fd5b83359250602084013561201a81611fd0565b9150604084013561202a81611fe5565b809150509250925092565b60008060006060848603121561204a57600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561207657600080fd5b8335925060208401359150604084013561202a81611fe5565b6001600160a01b0391909116815260200190565b6000806000606084860312156120b857600080fd5b8335925060208401359150604084013561202a81611fd0565b600080604083850312156120e457600080fd5b8235915060208301356120f681611fd0565b809150509250929050565b6000806040838503121561211457600080fd5b823580600f0b811461212557600080fd5b946020939093013593505050565b60006020828403121561214557600080fd5b8135611b5d81611fd0565b634e487b7160e01b600052601160045260246000fd5b6000821982111561217957612179612150565b500190565b60008282101561219057612190612150565b500390565b9182526001600160a01b0316602082015260400190565b6000602082840312156121be57600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6000602082840312156121f057600080fd5b8151611b5d81611fe5565b60008060006060848603121561221057600080fd5b8351925060208401519150604084015190509250925092565b92835260208301919091526001600160a01b0316604082015260600190565b6020808252600e908201526d1a5b9d985b1a5908185b5bdd5b9d60921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156122a0576122a0612150565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826122ca576122ca6122a5565b500490565b6000600182016122e1576122e1612150565b5060010190565b6020808252600b908201526a1b9bdd08185b1b1bddd95960aa1b604082015260600190565b60008261231c5761231c6122a5565b500690565b634e487b7160e01b600052600160045260246000fd5b60005b8381101561235257818101518382015260200161233a565b8381111561195b5750506000910152565b60008251612375818460208701612337565b9190910192915050565b602081526000825180602084015261239e816040850160208701612337565b601f01601f1916919091016040019291505056fea2646970667358221220655239eedd432073fdd376ba0db8249849b3e6ffe52a46f9d6a8504d9f3c0cc364736f6c634300080f0033";

type EggChefV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: EggChefV2ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class EggChefV2__factory extends ContractFactory {
  constructor(...args: EggChefV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _eggs: PromiseOrValue<string>,
    _eggsLp: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<EggChefV2> {
    return super.deploy(_eggs, _eggsLp, _router, _rewardPerBlock, _startBlock, overrides || {}) as Promise<EggChefV2>;
  }
  override getDeployTransaction(
    _eggs: PromiseOrValue<string>,
    _eggsLp: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_eggs, _eggsLp, _router, _rewardPerBlock, _startBlock, overrides || {});
  }
  override attach(address: string): EggChefV2 {
    return super.attach(address) as EggChefV2;
  }
  override connect(signer: Signer): EggChefV2__factory {
    return super.connect(signer) as EggChefV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EggChefV2Interface {
    return new utils.Interface(_abi) as EggChefV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): EggChefV2 {
    return new Contract(address, _abi, signerOrProvider) as EggChefV2;
  }
}
