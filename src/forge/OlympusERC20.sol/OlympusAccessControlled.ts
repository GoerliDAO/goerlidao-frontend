/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export interface OlympusAccessControlledInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "authority" | "setAuthority"): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "setAuthority", values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  authority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<[string], AuthorityUpdatedEventObject>;

export type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;

export interface OlympusAccessControlled extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OlympusAccessControlledInterface;

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
    authority(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      _newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    _newAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    setAuthority(_newAuthority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address)"(authority?: PromiseOrValue<string> | null): AuthorityUpdatedEventFilter;
    AuthorityUpdated(authority?: PromiseOrValue<string> | null): AuthorityUpdatedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      _newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
