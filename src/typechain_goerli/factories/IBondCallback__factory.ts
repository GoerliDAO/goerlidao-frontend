/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBondCallback, IBondCallbackInterface } from "../IBondCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "amountsForMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "in_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "out_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "teller_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "blacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "inputAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount_",
        type: "uint256",
      },
    ],
    name: "callback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "teller_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBondCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IBondCallbackInterface {
    return new utils.Interface(_abi) as IBondCallbackInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBondCallback {
    return new Contract(address, _abi, signerOrProvider) as IBondCallback;
  }
}
