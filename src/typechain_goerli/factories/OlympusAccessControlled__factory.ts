/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { OlympusAccessControlled, OlympusAccessControlledInterface } from "../OlympusAccessControlled";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
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
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OlympusAccessControlled__factory {
  static readonly abi = _abi;
  static createInterface(): OlympusAccessControlledInterface {
    return new utils.Interface(_abi) as OlympusAccessControlledInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OlympusAccessControlled {
    return new Contract(address, _abi, signerOrProvider) as OlympusAccessControlled;
  }
}
