/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export interface IDAIInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "deny(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "move(address,address,uint256)": FunctionFragment;
    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "pull(address,uint256)": FunctionFragment;
    "push(address,uint256)": FunctionFragment;
    "rely(address)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "wards()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "burn"
      | "deny"
      | "mint"
      | "move"
      | "permit"
      | "pull"
      | "push"
      | "rely"
      | "transfer"
      | "transferFrom"
      | "wards",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "deny", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: "move",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: "pull", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "push", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "rely", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: "wards", values?: undefined): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;

  events: {};
}

export interface IDAI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDAIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    burn(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deny(
      guy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mint(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    move(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    permit(
      holder: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      allowed: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    pull(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    push(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rely(
      guy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transfer(
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    wards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;
  };

  approve(
    usr: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  burn(
    usr: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deny(
    guy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mint(
    usr: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  move(
    src: PromiseOrValue<string>,
    dst: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  permit(
    holder: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    allowed: PromiseOrValue<boolean>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  pull(
    usr: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  push(
    usr: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rely(
    guy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transfer(
    dst: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    src: PromiseOrValue<string>,
    dst: PromiseOrValue<string>,
    wad: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  wards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    approve(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    burn(usr: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    deny(guy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    mint(usr: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    move(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    permit(
      holder: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      allowed: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    pull(usr: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    push(usr: PromiseOrValue<string>, wad: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    rely(guy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    transfer(
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    wards(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    approve(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    burn(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deny(guy: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    mint(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    move(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    permit(
      holder: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      allowed: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    pull(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    push(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rely(guy: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    transfer(
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    wards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    burn(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deny(
      guy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    move(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    permit(
      holder: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      allowed: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    pull(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    push(
      usr: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rely(
      guy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transfer(
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      src: PromiseOrValue<string>,
      dst: PromiseOrValue<string>,
      wad: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    wards(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;
  };
}
