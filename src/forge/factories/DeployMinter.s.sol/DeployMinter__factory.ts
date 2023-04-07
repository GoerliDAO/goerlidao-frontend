/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployMinter, DeployMinterInterface } from "../../DeployMinter.s.sol/DeployMinter";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    inputs: [],
    name: "run",
    outputs: [
      {
        internalType: "contract GdaoMinter",
        name: "minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506111ea8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461007e578063f8ccbf4714610086575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b6100616100a3565b6000546100939060ff1681565b6040519015158152602001610075565b6040516360f9bb1160e01b81526020600482015260076024820152660b9cd958dc995d60ca1b60448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906064016000604051808303816000875af1158015610111573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610139919081019061046b565b604051636229498b60e01b8152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90636229498b906101789085908590600401610517565b6020604051808303816000875af1158015610197573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bb9190610558565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561020b57600080fd5b505af115801561021f573d6000803e3d6000fd5b505060405163350d56bf60e01b815260009250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063350d56bf90610274906004016020808252600490820152634744414f60e01b604082015260600190565b6020604051808303816000875af1158015610293573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b79190610571565b60405163350d56bf60e01b815260206004820152600660248201526512d15493915360d21b6044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015610325573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103499190610571565b90506000819050808360405161035e90610418565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610391573d6000803e3d6000fd5b5095507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103f857600080fd5b505af115801561040c573d6000803e3d6000fd5b50505050505050505090565b610c13806105a283390190565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561045657818101518382015260200161043e565b83811115610465576000848401525b50505050565b60006020828403121561047d57600080fd5b81516001600160401b038082111561049457600080fd5b818401915084601f8301126104a857600080fd5b8151818111156104ba576104ba610425565b604051601f8201601f19908116603f011681019083821181831017156104e2576104e2610425565b816040528281528760208487010111156104fb57600080fd5b61050c83602083016020880161043b565b979650505050505050565b604081526000835180604084015261053681606085016020880161043b565b63ffffffff93909316602083015250601f91909101601f191601606001919050565b60006020828403121561056a57600080fd5b5051919050565b60006020828403121561058357600080fd5b81516001600160a01b038116811461059a57600080fd5b939250505056fe608060405234801561001057600080fd5b50604051610c13380380610c1383398101604081905261002f91610085565b600080546001600160a01b039384166001600160a01b0319909116179055600180546001600160a81b0319169190921617600160a01b1790556100bf565b6001600160a01b038116811461008257600080fd5b50565b6000806040838503121561009857600080fd5b82516100a38161006d565b60208401519092506100b48161006d565b809150509250929050565b610b45806100ce6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c80630152a5ea146100bf57806302fb0c5e146100d45780630f15f4c0146100fd5780631ae7ec2e146101055780631b0a68f214610126578063359fe780146101395780634657b36c1461014c57806351b42b001461015f578063664aecb014610167578063a29a0d9014610195578063bbaed5cb146101b5578063d4aae0c4146101c8578063ea643914146101db578063ffa1ad74146101e3575b600080fd5b6100d26100cd3660046109f6565b6101f8565b005b6001546100e890600160a01b900460ff1681565b60405190151581526020015b60405180910390f35b6100d2610399565b61010d610453565b6040516001600160d81b031990911681526020016100f4565b6100d26101343660046109f6565b61045f565b6100d26101473660046109f6565b610597565b6100d261015a366004610a22565b6106cd565b6100d261071c565b610187610175366004610a22565b60026020526000908152604090205481565b6040519081526020016100f4565b6001546101a8906001600160a01b031681565b6040516100f49190610a46565b6100d26101c33660046109f6565b6107d0565b6000546101a8906001600160a01b031681565b6100d26109af565b604080516001815260006020820152016100f4565b6000546001600160a01b031663f166d9eb610211610453565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161023d93929190610a5a565b602060405180830381865afa15801561025a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027e9190610a8f565b6102a657336040516311bf00c960e01b815260040161029d9190610a46565b60405180910390fd5b600154600160a01b900460ff166102d05760405163508bf22f60e11b815260040160405180910390fd5b806000036102f15760405163266a520b60e11b815260040160405180910390fd5b60015460405163079cc67960e41b81526001600160a01b03909116906379cc6790906103239085908590600401610ab1565b600060405180830381600087803b15801561033d57600080fd5b505af1158015610351573d6000803e3d6000fd5b50506040518381526001600160a01b03851692503391507fbac40739b0d4ca32fa2d82fc91630465ba3eddd1598da6fca393b26fb63b94539060200160405180910390a35050565b6000546001600160a01b031663f166d9eb6103b2610453565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016103de93929190610a5a565b602060405180830381865afa1580156103fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041f9190610a8f565b61043e57336040516311bf00c960e01b815260040161029d9190610a46565b6001805460ff60a01b1916600160a01b179055565b6426a4a72a2960d91b90565b6000546001600160a01b031663f166d9eb610478610453565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016104a493929190610a5a565b602060405180830381865afa1580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e59190610a8f565b61050457336040516311bf00c960e01b815260040161029d9190610a46565b6001600160a01b0382166000908152600260205260408120549082821115610535576105308383610ae0565b610538565b60005b6001600160a01b0385166000818152600260205260409081902083905551919250907f08c666f5d7ad747c595b189947464cfac5e56befa6bd12ced49a49adb3f8166d906105899084815260200190565b60405180910390a250505050565b6000546001600160a01b031663f166d9eb6105b0610453565b336000356001600160e01b0319166040518463ffffffff1660e01b81526004016105dc93929190610a5a565b602060405180830381865afa1580156105f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061d9190610a8f565b61063c57336040516311bf00c960e01b815260040161029d9190610a46565b6001600160a01b038216600090815260026020526040812054908261066383600019610ae0565b1115610678576106738383610af7565b61067c565b6000195b6001600160a01b0385166000818152600260205260409081902083905551919250907f2f612f30164b43d77b321f13922cb2190f7f7956b9483d817271d30679a1aa7b906105899084815260200190565b6000546001600160a01b031633146106fa573360405163053e900f60e21b815260040161029d9190610a46565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031663f166d9eb610735610453565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161076193929190610a5a565b602060405180830381865afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a29190610a8f565b6107c157336040516311bf00c960e01b815260040161029d9190610a46565b6001805460ff60a01b19169055565b6000546001600160a01b031663f166d9eb6107e9610453565b336000356001600160e01b0319166040518463ffffffff1660e01b815260040161081593929190610a5a565b602060405180830381865afa158015610832573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108569190610a8f565b61087557336040516311bf00c960e01b815260040161029d9190610a46565b600154600160a01b900460ff1661089f5760405163508bf22f60e11b815260040160405180910390fd5b806000036108c05760405163266a520b60e11b815260040160405180910390fd5b33600090815260026020526040902054818110156108f1576040516369003add60e11b815260040160405180910390fd5b3360009081526002602052604090819020838303905560015490516340c10f1960e01b81526001600160a01b03909116906340c10f19906109389086908690600401610ab1565b600060405180830381600087803b15801561095257600080fd5b505af1158015610966573d6000803e3d6000fd5b50506040518481526001600160a01b03861692503391507fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f89060200160405180910390a3505050565b6000546001600160a01b031633146109dc573360405163053e900f60e21b815260040161029d9190610a46565b565b6001600160a01b03811681146109f357600080fd5b50565b60008060408385031215610a0957600080fd5b8235610a14816109de565b946020939093013593505050565b600060208284031215610a3457600080fd5b8135610a3f816109de565b9392505050565b6001600160a01b0391909116815260200190565b6001600160d81b03199390931683526001600160a01b039190911660208301526001600160e01b031916604082015260600190565b600060208284031215610aa157600080fd5b81518015158114610a3f57600080fd5b6001600160a01b03929092168252602082015260400190565b634e487b7160e01b600052601160045260246000fd5b600082821015610af257610af2610aca565b500390565b60008219821115610b0a57610b0a610aca565b50019056fea264697066735822122087b68e375676bacace1c90c640ad0e6b4bb80b804110d30bf1e601616e849c7c64736f6c634300080f0033a26469706673582212208568a7e500a423deb97323f1b28bff7b03368daa681369bd58bbc8f97ea196bf64736f6c634300080f0033";

type DeployMinterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DeployMinterConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class DeployMinter__factory extends ContractFactory {
  constructor(...args: DeployMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<DeployMinter> {
    return super.deploy(overrides || {}) as Promise<DeployMinter>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployMinter {
    return super.attach(address) as DeployMinter;
  }
  override connect(signer: Signer): DeployMinter__factory {
    return super.connect(signer) as DeployMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployMinterInterface {
    return new utils.Interface(_abi) as DeployMinterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DeployMinter {
    return new Contract(address, _abi, signerOrProvider) as DeployMinter;
  }
}
