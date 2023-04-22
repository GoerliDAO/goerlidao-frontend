/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INSTRv1, INSTRv1Interface } from "../../INSTR.v1.sol/INSTRv1";

const _abi = [
  {
    inputs: [],
    name: "INSTR_InstructionsCannotBeEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "INSTR_InvalidAction",
    type: "error",
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
        indexed: false,
        internalType: "uint256",
        name: "instructionsId",
        type: "uint256",
      },
    ],
    name: "InstructionsStored",
    type: "event",
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
    inputs: [
      {
        internalType: "uint256",
        name: "instructionsId_",
        type: "uint256",
      },
    ],
    name: "getInstructions",
    outputs: [
      {
        components: [
          {
            internalType: "enum Actions",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
        ],
        internalType: "struct Instruction[]",
        name: "",
        type: "tuple[]",
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
        components: [
          {
            internalType: "enum Actions",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
        ],
        internalType: "struct Instruction[]",
        name: "instructions_",
        type: "tuple[]",
      },
    ],
    name: "store",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "storedInstructions",
    outputs: [
      {
        internalType: "enum Actions",
        name: "action",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalInstructions",
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

export class INSTRv1__factory {
  static readonly abi = _abi;
  static createInterface(): INSTRv1Interface {
    return new utils.Interface(_abi) as INSTRv1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): INSTRv1 {
    return new Contract(address, _abi, signerOrProvider) as INSTRv1;
  }
}
