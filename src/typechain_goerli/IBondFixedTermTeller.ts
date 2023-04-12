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
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";

export interface IBondFixedTermTellerInterface extends utils.Interface {
  functions: {
    "batchRedeem(uint256[],uint256[])": FunctionFragment;
    "create(address,uint48,uint256)": FunctionFragment;
    "deploy(address,uint48)": FunctionFragment;
    "getTokenId(address,uint48)": FunctionFragment;
    "getTokenNameAndSymbol(uint256)": FunctionFragment;
    "redeem(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "batchRedeem" | "create" | "deploy" | "getTokenId" | "getTokenNameAndSymbol" | "redeem",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchRedeem",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: "getTokenNameAndSymbol", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: "batchRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenNameAndSymbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;

  events: {};
}

export interface IBondFixedTermTeller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBondFixedTermTellerInterface;

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
    batchRedeem(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      amounts_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    create(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deploy(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getTokenId(
      payoutToken_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getTokenNameAndSymbol(tokenId_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;

    redeem(
      tokenId_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  batchRedeem(
    tokenIds_: PromiseOrValue<BigNumberish>[],
    amounts_: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  create(
    underlying_: PromiseOrValue<string>,
    expiry_: PromiseOrValue<BigNumberish>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deploy(
    underlying_: PromiseOrValue<string>,
    expiry_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getTokenId(
    payoutToken_: PromiseOrValue<string>,
    expiry_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getTokenNameAndSymbol(tokenId_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;

  redeem(
    tokenId_: PromiseOrValue<BigNumberish>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    batchRedeem(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      amounts_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    create(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    deploy(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenId(
      payoutToken_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenNameAndSymbol(tokenId_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;

    redeem(
      tokenId_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    batchRedeem(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      amounts_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    create(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deploy(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getTokenId(
      payoutToken_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTokenNameAndSymbol(tokenId_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      tokenId_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchRedeem(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      amounts_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    create(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deploy(
      underlying_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getTokenId(
      payoutToken_: PromiseOrValue<string>,
      expiry_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTokenNameAndSymbol(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    redeem(
      tokenId_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
