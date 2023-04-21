/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { RolesDeploy, RolesDeployInterface } from "../../DeployRoles.s.sol/RolesDeploy";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    name: "run",
    outputs: [
      {
        internalType: "contract Kernel",
        name: "kernel",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060408190526000805460ff1916600117905563350d56bf60e01b90526020608452600d60a4526c474f45524c495f504f4c49435960981b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63350d56bf60e46020604051808303816000875af1158015610076573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061009a9190610183565b600480546001600160a01b0319166001600160a01b039290921691909117815560405163350d56bf60e01b8152602091810191909152600f60248201526e474f45524c495f4b45524e454c5f3560881b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af115801561012d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101519190610183565b600580546001600160a01b0319166001600160a01b039290921691909117905534801561017d57600080fd5b506101b3565b60006020828403121561019557600080fd5b81516001600160a01b03811681146101ac57600080fd5b9392505050565b610a83806101c26000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4b45524e454c5f505249565f350000000000000000000000000000000000000060448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af115801561014d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017191906109f7565b6040517fce817d4700000000000000000000000000000000000000000000000000000000815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b50506040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474f45524c495f4b45524e454c5f350000000000000000000000000000000000604482015260009250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063350d56bf906064016020604051808303816000875af115801561028d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b19190610a10565b6040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f474f45524c495f4449535452494255544f5200000000000000000000000000006044820152909350839150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015610352573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103769190610a10565b600080547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8416021781556040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f474f45524c495f454d455247454e435900000000000000000000000000000000604482015291925090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015610456573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047a9190610a10565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790556040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f474f45524c495f54524541535552595f430000000000000000000000000000006044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190610a10565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790556040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f474f45524c495f524f4c45535f41444d494e00000000000000000000000000006044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af115801561065a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067e9190610a10565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2f2ff15d0000000000000000000000000000000000000000000000000000000081527f6469737472696275746f725f61646d696e00000000000000000000000000000060048201527320982640f1133fa091e8848b99cc630571371260602482015291925090632f2ff15d90604401600060405180830381600087803b15801561074e57600080fd5b505af1158015610762573d6000803e3d6000fd5b5050600254600480546040517f2f2ff15d0000000000000000000000000000000000000000000000000000000081527f656d657267656e63795f73687574646f776e00000000000000000000000000009281019290925273ffffffffffffffffffffffffffffffffffffffff90811660248301529091169250632f2ff15d9150604401600060405180830381600087803b1580156107ff57600080fd5b505af1158015610813573d6000803e3d6000fd5b50506002546005546040517f2f2ff15d0000000000000000000000000000000000000000000000000000000081527f656d657267656e63795f72657374617274000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff918216602482015291169250632f2ff15d9150604401600060405180830381600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b50506002546005546040517f2f2ff15d0000000000000000000000000000000000000000000000000000000081527f637573746f6469616e0000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff918216602482015291169250632f2ff15d9150604401600060405180830381600087803b15801561095957600080fd5b505af115801561096d573d6000803e3d6000fd5b5050604080517f76eadd360000000000000000000000000000000000000000000000000000000081529051737109709ecfa91a80626ff3989d68f67f5b1dd12d93506376eadd369250600480830192600092919082900301818387803b1580156109d657600080fd5b505af11580156109ea573d6000803e3d6000fd5b5050505050505050505090565b600060208284031215610a0957600080fd5b5051919050565b600060208284031215610a2257600080fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610a4657600080fd5b939250505056fea26469706673582212203b6d44fb03d315bc0d6202e9189e5d9a7adc4c05b2ac04a42f0992c679da0a9064736f6c634300080f0033";

type RolesDeployConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: RolesDeployConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class RolesDeploy__factory extends ContractFactory {
  constructor(...args: RolesDeployConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<RolesDeploy> {
    return super.deploy(overrides || {}) as Promise<RolesDeploy>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RolesDeploy {
    return super.attach(address) as RolesDeploy;
  }
  override connect(signer: Signer): RolesDeploy__factory {
    return super.connect(signer) as RolesDeploy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesDeployInterface {
    return new utils.Interface(_abi) as RolesDeployInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RolesDeploy {
    return new Contract(address, _abi, signerOrProvider) as RolesDeploy;
  }
}
