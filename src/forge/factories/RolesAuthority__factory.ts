/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RolesAuthority, RolesAuthorityInterface } from "../RolesAuthority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract Authority",
        name: "_authority",
        type: "address",
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
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "PublicCapabilityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "RoleCapabilityUpdated",
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
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "UserRoleUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract Authority",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
    ],
    name: "doesRoleHaveCapability",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
    ],
    name: "doesUserHaveRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "getRolesWithCapability",
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
        name: "",
        type: "address",
      },
    ],
    name: "getUserRoles",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "isCapabilityPublic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setPublicCapability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setRoleCapability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setUserRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b7c380380610b7c83398101604081905261002f916100e1565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505061011b565b6001600160a01b03811681146100de57600080fd5b50565b600080604083850312156100f457600080fd5b82516100ff816100c9565b6020840151909250610110816100c9565b809150509250929050565b610a528061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306a36aee146100b457806313af4035146100e75780632f47571f146100fc57806367aff4841461013a5780637917b7941461014d5780637a9e5e4b146101785780637d40583d1461018b5780638da5cb5b1461019e578063b4bad06a146101c9578063b700961314610216578063bf7e214f14610229578063c6b0263e1461023c578063ea7ca2761461024f575b600080fd5b6100d46100c23660046107b7565b60026020526000908152604090205481565b6040519081526020015b60405180910390f35b6100fa6100f53660046107b7565b610286565b005b61012a61010a3660046107f8565b600360209081526000928352604080842090915290825290205460ff1681565b60405190151581526020016100de565b6100fa61014836600461084c565b61030c565b6100d461015b3660046107f8565b600460209081526000928352604080842090915290825290205481565b6100fa6101863660046107b7565b6103e1565b6100fa610199366004610895565b6104cb565b6000546101b1906001600160a01b031681565b6040516001600160a01b0390911681526020016100de565b61012a6101d73660046108ed565b6001600160a01b039190911660009081526004602090815260408083206001600160e01b031990941683529290522054600160ff929092161c16151590565b61012a610224366004610932565b6105d6565b6001546101b1906001600160a01b031681565b6100fa61024a366004610952565b610655565b61012a61025d366004610980565b6001600160a01b0391909116600090815260026020526040902054600160ff9092161c16151590565b61029c336000356001600160e01b0319166106f6565b6102c15760405162461bcd60e51b81526004016102b8906109ac565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b610322336000356001600160e01b0319166106f6565b61033e5760405162461bcd60e51b81526004016102b8906109ac565b801561036d576001600160a01b03831660009081526002602052604090208054600160ff85161b179055610393565b6001600160a01b03831660009081526002602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103d4911515815260200190565b60405180910390a3505050565b6000546001600160a01b0316331480610476575060015460405163b700961360e01b81526001600160a01b039091169063b70096139061043590339030906001600160e01b031960003516906004016109d2565b602060405180830381865afa158015610452573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047691906109ff565b61047f57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6104e1336000356001600160e01b0319166106f6565b6104fd5760405162461bcd60e51b81526004016102b8906109ac565b8015610541576001600160a01b03831660009081526004602090815260408083206001600160e01b03198616845290915290208054600160ff87161b17905561057c565b6001600160a01b03831660009081526004602090815260408083206001600160e01b03198616845290915290208054600160ff87161b191690555b816001600160e01b031916836001600160a01b03168560ff167fa52ea92e6e955aa8ac66420b86350f7139959adfcc7e6a14eee1bd116d09860e846040516105c8911515815260200190565b60405180910390a450505050565b6001600160a01b03821660009081526003602090815260408083206001600160e01b03198516845290915281205460ff168061064d57506001600160a01b0380841660009081526004602090815260408083206001600160e01b031987168452825280832054938816835260029091529020541615155b949350505050565b61066b336000356001600160e01b0319166106f6565b6106875760405162461bcd60e51b81526004016102b8906109ac565b6001600160a01b03831660008181526003602090815260408083206001600160e01b0319871680855290835292819020805460ff191686151590811790915590519081529192917f950a343f5d10445e82a71036d3f4fb3016180a25805141932543b83e2078a93e91016103d4565b6001546000906001600160a01b03168015801590610780575060405163b700961360e01b81526001600160a01b0382169063b70096139061073f908790309088906004016109d2565b602060405180830381865afa15801561075c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078091906109ff565b8061064d57506000546001600160a01b03858116911614949350505050565b6001600160a01b03811681146107b457600080fd5b50565b6000602082840312156107c957600080fd5b81356107d48161079f565b9392505050565b80356001600160e01b0319811681146107f357600080fd5b919050565b6000806040838503121561080b57600080fd5b82356108168161079f565b9150610824602084016107db565b90509250929050565b803560ff811681146107f357600080fd5b80151581146107b457600080fd5b60008060006060848603121561086157600080fd5b833561086c8161079f565b925061087a6020850161082d565b9150604084013561088a8161083e565b809150509250925092565b600080600080608085870312156108ab57600080fd5b6108b48561082d565b935060208501356108c48161079f565b92506108d2604086016107db565b915060608501356108e28161083e565b939692955090935050565b60008060006060848603121561090257600080fd5b61090b8461082d565b9250602084013561091b8161079f565b9150610929604085016107db565b90509250925092565b60008060006060848603121561094757600080fd5b833561090b8161079f565b60008060006060848603121561096757600080fd5b83356109728161079f565b925061087a602085016107db565b6000806040838503121561099357600080fd5b823561099e8161079f565b91506108246020840161082d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610a1157600080fd5b81516107d48161083e56fea2646970667358221220e84ea20aa3699bb60b69556c37c12578ef207dab14db8635dd7a9be9658a834564736f6c634300080f0033";

type RolesAuthorityConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: RolesAuthorityConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class RolesAuthority__factory extends ContractFactory {
  constructor(...args: RolesAuthorityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<RolesAuthority> {
    return super.deploy(_owner, _authority, overrides || {}) as Promise<RolesAuthority>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _authority, overrides || {});
  }
  override attach(address: string): RolesAuthority {
    return super.attach(address) as RolesAuthority;
  }
  override connect(signer: Signer): RolesAuthority__factory {
    return super.connect(signer) as RolesAuthority__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesAuthorityInterface {
    return new utils.Interface(_abi) as RolesAuthorityInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RolesAuthority {
    return new Contract(address, _abi, signerOrProvider) as RolesAuthority;
  }
}
