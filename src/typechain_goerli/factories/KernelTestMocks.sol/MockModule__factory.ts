/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MockModule, MockModuleInterface } from "../../KernelTestMocks.sol/MockModule";

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
  "0x608060405234801561001057600080fd5b506040516103f33803806103f383398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610360806100936000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80631ae7ec2e14610088578063382b325f146100ae5780634657b36c146100b8578063a7167caf146100cb578063abfe7614146100d3578063c69ab056146100ea578063d4aae0c4146100f3578063ea64391414610113578063ffa1ad741461011b575b600080fd5b61009061012f565b6040516001600160d81b031990911681526020015b60405180910390f35b6100b661013b565b005b6100b66100c636600461029d565b610152565b6100b66101aa565b6100dc60015481565b6040519081526020016100a5565b6100dc60025481565b600054610106906001600160a01b031681565b6040516100a591906102cd565b6100b661026e565b6040805160008082526020820152016100a5565b644d4f434b5960d81b90565b6001805490600061014b836102e1565b9190505550565b6000546001600160a01b03163314610188573360405163053e900f60e21b815260040161017f91906102cd565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031663f166d9eb6101c361012f565b6040516001600160e01b031960e084901b811682526001600160d81b03199290921660048201523360248201526000359091166044820152606401602060405180830381865afa15801561021b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023f9190610308565b61025e57336040516311bf00c960e01b815260040161017f91906102cd565b6002805490600061014b836102e1565b6000546001600160a01b0316331461029b573360405163053e900f60e21b815260040161017f91906102cd565b565b6000602082840312156102af57600080fd5b81356001600160a01b03811681146102c657600080fd5b9392505050565b6001600160a01b0391909116815260200190565b60006001820161030157634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561031a57600080fd5b815180151581146102c657600080fdfea26469706673582212208e5ec917c369e4f86f1389ecb546756867310c49c3d9a9c5efef971cdd8d8b9964736f6c634300080f0033";

type MockModuleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockModuleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MockModule__factory extends ContractFactory {
  constructor(...args: MockModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MockModule> {
    return super.deploy(kernel_, overrides || {}) as Promise<MockModule>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): MockModule {
    return super.attach(address) as MockModule;
  }
  override connect(signer: Signer): MockModule__factory {
    return super.connect(signer) as MockModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockModuleInterface {
    return new utils.Interface(_abi) as MockModuleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockModule {
    return new Contract(address, _abi, signerOrProvider) as MockModule;
  }
}
