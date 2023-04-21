/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Faucet, FaucetInterface } from "../Faucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "gdao_",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "reserve_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ethDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gdaoDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveDrip_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dripInterval_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_DripFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_DripOnCooldown",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
    ],
    name: "Faucet_InsufficientFunds",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Faucet.Asset",
        name: "asset",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Drip",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
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
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
    ],
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "dripAmount",
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
    name: "dripInterval",
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
    name: "dripTestAmounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "lastDrip",
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
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "setDripAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interval_",
        type: "uint256",
      },
    ],
    name: "setDripInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Faucet.Asset",
        name: "",
        type: "uint8",
      },
    ],
    name: "token",
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
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "enum Faucet.Asset",
        name: "asset_",
        type: "uint8",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b50604051610faa380380610faa8339810160408190526100349161014d565b600180546001600160a01b039889166001600160a01b0319918216179091557fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c8054978916978216979097179096557fc3a24b0501bd2c13a7e57f2db4369ec4c223447539fc0724a9d55ac4a06ebd4d80549096169490961693909317909355600260208190527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b919091557fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0929092556000919091527f679795a0195a1b76cdebb7c51d74e058aee92919b8c3389af86ef24535e8a28c556005556101c1565b6001600160a01b038116811461014a57600080fd5b50565b600080600080600080600060e0888a03121561016857600080fd5b875161017381610135565b602089015190975061018481610135565b604089015190965061019581610135565b80955050606088015193506080880151925060a0880151915060c0880151905092959891949750929550565b610dda806101d06000396000f3fe6080604052600436106100b55760003560e01c806392c6672811610069578063cd3a88611161004e578063cd3a8861146101b9578063f851a440146101e6578063fd00ea1c1461023857600080fd5b806392c6672814610179578063a9a89db91461019957600080fd5b8063558d04231161009a578063558d0423146100f85780636a2148111461014357806370fef9f61461015957600080fd5b80631a624b17146100c15780632c35c40b146100d857600080fd5b366100bc57005b600080fd5b3480156100cd57600080fd5b506100d661027b565b005b3480156100e457600080fd5b506100d66100f3366004610bcc565b61029b565b34801561010457600080fd5b50610130610113366004610bcc565b600460209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b34801561014f57600080fd5b5061013060055481565b34801561016557600080fd5b506100d6610174366004610c1a565b61052e565b34801561018557600080fd5b506100d6610194366004610c3c565b610904565b3480156101a557600080fd5b506100d66101b4366004610c66565b6109c2565b3480156101c557600080fd5b506101306101d4366004610c1a565b60026020526000908152604090205481565b3480156101f257600080fd5b506001546102139073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013a565b34801561024457600080fd5b50610213610253366004610c1a565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b610285600061052e565b61028f600161052e565b610299600261052e565b565b60015473ffffffffffffffffffffffffffffffffffffffff163314610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4d7573742062652061646d696e0000000000000000000000000000000000000060448201526064015b60405180910390fd5b600081600281111561033557610335610c7f565b036104095760008273ffffffffffffffffffffffffffffffffffffffff164760405160006040518083038185875af1925050503d8060008114610394576040519150601f19603f3d011682016040523d82523d6000602084013e610399565b606091505b5050905080610404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5769746864726177204661696c656400000000000000000000000000000000006044820152606401610318565b505050565b61052a826003600084600281111561042357610423610c7f565b600281111561043457610434610c7f565b8152602081019190915260409081016000205490517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156104b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d59190610cae565b600360008560028111156104eb576104eb610c7f565b60028111156104fc576104fc610c7f565b815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff169190610a48565b5050565b60005460011461059a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e4359000000000000000000000000000000000000000000006044820152606401610318565b60026000818155600554338252600460205260408220909290919084908111156105c6576105c6610c7f565b60028111156105d7576105d7610c7f565b8152602001908152602001600020546105f09190610cc7565b42101561062b57806040517fd1510d6e0000000000000000000000000000000000000000000000000000000081526004016103189190610d06565b600081600281111561063f5761063f610c7f565b03610774576002600082600281111561065a5761065a610c7f565b600281111561066b5761066b610c7f565b8152602001908152602001600020544710156106b557806040517f63dbac910000000000000000000000000000000000000000000000000000000081526004016103189190610d06565b60003360028284828111156106cc576106cc610c7f565b60028111156106dd576106dd610c7f565b81526020019081526020016000205460405160006040518083038185875af1925050503d806000811461072c576040519150601f19603f3d011682016040523d82523d6000602084013e610731565b606091505b505090508061076e57816040517f9e73bbe70000000000000000000000000000000000000000000000000000000081526004016103189190610d06565b506108fc565b6002600082600281111561078a5761078a610c7f565b600281111561079b5761079b610c7f565b815260200190815260200160002054600360008360028111156107c0576107c0610c7f565b60028111156107d1576107d1610c7f565b8152602081019190915260409081016000205490517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa15801561084e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108729190610cae565b10156108ac57806040517f63dbac910000000000000000000000000000000000000000000000000000000081526004016103189190610d06565b6108fc33600260008460028111156108c6576108c6610c7f565b60028111156108d7576108d7610c7f565b815260200190815260200160002054600360008560028111156104eb576104eb610c7f565b506001600055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4d7573742062652061646d696e000000000000000000000000000000000000006044820152606401610318565b806002600084600281111561099c5761099c610c7f565b60028111156109ad576109ad610c7f565b81526020810191909152604001600020555050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610a43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4d7573742062652061646d696e000000000000000000000000000000000000006044820152606401610318565b600555565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610adf9190610d47565b6000604051808303816000865af19150503d8060008114610b1c576040519150601f19603f3d011682016040523d82523d6000602084013e610b21565b606091505b5091509150818015610b4b575080511580610b4b575080806020019051810190610b4b9190610d82565b610bb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610318565b5050505050565b803560038110610bc757600080fd5b919050565b60008060408385031215610bdf57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff81168114610c0357600080fd5b9150610c1160208401610bb8565b90509250929050565b600060208284031215610c2c57600080fd5b610c3582610bb8565b9392505050565b60008060408385031215610c4f57600080fd5b610c5883610bb8565b946020939093013593505050565b600060208284031215610c7857600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215610cc057600080fd5b5051919050565b60008219821115610d01577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b6020810160038310610d41577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6000825160005b81811015610d685760208186018101518583015201610d4e565b81811115610d77576000828501525b509190910192915050565b600060208284031215610d9457600080fd5b81518015158114610c3557600080fdfea2646970667358221220780d82c292822c78c62fcdd97a9000c6041b9cce6ebf5540b14f6d1b7291cb1464736f6c634300080f0033";

type FaucetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: FaucetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Faucet__factory extends ContractFactory {
  constructor(...args: FaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    reserve_: PromiseOrValue<string>,
    ethDrip_: PromiseOrValue<BigNumberish>,
    gdaoDrip_: PromiseOrValue<BigNumberish>,
    reserveDrip_: PromiseOrValue<BigNumberish>,
    dripInterval_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<Faucet> {
    return super.deploy(
      admin_,
      gdao_,
      reserve_,
      ethDrip_,
      gdaoDrip_,
      reserveDrip_,
      dripInterval_,
      overrides || {},
    ) as Promise<Faucet>;
  }
  override getDeployTransaction(
    admin_: PromiseOrValue<string>,
    gdao_: PromiseOrValue<string>,
    reserve_: PromiseOrValue<string>,
    ethDrip_: PromiseOrValue<BigNumberish>,
    gdaoDrip_: PromiseOrValue<BigNumberish>,
    reserveDrip_: PromiseOrValue<BigNumberish>,
    dripInterval_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin_,
      gdao_,
      reserve_,
      ethDrip_,
      gdaoDrip_,
      reserveDrip_,
      dripInterval_,
      overrides || {},
    );
  }
  override attach(address: string): Faucet {
    return super.attach(address) as Faucet;
  }
  override connect(signer: Signer): Faucet__factory {
    return super.connect(signer) as Faucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetInterface {
    return new utils.Interface(_abi) as FaucetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet {
    return new Contract(address, _abi, signerOrProvider) as Faucet;
  }
}
