/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GoerliDaoVotes, GoerliDaoVotesInterface } from "../GoerliDaoVotes";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "xGDAO_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller_",
        type: "address",
      },
    ],
    name: "KernelAdapter_OnlyKernel",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "policy_",
        type: "address",
      },
    ],
    name: "Module_PolicyNotPermitted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INIT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "KEYCODE",
    outputs: [
      {
        internalType: "Keycode",
        name: "",
        type: "bytes5",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "major",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "minor",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "contract ERC20",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "contract Kernel",
        name: "newKernel_",
        type: "address",
      },
    ],
    name: "changeKernel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
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
        name: "assets",
        type: "uint256",
      },
    ],
    name: "convertToShares",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
    ],
    name: "deposit",
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
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "contract Kernel",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastActionTimestamp",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastDepositTimestamp",
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
        name: "",
        type: "address",
      },
    ],
    name: "maxDeposit",
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
        name: "",
        type: "address",
      },
    ],
    name: "maxMint",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "maxRedeem",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "maxWithdraw",
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
        name: "shares_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewDeposit",
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
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewMint",
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
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewRedeem",
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
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
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
        name: "shares_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "redeem",
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
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resetActionTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
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
    name: "totalSupply",
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
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt_",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "withdraw",
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
    inputs: [],
    name: "xGDAO",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200205b3803806200205b83398101604081905262000035916200021c565b806040518060400160405280601081526020016f476f65726c692044414f20566f74657360801b81525060405180604001604052806005815260200164764744414f60d81b8152508181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e491906200025b565b600080546001600160a01b0319166001600160a01b038a1617905560016200010d84826200032c565b5060026200011c83826200032c565b5060ff81166080524660a0526200013262000167565b60c052505050506001600160a01b0391821660e05250600780546001600160a01b031916929091169190911790555062000476565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60016040516200019b9190620003f8565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200021957600080fd5b50565b600080604083850312156200023057600080fd5b82516200023d8162000203565b6020840151909250620002508162000203565b809150509250929050565b6000602082840312156200026e57600080fd5b815160ff811681146200028057600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002b257607f821691505b602082108103620002d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032757600081815260208120601f850160051c81016020861015620003025750805b601f850160051c820191505b8181101562000323578281556001016200030e565b5050505b505050565b81516001600160401b0381111562000348576200034862000287565b62000360816200035984546200029d565b84620002d9565b602080601f8311600181146200039857600084156200037f5750858301515b600019600386901b1c1916600185901b17855562000323565b600085815260208120601f198616915b82811015620003c957888601518255948401946001909101908401620003a8565b5085821015620003e85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600080835462000408816200029d565b6001828116801562000423576001811462000439576200046a565b60ff19841687528215158302870194506200046a565b8760005260208060002060005b85811015620004615781548a82015290840190820162000446565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611b88620004d3600039600081816102ed0152818161052e015281816111d40152818161125a015281816113ee015261151e015260006108bd0152600061088d015260006102ac0152611b886000f3fe608060405234801561001057600080fd5b50600436106101b75760003560e01c806301e1d114146101bc57806306fdde03146101d757806307a2d13a146101ec578063095ea7b3146101ff5780630a28a47714610222578063148ea1a41461023557806318160ddd146102555780631ae7ec2e1461025e57806323b872dd1461027f5780632c63af4b14610292578063313ce567146102a75780633644e515146102e057806338d52e0f146102e8578063402d267d1461031c5780634657b36c146103315780634cdad50614610344578063655d8dec146103575780636e553f651461037757806370a082311461038a5780637ecebe00146103aa57806394bf804d146103ca57806395d89b41146103dd578063a9059cbb146103e5578063b3d7f6b9146103f8578063b460af941461040b578063ba0876521461041e578063c63d75b61461031c578063c6e6f59214610431578063ce96cb7714610444578063d4aae0c414610457578063d505accf1461046a578063d905777e1461047d578063dd62ed3e146104a6578063e03481e1146104d1578063ea643914146104e4578063ef8b30f7146104ec578063ffa1ad74146104ff575b600080fd5b6101c4610514565b6040519081526020015b60405180910390f35b6101df6105a9565b6040516101ce9190611709565b6101c46101fa36600461175e565b610637565b61021261020d36600461178f565b610664565b60405190151581526020016101ce565b6101c461023036600461175e565b6106bf565b6101c46102433660046117bb565b60086020526000908152604090205481565b6101c460035481565b6102666106df565b6040516001600160d81b031990911681526020016101ce565b61021261028d3660046117d8565b6106eb565b6102a56102a03660046117bb565b6107c8565b005b6102ce7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101ce565b6101c4610889565b61030f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101ce9190611819565b6101c461032a3660046117bb565b5060001990565b6102a561033f3660046117bb565b6108df565b6101c461035236600461175e565b61092e565b6101c46103653660046117bb565b60096020526000908152604090205481565b6101c461038536600461182d565b610939565b6101c46103983660046117bb565b60046020526000908152604090205481565b6101c46103b83660046117bb565b60066020526000908152604090205481565b6101c46103d836600461182d565b610a04565b6101df610acf565b6102126103f336600461178f565b610adc565b6101c461040636600461175e565b610b8c565b6101c461041936600461185d565b610bab565b6101c461042c36600461185d565b610c5c565b6101c461043f36600461175e565b610d0d565b6101c46104523660046117bb565b610d2d565b60005461030f906001600160a01b031681565b6102a561047836600461189f565b610d4f565b6101c461048b3660046117bb565b6001600160a01b031660009081526004602052604090205490565b6101c46104b4366004611916565b600560209081526000928352604080842090915290825290205481565b60075461030f906001600160a01b031681565b6102a5610f7b565b6101c46104fa36600461175e565b610faa565b604080516001815260006020820152016101ce565b6040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610563903090600401611819565b602060405180830381865afa158015610580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a49190611944565b905090565b600180546105b69061195d565b80601f01602080910402602001604051908101604052809291908181526020018280546105e29061195d565b801561062f5780601f106106045761010080835404028352916020019161062f565b820191906000526020600020905b81548152906001019060200180831161061257829003601f168201915b505050505081565b600354600090801561065b5761065661064e610514565b849083610fb5565b61065d565b825b9392505050565b3360008181526005602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020611b13833981519152906106ad9086815260200190565b60405180910390a35060015b92915050565b600354600090801561065b57610656816106d7610514565b859190610fd4565b64564f54455360d81b90565b600080546001600160a01b031663f166d9eb6107056106df565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161073193929190611997565b602060405180830381865afa15801561074e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077291906119cc565b61079a57336040516311bf00c960e01b81526004016107919190611819565b60405180910390fd5b6001600160a01b03831660009081526009602052604090204290556107c0848484611002565b949350505050565b6000546001600160a01b031663f166d9eb6107e16106df565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161080d93929190611997565b602060405180830381865afa15801561082a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e91906119cc565b61086d57336040516311bf00c960e01b81526004016107919190611819565b6001600160a01b03166000908152600860205260409020429055565b60007f000000000000000000000000000000000000000000000000000000000000000046146108ba576105a46110e2565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000546001600160a01b0316331461090c573360405163053e900f60e21b81526004016107919190611819565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006106b982610637565b600080546001600160a01b031663f166d9eb6109536106df565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161097f93929190611997565b602060405180830381865afa15801561099c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c091906119cc565b6109df57336040516311bf00c960e01b81526004016107919190611819565b6001600160a01b038216600090815260096020526040902042905561065d838361117c565b600080546001600160a01b031663f166d9eb610a1e6106df565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610a4a93929190611997565b602060405180830381865afa158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b91906119cc565b610aaa57336040516311bf00c960e01b81526004016107919190611819565b6001600160a01b038216600090815260096020526040902042905561065d8383611240565b600280546105b69061195d565b600080546001600160a01b031663f166d9eb610af66106df565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610b2293929190611997565b602060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6391906119cc565b610b8257336040516311bf00c960e01b81526004016107919190611819565b61065d83836112bd565b600354600090801561065b57610656610ba3610514565b849083610fd4565b600080546001600160a01b031663f166d9eb610bc56106df565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610bf193929190611997565b602060405180830381865afa158015610c0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3291906119cc565b610c5157336040516311bf00c960e01b81526004016107919190611819565b6107c0848484611323565b600080546001600160a01b031663f166d9eb610c766106df565b336000356001600160e01b0319166040518463ffffffff1660e01b8152600401610ca293929190611997565b602060405180830381865afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce391906119cc565b610d0257336040516311bf00c960e01b81526004016107919190611819565b6107c0848484611415565b600354600090801561065b5761065681610d25610514565b859190610fb5565b6001600160a01b0381166000908152600460205260408120546106b990610637565b42841015610d995760405162461bcd60e51b815260206004820152601760248201527614115493525517d11150511312539157d1561412549151604a1b6044820152606401610791565b60006001610da5610889565b6001600160a01b038a811660008181526006602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610eb1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610ee75750876001600160a01b0316816001600160a01b0316145b610f245760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610791565b6001600160a01b0390811660009081526005602090815260408083208a8516808552908352928190208990555188815291928a1691600080516020611b13833981519152910160405180910390a350505050505050565b6000546001600160a01b03163314610fa8573360405163053e900f60e21b81526004016107919190611819565b565b60006106b982610d0d565b828202811515841585830485141716610fcd57600080fd5b0492915050565b828202811515841585830485141716610fec57600080fd5b6001826001830304018115150290509392505050565b6001600160a01b0383166000908152600560209081526040808320338452909152812054600019811461105e576110398382611a04565b6001600160a01b03861660009081526005602090815260408083203384529091529020555b6001600160a01b03851660009081526004602052604081208054859290611086908490611a04565b90915550506001600160a01b0380851660008181526004602052604090819020805487019055519091871690600080516020611af3833981519152906110cf9087815260200190565b60405180910390a3506001949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60016040516111149190611a1b565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600061118783610faa565b9050806000036111c75760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610791565b6111fc6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611545565b61120682826115cf565b60408051848152602081018390526001600160a01b038416913391600080516020611b3383398151915291015b60405180910390a36106b9565b600061124b83610b8c565b90506112826001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611545565b61128c82846115cf565b60408051828152602081018590526001600160a01b038416913391600080516020611b338339815191529101611233565b336000908152600460205260408120805483919083906112de908490611a04565b90915550506001600160a01b03831660008181526004602052604090819020805485019055513390600080516020611af3833981519152906106ad9086815260200190565b600061132e846106bf565b9050336001600160a01b0383161461139e576001600160a01b0382166000908152600560209081526040808320338452909152902054600019811461139c576113778282611a04565b6001600160a01b03841660009081526005602090815260408083203384529091529020555b505b6113a88282611629565b60408051858152602081018390526001600160a01b0380851692908616913391600080516020611ad3833981519152910160405180910390a461065d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661168b565b6000336001600160a01b03831614611485576001600160a01b038216600090815260056020908152604080832033845290915290205460001981146114835761145e8582611a04565b6001600160a01b03841660009081526005602090815260408083203384529091529020555b505b61148e8461092e565b9050806000036114ce5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610791565b6114d88285611629565b60408051828152602081018690526001600160a01b0380851692908616913391600080516020611ad3833981519152910160405180910390a461065d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848361168b565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806115c85760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610791565b5050505050565b80600360008282546115e19190611aba565b90915550506001600160a01b038216600081815260046020908152604080832080548601905551848152600080516020611af383398151915291015b60405180910390a35050565b6001600160a01b03821660009081526004602052604081208054839290611651908490611a04565b90915550506003805482900390556040518181526000906001600160a01b03841690600080516020611af38339815191529060200161161d565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806117035760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610791565b50505050565b600060208083528351808285015260005b818110156117365785810183015185820160400152820161171a565b81811115611748576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561177057600080fd5b5035919050565b6001600160a01b038116811461178c57600080fd5b50565b600080604083850312156117a257600080fd5b82356117ad81611777565b946020939093013593505050565b6000602082840312156117cd57600080fd5b813561065d81611777565b6000806000606084860312156117ed57600080fd5b83356117f881611777565b9250602084013561180881611777565b929592945050506040919091013590565b6001600160a01b0391909116815260200190565b6000806040838503121561184057600080fd5b82359150602083013561185281611777565b809150509250929050565b60008060006060848603121561187257600080fd5b83359250602084013561188481611777565b9150604084013561189481611777565b809150509250925092565b600080600080600080600060e0888a0312156118ba57600080fd5b87356118c581611777565b965060208801356118d581611777565b95506040880135945060608801359350608088013560ff811681146118f957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561192957600080fd5b823561193481611777565b9150602083013561185281611777565b60006020828403121561195657600080fd5b5051919050565b600181811c9082168061197157607f821691505b60208210810361199157634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160d81b03199390931683526001600160a01b039190911660208301526001600160e01b031916604082015260600190565b6000602082840312156119de57600080fd5b8151801515811461065d57600080fd5b634e487b7160e01b600052601160045260246000fd5b600082821015611a1657611a166119ee565b500390565b600080835481600182811c915080831680611a3757607f831692505b60208084108203611a5657634e487b7160e01b86526022600452602486fd5b818015611a6a5760018114611a7f57611aac565b60ff1986168952841515850289019650611aac565b60008a81526020902060005b86811015611aa45781548b820152908501908301611a8b565b505084890196505b509498975050505050505050565b60008219821115611acd57611acd6119ee565b50019056fefbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8dbddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7a26469706673582212202132c1e57d2a0ee9c74e2f95f06aedd73e4770758353019974eab8febee5cd2964736f6c634300080f0033";

type GoerliDaoVotesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: GoerliDaoVotesConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class GoerliDaoVotes__factory extends ContractFactory {
  constructor(...args: GoerliDaoVotesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    xGDAO_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<GoerliDaoVotes> {
    return super.deploy(kernel_, xGDAO_, overrides || {}) as Promise<GoerliDaoVotes>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    xGDAO_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, xGDAO_, overrides || {});
  }
  override attach(address: string): GoerliDaoVotes {
    return super.attach(address) as GoerliDaoVotes;
  }
  override connect(signer: Signer): GoerliDaoVotes__factory {
    return super.connect(signer) as GoerliDaoVotes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoerliDaoVotesInterface {
    return new utils.Interface(_abi) as GoerliDaoVotesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GoerliDaoVotes {
    return new Contract(address, _abi, signerOrProvider) as GoerliDaoVotes;
  }
}
