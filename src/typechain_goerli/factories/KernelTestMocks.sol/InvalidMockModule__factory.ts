/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { InvalidMockModule, InvalidMockModuleInterface } from "../../KernelTestMocks.sol/InvalidMockModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Kernel",
        name: "kernel_",
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
    name: "permissionedCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "permissionedState",
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
    name: "publicCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "publicState",
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
  "0x608060405234801561001057600080fd5b5060405161054638038061054683398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6104b3806100936000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063abfe761411610076578063d4aae0c41161005b578063d4aae0c414610120578063ea64391414610165578063ffa1ad741461016d57600080fd5b8063abfe761414610100578063c69ab0561461011757600080fd5b80631ae7ec2e146100a8578063382b325f146100db5780634657b36c146100e5578063a7167caf146100f8575b600080fd5b6040517f6261646b6300000000000000000000000000000000000000000000000000000081526020015b60405180910390f35b6100e3610181565b005b6100e36100f33660046103bf565b610198565b6100e3610237565b61010960015481565b6040519081526020016100d2565b61010960025481565b6000546101409073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d2565b6100e361036a565b6040805160008082526020820152016100d2565b60018054906000610191836103fc565b9190505550565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101f0576040517f14fa403c0000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f6261646b630000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa1580156102fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610322919061045b565b61035a576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016101e7565b60028054906000610191836103fc565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103bd576040517f14fa403c0000000000000000000000000000000000000000000000000000000081523360048201526024016101e7565b565b6000602082840312156103d157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146103f557600080fd5b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610454577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561046d57600080fd5b815180151581146103f557600080fdfea26469706673582212203ed3afe1357d062ce717051efe9f8673af60ebc4bcde522510e6821aaa44b4f464736f6c634300080f0033";

type InvalidMockModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: InvalidMockModuleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class InvalidMockModule__factory extends ContractFactory {
  constructor(...args: InvalidMockModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<InvalidMockModule> {
    return super.deploy(kernel_, overrides || {}) as Promise<InvalidMockModule>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): InvalidMockModule {
    return super.attach(address) as InvalidMockModule;
  }
  override connect(signer: Signer): InvalidMockModule__factory {
    return super.connect(signer) as InvalidMockModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvalidMockModuleInterface {
    return new utils.Interface(_abi) as InvalidMockModuleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): InvalidMockModule {
    return new Contract(address, _abi, signerOrProvider) as InvalidMockModule;
  }
}
