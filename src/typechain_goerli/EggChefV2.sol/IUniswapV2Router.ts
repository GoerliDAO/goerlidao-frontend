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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export interface IUniswapV2RouterInterface extends utils.Interface {
  functions: {
    "addLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "addLiquidityETH"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;

  decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;

  events: {};
}

export interface IUniswapV2Router extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV2RouterInterface;

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
    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  addLiquidityETH(
    token: PromiseOrValue<string>,
    amountTokenDesired: PromiseOrValue<BigNumberish>,
    amountTokenMin: PromiseOrValue<BigNumberish>,
    amountETHMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountToken: BigNumber;
        amountETH: BigNumber;
        liquidity: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityETH(
      token: PromiseOrValue<string>,
      amountTokenDesired: PromiseOrValue<BigNumberish>,
      amountTokenMin: PromiseOrValue<BigNumberish>,
      amountETHMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
