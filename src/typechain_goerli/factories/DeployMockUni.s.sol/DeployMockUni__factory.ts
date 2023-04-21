/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployMockUni, DeployMockUniInterface } from "../../DeployMockUni.s.sol/DeployMockUni";

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
        internalType: "contract MockUniV2Pair",
        name: "mockuniv2",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506109048061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4b45524e454c5f5052495600000000000000000000000000000000000000000060448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af115801561014d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101719190610462565b6040517fce817d4700000000000000000000000000000000000000000000000000000000815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b50506040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5345504f4c49415f4744414f0000000000000000000000000000000000000000604482015260009250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063350d56bf906064016020604051808303816000875af115801561028d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b1919061047b565b6040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5345504f4c49415f4441490000000000000000000000000000000000000000006044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af115801561034f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610373919061047b565b9050818160405161038390610455565b73ffffffffffffffffffffffffffffffffffffffff928316815291166020820152604001604051809103906000f0801580156103c3573d6000803e3d6000fd5b5093507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561043757600080fd5b505af115801561044b573d6000803e3d6000fd5b5050505050505090565b610416806104b983390190565b60006020828403121561047457600080fd5b5051919050565b60006020828403121561048d57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146104b157600080fd5b939250505056fe608060405234801561001057600080fd5b5060405161041638038061041683398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610358806100be6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630902f1ac146100515780630dfe1681146100bc578063d21220a714610101578063fff6cae914610121575b600080fd5b600254604080516dffffffffffffffffffffffffffff80841682526e01000000000000000000000000000084041660208201527c010000000000000000000000000000000000000000000000000000000090920463ffffffff16908201526060015b60405180910390f35b6000546100dc9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b3565b6001546100dc9073ffffffffffffffffffffffffffffffffffffffff1681565b61012961012b565b005b6000546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610199573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bd9190610309565b600280547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff929092169190911790556001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa15801561026a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028e9190610309565b6002805463ffffffff42167c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff9485166e01000000000000000000000000000002169390911692909217919091179055565b60006020828403121561031b57600080fd5b505191905056fea26469706673582212202841ac9f6ecee6de9169f7c3291a64b78d6a6f36a8dc77d6e74410099ef5dd7364736f6c634300080f0033a26469706673582212201f768b1197f9666cd18a712e3a12d4dc1fab5282a82149bb96b58d4d1359e67764736f6c634300080f0033";

type DeployMockUniConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DeployMockUniConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class DeployMockUni__factory extends ContractFactory {
  constructor(...args: DeployMockUniConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<DeployMockUni> {
    return super.deploy(overrides || {}) as Promise<DeployMockUni>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployMockUni {
    return super.attach(address) as DeployMockUni;
  }
  override connect(signer: Signer): DeployMockUni__factory {
    return super.connect(signer) as DeployMockUni__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployMockUniInterface {
    return new utils.Interface(_abi) as DeployMockUniInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DeployMockUni {
    return new Contract(address, _abi, signerOrProvider) as DeployMockUni;
  }
}
