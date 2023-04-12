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
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export interface KernelInterface extends utils.Interface {
  functions: {
    "activePolicies(uint256)": FunctionFragment;
    "allKeycodes(uint256)": FunctionFragment;
    "executeAction(uint8,address)": FunctionFragment;
    "executor()": FunctionFragment;
    "getDependentIndex(bytes5,address)": FunctionFragment;
    "getKeycodeForModule(address)": FunctionFragment;
    "getModuleForKeycode(bytes5)": FunctionFragment;
    "getPolicyIndex(address)": FunctionFragment;
    "isPolicyActive(address)": FunctionFragment;
    "moduleDependents(bytes5,uint256)": FunctionFragment;
    "modulePermissions(bytes5,address,bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activePolicies"
      | "allKeycodes"
      | "executeAction"
      | "executor"
      | "getDependentIndex"
      | "getKeycodeForModule"
      | "getModuleForKeycode"
      | "getPolicyIndex"
      | "isPolicyActive"
      | "moduleDependents"
      | "modulePermissions",
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "activePolicies", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "allKeycodes", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: "executeAction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: "executor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDependentIndex",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: "getKeycodeForModule", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "getModuleForKeycode", values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: "getPolicyIndex", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: "isPolicyActive", values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: "moduleDependents",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "modulePermissions",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>, PromiseOrValue<BytesLike>],
  ): string;

  decodeFunctionResult(functionFragment: "activePolicies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allKeycodes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeAction", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDependentIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getKeycodeForModule", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getModuleForKeycode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPolicyIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPolicyActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "moduleDependents", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "modulePermissions", data: BytesLike): Result;

  events: {
    "ActionExecuted(uint8,address)": EventFragment;
    "PermissionsUpdated(bytes5,address,bytes4,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionsUpdated"): EventFragment;
}

export interface ActionExecutedEventObject {
  action_: number;
  target_: string;
}
export type ActionExecutedEvent = TypedEvent<[number, string], ActionExecutedEventObject>;

export type ActionExecutedEventFilter = TypedEventFilter<ActionExecutedEvent>;

export interface PermissionsUpdatedEventObject {
  keycode_: string;
  policy_: string;
  funcSelector_: string;
  granted_: boolean;
}
export type PermissionsUpdatedEvent = TypedEvent<[string, string, string, boolean], PermissionsUpdatedEventObject>;

export type PermissionsUpdatedEventFilter = TypedEventFilter<PermissionsUpdatedEvent>;

export interface Kernel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KernelInterface;

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
    activePolicies(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    allKeycodes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    executeAction(
      action_: PromiseOrValue<BigNumberish>,
      target_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    executor(overrides?: CallOverrides): Promise<[string]>;

    getDependentIndex(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getKeycodeForModule(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    getModuleForKeycode(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    getPolicyIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    isPolicyActive(policy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    moduleDependents(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    modulePermissions(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  activePolicies(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  allKeycodes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  executeAction(
    action_: PromiseOrValue<BigNumberish>,
    target_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  executor(overrides?: CallOverrides): Promise<string>;

  getDependentIndex(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getKeycodeForModule(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  getModuleForKeycode(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getPolicyIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  isPolicyActive(policy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  moduleDependents(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  modulePermissions(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    activePolicies(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    allKeycodes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    executeAction(
      action_: PromiseOrValue<BigNumberish>,
      target_: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    executor(overrides?: CallOverrides): Promise<string>;

    getDependentIndex(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getKeycodeForModule(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    getModuleForKeycode(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getPolicyIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isPolicyActive(policy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    moduleDependents(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    modulePermissions(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    "ActionExecuted(uint8,address)"(
      action_?: PromiseOrValue<BigNumberish> | null,
      target_?: PromiseOrValue<string> | null,
    ): ActionExecutedEventFilter;
    ActionExecuted(
      action_?: PromiseOrValue<BigNumberish> | null,
      target_?: PromiseOrValue<string> | null,
    ): ActionExecutedEventFilter;

    "PermissionsUpdated(bytes5,address,bytes4,bool)"(
      keycode_?: PromiseOrValue<BytesLike> | null,
      policy_?: PromiseOrValue<string> | null,
      funcSelector_?: null,
      granted_?: null,
    ): PermissionsUpdatedEventFilter;
    PermissionsUpdated(
      keycode_?: PromiseOrValue<BytesLike> | null,
      policy_?: PromiseOrValue<string> | null,
      funcSelector_?: null,
      granted_?: null,
    ): PermissionsUpdatedEventFilter;
  };

  estimateGas: {
    activePolicies(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    allKeycodes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    executeAction(
      action_: PromiseOrValue<BigNumberish>,
      target_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    executor(overrides?: CallOverrides): Promise<BigNumber>;

    getDependentIndex(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getKeycodeForModule(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getModuleForKeycode(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getPolicyIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isPolicyActive(policy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    moduleDependents(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    modulePermissions(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activePolicies(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allKeycodes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeAction(
      action_: PromiseOrValue<BigNumberish>,
      target_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDependentIndex(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getKeycodeForModule(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getModuleForKeycode(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPolicyIndex(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPolicyActive(policy_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moduleDependents(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    modulePermissions(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
