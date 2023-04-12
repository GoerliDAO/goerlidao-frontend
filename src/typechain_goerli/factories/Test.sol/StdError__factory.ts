/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { StdError, StdErrorInterface } from "../../Test.sol/StdError";

const _abi = [
  {
    inputs: [],
    name: "arithmeticError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divisionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "encodeStorageError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enumConversionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexOOBError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowLevelError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "memOverflowError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "popError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroVarError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61027961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100985760003560e01c806305ee86121461009d57806310332977146100bb5780631de45560146100c35780638995290f146100cb578063986c5f68146100d3578063ac3d92c6146100db578063b22dc54d146100f1578063b67689da146100f9578063d160e4de14610101578063fa784a4414610109575b600080fd5b6100a5610111565b6040516100b291906101e0565b60405180910390f35b6100a5610150565b6100a5610162565b6100a5610174565b6100a5610186565b6100a56040518060200160405280600081525081565b6100a5610198565b6100a56101aa565b6100a56101bc565b6100a56101ce565b60326040516024016101239190610235565b60408051601f198184030181529190526020810180516001600160e01b0316634e487b7160e01b17905281565b60016040516024016101239190610235565b60216040516024016101239190610235565b60116040516024016101239190610235565b60416040516024016101239190610235565b60316040516024016101239190610235565b60516040516024016101239190610235565b60226040516024016101239190610235565b60126040516024016101239190610235565b600060208083528351808285015260005b8181101561020d578581018301518582016040015282016101f1565b8181111561021f576000604083870101525b50601f01601f1916929092016040019392505050565b60ff9190911681526020019056fea2646970667358221220f4f9f3988e222c5216fb04c557adf7b90e0196f87e27293f25a7aa0cb477613364736f6c634300080f0033";

type StdErrorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: StdErrorConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<StdError> {
    return super.deploy(overrides || {}) as Promise<StdError>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError {
    return super.attach(address) as StdError;
  }
  override connect(signer: Signer): StdError__factory {
    return super.connect(signer) as StdError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new utils.Interface(_abi) as StdErrorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): StdError {
    return new Contract(address, _abi, signerOrProvider) as StdError;
  }
}
