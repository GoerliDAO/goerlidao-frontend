/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DAI, DAIInterface } from "../../testDAI.sol/DAI";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
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
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    name: "PERMIT_TYPEHASH",
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
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "adjustDailyDAILimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
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
        name: "usr_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad_",
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
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "daiMintedToday",
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
    name: "dailyDAILimit",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "lastMintRestart",
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
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
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
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
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
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
    inputs: [],
    name: "version",
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
    name: "wards",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161116f38038061116f83398101604081905261002f9161012b565b336000908152602081815260409182902060019081905582518084018452600e81526d2230b49029ba30b13632b1b7b4b760911b9083015282518084018452908152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f0b1461ddc0c1d5ded79a1db0f74dae949050a7c0b28728c724b24958c27a328b818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101939093523060a0808501919091528251808503909101815260c0909301909152815191012060085569021e19e0c9bab2400000600255610144565b60006020828403121561013d57600080fd5b5051919050565b61101c806101536000396000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c806306fdde031461014e578063095ea7b31461019157806318160ddd146101b457806323b872dd146101cb57806330adf81f146101de578063313ce567146101f357806333b3cfc61461020d5780633644e5151461022257806340c10f191461022b5780635422224e1461023e57806354fd4d501461025157806365fae35e1461023e57806370a0823114610271578063798247ae146102915780637ecebe00146102b15780638fcbaf0c146102d157806392bc513c146102e457806395d89b41146103045780639c52a7f1146103265780639dc29fac14610339578063a9059cbb1461034c578063b753a98c1461035f578063bb35783b14610372578063bf353dbb14610385578063dd62ed3e146103a5578063ef1277e0146103b8578063f2d5d56b146103c1575b600080fd5b61017b6040518060400160405280600e81526020016d2230b49029ba30b13632b1b7b4b760911b81525081565b6040516101889190610cce565b60405180910390f35b6101a461019f366004610d3f565b6103d4565b6040519015158152602001610188565b6101bd60015481565b604051908152602001610188565b6101a46101d9366004610d69565b6103e9565b6101bd600080516020610f8783398151915281565b6101fb601281565b60405160ff9091168152602001610188565b61022061021b366004610da5565b61055a565b005b6101bd60085481565b610220610239366004610d3f565b61058e565b61022061024c366004610dbe565b61072f565b61017b604051806040016040528060018152602001603160f81b81525081565b6101bd61027f366004610dbe565b60036020526000908152604090205481565b6101bd61029f366004610dbe565b60066020526000908152604090205481565b6101bd6102bf366004610dbe565b60056020526000908152604090205481565b6102206102df366004610dd9565b61077b565b6101bd6102f2366004610dbe565b60076020526000908152604090205481565b61017b6040518060400160405280600381526020016244414960e81b81525081565b610220610334366004610dbe565b610a4b565b610220610347366004610d3f565b610a94565b6101a461035a366004610d3f565b610bce565b61022061036d366004610d3f565b610bdb565b610220610380366004610d69565b610beb565b6101bd610393366004610dbe565b60006020819052908152604090205481565b6101bd6103b3366004610e63565b610bfc565b6101bd60025481565b6102206103cf366004610d3f565b610c08565b60006103e08383610c13565b90505b92915050565b6001600160a01b03831660009081526003602052604081205482111561042a5760405162461bcd60e51b815260040161042190610e96565b60405180910390fd5b6001600160a01b038416331480159061044e575060001961044b8533610c6d565b14155b156104b4578161045e8533610c6d565b101561047c5760405162461bcd60e51b815260040161042190610ec8565b61048f6104898533610c6d565b83610c98565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b6001600160a01b0384166000908152600360205260409020546104d79083610c98565b6001600160a01b0380861660009081526003602052604080822093909355908516815220546105069083610cb3565b6001600160a01b038085166000818152600360205260409081902093909355915190861690600080516020610fa7833981519152906105489086815260200190565b60405180910390a35060019392505050565b336000908152602081905260409020546001146105895760405162461bcd60e51b815260040161042190610efc565b600255565b3360009081526020819052604081205490036106af57600254336000908152600760205260409020546105c2908390610cb3565b1115806105f9575033600090815260066020526040902054611964906105e9904390610c98565b101580156105f957506002548111155b61063c5760405162461bcd60e51b815260206004820152601460248201527313dd995c8819185a5b1e4811105248131a5b5a5d60621b6044820152606401610421565b336000908152600660205260409020546119649061065b904390610c98565b1061068457336000908152600760209081526040808320849055600690915290204390556106af565b3360009081526007602052604090205461069e9082610cb3565b336000908152600760205260409020555b6001600160a01b0382166000908152600360205260409020546106d29082610cb3565b6001600160a01b0383166000908152600360205260409020556001546106f89082610cb3565b6001556040518181526001600160a01b03831690600090600080516020610fa7833981519152906020015b60405180910390a35050565b3360009081526020819052604090205460011461075e5760405162461bcd60e51b815260040161042190610efc565b6001600160a01b0316600090815260208190526040902060019055565b60085460408051600080516020610f8783398151915260208201526001600160a01b03808c169282019290925290891660608201526080810188905260a0810187905285151560c08201526000919060e0016040516020818303038152906040528051906020012060405160200161080a92919061190160f01b81526002810192909252602282015260420190565b60408051601f19818403018152919052805160209091012090506001600160a01b0389166108725760405162461bcd60e51b815260206004820152601560248201527404461692f696e76616c69642d616464726573732d3605c1b6044820152606401610421565b60408051600081526020810180835283905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa1580156108c5573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316146109245760405162461bcd60e51b815260206004820152601260248201527111185a4bda5b9d985b1a590b5c195c9b5a5d60721b6044820152606401610421565b8515806109315750854211155b6109725760405162461bcd60e51b815260206004820152601260248201527111185a4bdc195c9b5a5d0b595e1c1a5c995960721b6044820152606401610421565b6001600160a01b038916600090815260056020526040812080549161099683610f3e565b9190505587146109dc5760405162461bcd60e51b81526020600482015260116024820152704461692f696e76616c69642d6e6f6e636560781b6044820152606401610421565b6000856109ea5760006109ee565b6000195b6001600160a01b038b81166000818152600460209081526040808320948f1680845294825291829020859055905184815293945091929091600080516020610fc7833981519152910160405180910390a350505050505050505050565b33600090815260208190526040902054600114610a7a5760405162461bcd60e51b815260040161042190610efc565b6001600160a01b0316600090815260208190526040812055565b6001600160a01b038216600090815260036020526040902054811115610acc5760405162461bcd60e51b815260040161042190610e96565b6001600160a01b0382163314801590610af05750600019610aed8333610c6d565b14155b15610b565780610b008333610c6d565b1015610b1e5760405162461bcd60e51b815260040161042190610ec8565b610b31610b2b8333610c6d565b82610c98565b6001600160a01b03831660009081526004602090815260408083203384529091529020555b6001600160a01b038216600090815260036020526040902054610b799082610c98565b6001600160a01b038316600090815260036020526040902055600154610b9f9082610c98565b6001556040518181526000906001600160a01b03841690600080516020610fa783398151915290602001610723565b60006103e03384846103e9565b610be63383836103e9565b505050565b610bf68383836103e9565b50505050565b60006103e08383610c6d565b610be68233836103e9565b3360008181526004602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020610fc783398151915290610c5c9086815260200190565b60405180910390a350600192915050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b600082610ca58382610f57565b91508111156103e357600080fd5b600082610cc08382610f6e565b91508110156103e357600080fd5b600060208083528351808285015260005b81811015610cfb57858101830151858201604001528201610cdf565b81811115610d0d576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d3a57600080fd5b919050565b60008060408385031215610d5257600080fd5b610d5b83610d23565b946020939093013593505050565b600080600060608486031215610d7e57600080fd5b610d8784610d23565b9250610d9560208501610d23565b9150604084013590509250925092565b600060208284031215610db757600080fd5b5035919050565b600060208284031215610dd057600080fd5b6103e082610d23565b600080600080600080600080610100898b031215610df657600080fd5b610dff89610d23565b9750610e0d60208a01610d23565b9650604089013595506060890135945060808901358015158114610e3057600080fd5b935060a089013560ff81168114610e4657600080fd5b979a969950949793969295929450505060c08201359160e0013590565b60008060408385031215610e7657600080fd5b610e7f83610d23565b9150610e8d60208401610d23565b90509250929050565b6020808252601890820152774461692f696e73756666696369656e742d62616c616e636560401b604082015260600190565b6020808252601a90820152794461692f696e73756666696369656e742d616c6c6f77616e636560301b604082015260600190565b60208082526012908201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600060018201610f5057610f50610f28565b5060010190565b600082821015610f6957610f69610f28565b500390565b60008219821115610f8157610f81610f28565b50019056feea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acbddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212204c5e75bcc2bd53c4658c2e7f5873589175bb6e106929fb98835255fd6a145f0664736f6c634300080f0033";

type DAIConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DAIConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAI__factory extends ContractFactory {
  constructor(...args: DAIConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    chainId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<DAI> {
    return super.deploy(chainId_, overrides || {}) as Promise<DAI>;
  }
  override getDeployTransaction(
    chainId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(chainId_, overrides || {});
  }
  override attach(address: string): DAI {
    return super.attach(address) as DAI;
  }
  override connect(signer: Signer): DAI__factory {
    return super.connect(signer) as DAI__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAIInterface {
    return new utils.Interface(_abi) as DAIInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DAI {
    return new Contract(address, _abi, signerOrProvider) as DAI;
  }
}
