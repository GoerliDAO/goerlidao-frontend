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
  "0x608060405234801561001057600080fd5b50604051610f7a380380610f7a83398101604081905261002f916100e1565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505061011b565b6001600160a01b03811681146100de57600080fd5b50565b600080604083850312156100f457600080fd5b82516100ff816100c9565b6020840151909250610110816100c9565b809150509250929050565b610e508061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80637d40583d1161008c578063b700961311610066578063b700961314610285578063bf7e214f14610298578063c6b0263e146102b8578063ea7ca276146102cb57600080fd5b80637d40583d146101bb5780638da5cb5b146101ce578063b4bad06a1461021357600080fd5b806367aff484116100bd57806367aff4841461016a5780637917b7941461017d5780637a9e5e4b146101a857600080fd5b806306a36aee146100e457806313af4035146101175780632f47571f1461012c575b600080fd5b6101046100f2366004610bf0565b60026020526000908152604090205481565b6040519081526020015b60405180910390f35b61012a610125366004610bf0565b61030f565b005b61015a61013a366004610c49565b600360209081526000928352604080842090915290825290205460ff1681565b604051901515815260200161010e565b61012a610178366004610c9d565b610418565b61010461018b366004610c49565b600460209081526000928352604080842090915290825290205481565b61012a6101b6366004610bf0565b610576565b61012a6101c9366004610ce6565b6106d3565b6000546101ee9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b61015a610221366004610d3e565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081526004602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522054600160ff929092161c16151590565b61015a610293366004610d83565b6108ac565b6001546101ee9073ffffffffffffffffffffffffffffffffffffffff1681565b61012a6102c6366004610da3565b610975565b61015a6102d9366004610dd1565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902054600160ff9092161c16151590565b61033d336000357fffffffff0000000000000000000000000000000000000000000000000000000016610abb565b6103a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a4544000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b610446336000357fffffffff0000000000000000000000000000000000000000000000000000000016610abb565b6104ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161039f565b80156104e85773ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090208054600160ff85161b17905561051b565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090208054600160ff85161b191690555b8160ff168373ffffffffffffffffffffffffffffffffffffffff167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610569911515815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633148061065957506001546040517fb70096130000000000000000000000000000000000000000000000000000000081523360048201523060248201526000357fffffffff0000000000000000000000000000000000000000000000000000000016604482015273ffffffffffffffffffffffffffffffffffffffff9091169063b700961390606401602060405180830381865afa158015610635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106599190610dfd565b61066257600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b610701336000357fffffffff0000000000000000000000000000000000000000000000000000000016610abb565b610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161039f565b80156107d05773ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008616845290915290208054600160ff87161b179055610830565b73ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008616845290915290208054600160ff87161b191690555b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff168560ff167fa52ea92e6e955aa8ac66420b86350f7139959adfcc7e6a14eee1bd116d09860e8460405161089e911515815260200190565b60405180910390a450505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205460ff168061096d575073ffffffffffffffffffffffffffffffffffffffff80841660009081526004602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000087168452825280832054938816835260029091529020541615155b949350505050565b6109a3336000357fffffffff0000000000000000000000000000000000000000000000000000000016610abb565b610a09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161039f565b73ffffffffffffffffffffffffffffffffffffffff831660008181526003602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000087168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f950a343f5d10445e82a71036d3f4fb3016180a25805141932543b83e2078a93e9101610569565b60015460009073ffffffffffffffffffffffffffffffffffffffff168015801590610b9f57506040517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008516604483015282169063b700961390606401602060405180830381865afa158015610b7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9f9190610dfd565b8061096d575060005473ffffffffffffffffffffffffffffffffffffffff858116911614949350505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bed57600080fd5b50565b600060208284031215610c0257600080fd5b8135610c0d81610bcb565b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610c4457600080fd5b919050565b60008060408385031215610c5c57600080fd5b8235610c6781610bcb565b9150610c7560208401610c14565b90509250929050565b803560ff81168114610c4457600080fd5b8015158114610bed57600080fd5b600080600060608486031215610cb257600080fd5b8335610cbd81610bcb565b9250610ccb60208501610c7e565b91506040840135610cdb81610c8f565b809150509250925092565b60008060008060808587031215610cfc57600080fd5b610d0585610c7e565b93506020850135610d1581610bcb565b9250610d2360408601610c14565b91506060850135610d3381610c8f565b939692955090935050565b600080600060608486031215610d5357600080fd5b610d5c84610c7e565b92506020840135610d6c81610bcb565b9150610d7a60408501610c14565b90509250925092565b600080600060608486031215610d9857600080fd5b8335610d5c81610bcb565b600080600060608486031215610db857600080fd5b8335610dc381610bcb565b9250610ccb60208501610c14565b60008060408385031215610de457600080fd5b8235610def81610bcb565b9150610c7560208401610c7e565b600060208284031215610e0f57600080fd5b8151610c0d81610c8f56fea2646970667358221220119a4df38895ff103e0e0d5567c2b17712be81d7cb962ab3057646836b3176f864736f6c634300080f0033";

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
