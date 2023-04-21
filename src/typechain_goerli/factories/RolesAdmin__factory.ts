/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RolesAdmin, RolesAdminInterface } from "../RolesAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "_kernel",
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
    inputs: [],
    name: "OnlyAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyNewAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "Keycode",
        name: "keycode_",
        type: "bytes5",
      },
    ],
    name: "Policy_ModuleDoesNotExist",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin_",
        type: "address",
      },
    ],
    name: "NewAdminPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin_",
        type: "address",
      },
    ],
    name: "NewAdminPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "ROLES",
    outputs: [
      {
        internalType: "contract ROLESv1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [],
    name: "configureDependencies",
    outputs: [
      {
        internalType: "Keycode[]",
        name: "dependencies",
        type: "bytes5[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "wallet_",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
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
    inputs: [],
    name: "newAdmin",
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
    inputs: [],
    name: "pullNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin_",
        type: "address",
      },
    ],
    name: "pushNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestPermissions",
    outputs: [
      {
        components: [
          {
            internalType: "Keycode",
            name: "keycode",
            type: "bytes5",
          },
          {
            internalType: "bytes4",
            name: "funcSelector",
            type: "bytes4",
          },
        ],
        internalType: "struct Permissions[]",
        name: "requests",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "wallet_",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610caa380380610caa83398101604081905261002f9161005d565b600080546001600160a01b039092166001600160a01b0319928316179055600180549091163317905561008d565b60006020828403121561006f57600080fd5b81516001600160a01b038116811461008657600080fd5b9392505050565b610c0e8061009c6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806372b0bb4911610081578063d4aae0c41161005b578063d4aae0c4146101c8578063d547741f146101e8578063f851a440146101fb57600080fd5b806372b0bb491461018b578063923cb952146101935780639459b875146101b357600080fd5b80633ea26384116100b25780633ea263841461011e5780634657b36c146101635780635924be701461017657600080fd5b806303346696146100d957806322f3e2d4146100ee5780632f2ff15d1461010b575b600080fd5b6100ec6100e7366004610a1d565b61021b565b005b6100f66102db565b60405190151581526020015b60405180910390f35b6100ec610119366004610a41565b610373565b60025461013e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610102565b6100ec610171366004610a1d565b610455565b61017e6104f4565b6040516101029190610a71565b6100ec610645565b60035461013e9073ffffffffffffffffffffffffffffffffffffffff1681565b6101bb61070f565b6040516101029190610b04565b60005461013e9073ffffffffffffffffffffffffffffffffffffffff1681565b6100ec6101f6366004610a41565b61081a565b60015461013e9073ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16331461026c576040517f4755657900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fa2c5878324891aaeaaa631341c00e3c30a2b70c1b6a1e9411b903402d40df5c990600090a250565b600080546040517fe52223bb00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063e52223bb90602401602060405180830381865afa15801561034a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036e9190610b6a565b905090565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103c4576040517f4755657900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003546040517f656361ff0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83811660248301529091169063656361ff906044015b600060405180830381600087803b15801561043957600080fd5b505af115801561044d573d6000803e3d6000fd5b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ad576040517f14fa403c0000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60408051600280825260608281019093527f524f4c45530000000000000000000000000000000000000000000000000000009190602082015b604080518082019091526000808252602082015281526020019060019003908161052d575050604080518082019091527fffffffffff000000000000000000000000000000000000000000000000000000831681527f656361ff00000000000000000000000000000000000000000000000000000000602082015281519193509083906000906105bf576105bf610b8c565b60200260200101819052506040518060400160405280827affffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200163f6ba000760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152508260018151811061063657610636610b8c565b60200260200101819052505090565b60025473ffffffffffffffffffffffffffffffffffffffff163314610696576040517fc5c898b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280546001805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040517fecf24556cb4f08854c12350ad47cc1bf4bfe9ada0935ffb3d3de5f2f3f5a0ad690600090a2565b604080516001808252818301909252606091602080830190803683370190505090507f524f4c45530000000000000000000000000000000000000000000000000000008160008151811061076557610765610b8c565b60200260200101907affffffffffffffffffffffffffffffffffffffffffffffffffffff191690817affffffffffffffffffffffffffffffffffffffffffffffffffffff1916815250506107d2816000815181106107c5576107c5610b8c565b60200260200101516108ca565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905590565b60015473ffffffffffffffffffffffffffffffffffffffff16331461086b576040517f4755657900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003546040517ff6ba00070000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83811660248301529091169063f6ba00079060440161041f565b600080546040517fb4dc00b40000000000000000000000000000000000000000000000000000000081527fffffffffff00000000000000000000000000000000000000000000000000000084166004820152829173ffffffffffffffffffffffffffffffffffffffff169063b4dc00b490602401602060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097f9190610bbb565b905073ffffffffffffffffffffffffffffffffffffffff81166109f2576040517f5c3fa9cd0000000000000000000000000000000000000000000000000000000081527fffffffffff000000000000000000000000000000000000000000000000000000841660048201526024016104a4565b92915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a1a57600080fd5b50565b600060208284031215610a2f57600080fd5b8135610a3a816109f8565b9392505050565b60008060408385031215610a5457600080fd5b823591506020830135610a66816109f8565b809150509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610af757815180517fffffffffff0000000000000000000000000000000000000000000000000000001685528601517fffffffff0000000000000000000000000000000000000000000000000000000016868501529284019290850190600101610a8e565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610b5e5783517fffffffffff0000000000000000000000000000000000000000000000000000001683529284019291840191600101610b20565b50909695505050505050565b600060208284031215610b7c57600080fd5b81518015158114610a3a57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610bcd57600080fd5b8151610a3a816109f856fea264697066735822122001208111947b361206645450d449a9dd0789147dbff53a2ceda894ae5da69b6664736f6c634300080f0033";

type RolesAdminConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: RolesAdminConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class RolesAdmin__factory extends ContractFactory {
  constructor(...args: RolesAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _kernel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<RolesAdmin> {
    return super.deploy(_kernel, overrides || {}) as Promise<RolesAdmin>;
  }
  override getDeployTransaction(
    _kernel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_kernel, overrides || {});
  }
  override attach(address: string): RolesAdmin {
    return super.attach(address) as RolesAdmin;
  }
  override connect(signer: Signer): RolesAdmin__factory {
    return super.connect(signer) as RolesAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesAdminInterface {
    return new utils.Interface(_abi) as RolesAdminInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RolesAdmin {
    return new Contract(address, _abi, signerOrProvider) as RolesAdmin;
  }
}
