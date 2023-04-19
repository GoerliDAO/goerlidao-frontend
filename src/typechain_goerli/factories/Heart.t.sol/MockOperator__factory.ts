/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MockOperator, MockOperatorInterface } from "../../Heart.t.sol/MockOperator";

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
    inputs: [],
    name: "Operator_CustomError",
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
    name: "operate",
    outputs: [],
    stateMutability: "view",
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
    inputs: [],
    name: "result",
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
        internalType: "bool",
        name: "result_",
        type: "bool",
      },
    ],
    name: "setResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161043e38038061043e83398101604081905261002f91610059565b600080546001600160a81b0319166001600160a01b0390921691909117600160a01b179055610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b6103a6806100986000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c806322f3e2d41461007d5780634657b36c1461009a5780635924be70146100af57806365372147146100be5780637159a618146100d25780639459b875146100da578063d4aae0c4146100e9578063f4b4dc2e14610109575b600080fd5b610085610135565b60405190151581526020015b60405180910390f35b6100ad6100a8366004610230565b6101ac565b005b60606040516100919190610260565b60005461008590600160a01b900460ff1681565b6100ad610204565b606060405161009191906102c3565b6000546100fc906001600160a01b031681565b6040516100919190610311565b6100ad610117366004610336565b60008054911515600160a01b0260ff60a01b19909216919091179055565b6000805460405163e52223bb60e01b81526001600160a01b039091169063e52223bb90610166903090600401610311565b602060405180830381865afa158015610183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a79190610353565b905090565b6000546001600160a01b031633146101e2573360405163053e900f60e21b81526004016101d99190610311565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff1661022e57604051631117572b60e01b815260040160405180910390fd5b565b60006020828403121561024257600080fd5b81356001600160a01b038116811461025957600080fd5b9392505050565b602080825282518282018190526000919060409081850190868401855b828110156102b657815180516001600160d81b03191685528601516001600160e01b03191686850152928401929085019060010161027d565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156103055783516001600160d81b031916835292840192918401916001016102df565b50909695505050505050565b6001600160a01b0391909116815260200190565b801515811461033357600080fd5b50565b60006020828403121561034857600080fd5b813561025981610325565b60006020828403121561036557600080fd5b81516102598161032556fea2646970667358221220f7e3c95ede7714dae1990eb6583e0b8c6932627ee806a98093444785f080666c64736f6c634300080f0033";

type MockOperatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockOperatorConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MockOperator__factory extends ContractFactory {
  constructor(...args: MockOperatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MockOperator> {
    return super.deploy(kernel_, overrides || {}) as Promise<MockOperator>;
  }
  override getDeployTransaction(
    kernel_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(kernel_, overrides || {});
  }
  override attach(address: string): MockOperator {
    return super.attach(address) as MockOperator;
  }
  override connect(signer: Signer): MockOperator__factory {
    return super.connect(signer) as MockOperator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOperatorInterface {
    return new utils.Interface(_abi) as MockOperatorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockOperator {
    return new Contract(address, _abi, signerOrProvider) as MockOperator;
  }
}
