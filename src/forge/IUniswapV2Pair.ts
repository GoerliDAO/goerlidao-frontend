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
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";

export interface IUniswapV2PairInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "PERMIT_TYPEHASH()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "getReserves()": FunctionFragment;
    "mint(address)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "swap(uint256,uint256,address,bytes)": FunctionFragment;
    "symbol()": FunctionFragment;
    "sync()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "PERMIT_TYPEHASH"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "decimals"
      | "getReserves"
      | "mint"
      | "name"
      | "nonces"
      | "permit"
      | "swap"
      | "symbol"
      | "sync"
      | "token0"
      | "token1"
      | "totalSupply"
      | "transfer"
      | "transferFrom",
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
  encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
  encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IUniswapV2Pair extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV2PairInterface;

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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getReserves(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, number] & {
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: number;
      }
    >;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  getReserves(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, number] & {
      reserve0: BigNumber;
      reserve1: BigNumber;
      blockTimestampLast: number;
    }
  >;

  mint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  permit(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  swap(
    amount0Out: PromiseOrValue<BigNumberish>,
    amount1Out: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    getReserves(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, number] & {
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: number;
      }
    >;

    mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    sync(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    mint(to: PromiseOrValue<string>, overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    swap(
      amount0Out: PromiseOrValue<BigNumberish>,
      amount1Out: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
