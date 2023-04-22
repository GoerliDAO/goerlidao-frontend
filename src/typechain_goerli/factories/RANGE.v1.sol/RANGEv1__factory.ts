/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RANGEv1, RANGEv1Interface } from "../../RANGE.v1.sol/RANGEv1";

const _abi = [
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
    name: "RANGE_InvalidParams",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "CushionDown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity_",
        type: "uint256",
      },
    ],
    name: "CushionUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "wallLowPrice_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cushionLowPrice_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cushionHighPrice_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wallHighPrice_",
        type: "uint256",
      },
    ],
    name: "PricesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "cushionSpread_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wallSpread_",
        type: "uint256",
      },
    ],
    name: "SpreadsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "thresholdFactor_",
        type: "uint256",
      },
    ],
    name: "ThresholdFactorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity_",
        type: "uint256",
      },
    ],
    name: "WallDown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity_",
        type: "uint256",
      },
    ],
    name: "WallUp",
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
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
    ],
    name: "active",
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
        name: "high_",
        type: "bool",
      },
    ],
    name: "capacity",
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
    name: "gdao",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
    ],
    name: "lastActive",
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
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
    ],
    name: "market",
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
        internalType: "bool",
        name: "wall_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
    ],
    name: "price",
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
    name: "range",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bool",
                name: "active",
                type: "bool",
              },
              {
                internalType: "uint48",
                name: "lastActive",
                type: "uint48",
              },
              {
                internalType: "uint256",
                name: "capacity",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "threshold",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "market",
                type: "uint256",
              },
            ],
            internalType: "struct RANGEv1.Side",
            name: "low",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "active",
                type: "bool",
              },
              {
                internalType: "uint48",
                name: "lastActive",
                type: "uint48",
              },
              {
                internalType: "uint256",
                name: "capacity",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "threshold",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "market",
                type: "uint256",
              },
            ],
            internalType: "struct RANGEv1.Side",
            name: "high",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct RANGEv1.Line",
                name: "high",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct RANGEv1.Line",
                name: "low",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "spread",
                type: "uint256",
              },
            ],
            internalType: "struct RANGEv1.Band",
            name: "cushion",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct RANGEv1.Line",
                name: "high",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                internalType: "struct RANGEv1.Line",
                name: "low",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "spread",
                type: "uint256",
              },
            ],
            internalType: "struct RANGEv1.Band",
            name: "wall",
            type: "tuple",
          },
        ],
        internalType: "struct RANGEv1.Range",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "capacity_",
        type: "uint256",
      },
    ],
    name: "regenerate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserve",
    outputs: [
      {
        internalType: "contract ERC20",
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
        internalType: "uint256",
        name: "cushionSpread_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "wallSpread_",
        type: "uint256",
      },
    ],
    name: "setSpreads",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "thresholdFactor_",
        type: "uint256",
      },
    ],
    name: "setThresholdFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "wall_",
        type: "bool",
      },
    ],
    name: "spread",
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
    name: "thresholdFactor",
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
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "capacity_",
        type: "uint256",
      },
    ],
    name: "updateCapacity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "high_",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "market_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "marketCapacity_",
        type: "uint256",
      },
    ],
    name: "updateMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "movingAverage_",
        type: "uint256",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class RANGEv1__factory {
  static readonly abi = _abi;
  static createInterface(): RANGEv1Interface {
    return new utils.Interface(_abi) as RANGEv1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RANGEv1 {
    return new Contract(address, _abi, signerOrProvider) as RANGEv1;
  }
}
