/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { KernelDeploy, KernelDeployInterface } from "../../DeployKernel.s.sol/KernelDeploy";

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
        internalType: "contract Kernel",
        name: "kernel",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b50611ade8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461007e578063f8ccbf4714610086575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b6100616100a3565b6000546100939060ff1681565b6040519015158152602001610075565b6040516360f9bb1160e01b81526020600482015260076024820152660b9cd958dc995d60ca1b60448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906064016000604051808303816000875af1158015610111573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101399190810190610322565b604051636229498b60e01b8152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90636229498b9061017890859085906004016103ce565b6020604051808303816000875af1158015610197573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bb919061040f565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561020b57600080fd5b505af115801561021f573d6000803e3d6000fd5b5050505060405161022f906102cf565b604051809103906000f08015801561024b573d6000803e3d6000fd5b5092507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102b257600080fd5b505af11580156102c6573d6000803e3d6000fd5b50505050505090565b6116808061042983390190565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561030d5781810151838201526020016102f5565b8381111561031c576000848401525b50505050565b60006020828403121561033457600080fd5b81516001600160401b038082111561034b57600080fd5b818401915084601f83011261035f57600080fd5b815181811115610371576103716102dc565b604051601f8201601f19908116603f01168101908382118183101715610399576103996102dc565b816040528281528760208487010111156103b257600080fd5b6103c38360208301602088016102f2565b979650505050505050565b60408152600083518060408401526103ed8160608501602088016102f2565b63ffffffff93909316602083015250601f91909101601f191601606001919050565b60006020828403121561042157600080fd5b505191905056fe608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561164e806100326000396000f3fe608060405234801561001057600080fd5b50600436106100985760003560e01c80620dd95d1461009d57806303c02f42146100c65780635af099c9146100ff57806363a6e3b514610112578063ae5f76fa14610132578063b4dc00b414610162578063c34c08e51461018b578063c4d1f8f11461019e578063dbb61ee7146101b3578063e52223bb146101c6578063f166d9eb146101e9575b600080fd5b6100b06100ab366004611228565b61021d565b6040516100bd9190611254565b60405180910390f35b6100f16100d436600461127d565b600560209081526000928352604080842090915290825290205481565b6040519081526020016100bd565b6100b061010d3660046112b6565b610255565b6100f16101203660046112cf565b60086020526000908152604090205481565b6101556101403660046112cf565b60036020526000908152604090205460d81b81565b6040516100bd91906112f3565b6100b0610170366004611308565b6002602052600090815260409020546001600160a01b031681565b6000546100b0906001600160a01b031681565b6101b16101ac366004611325565b61027f565b005b6101556101c13660046112b6565b6104bd565b6101d96101d43660046112cf565b6104f4565b60405190151581526020016100bd565b6101d96101f736600461135d565b600660209081526000938452604080852082529284528284209052825290205460ff1681565b6004602052816000526040600020818154811061023957600080fd5b6000918252602090912001546001600160a01b03169150829050565b6007818154811061026557600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b031633146102b457336040516237c7b360e01b81526004016102ab9190611254565b60405180910390fd5b60008260058111156102c8576102c86113a8565b0361034e576102d68161054e565b610340816001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b91906113be565b61057e565b610349816105fc565b610474565b6001826005811115610362576103626113a8565b036103ba576103708161054e565b6103b1816001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610317573d6000803e3d6000fd5b610349816107a3565b60028260058111156103ce576103ce6113a8565b036103e5576103dc8161054e565b61034981610925565b60038260058111156103f9576103f96113a8565b03610410576104078161054e565b61034981610b5c565b6004826005811115610424576104246113a8565b0361044957600080546001600160a01b0319166001600160a01b038316179055610474565b600582600581111561045d5761045d6113a8565b036104745761046b8161054e565b61047481610cf5565b806001600160a01b0316826005811115610490576104906113a8565b6040517f6560dd86d70bf03c0005b3533cc115fa8b8a12b4ee11c7342ae7b32d82267c9090600090a35050565b600181815481106104cd57600080fd5b9060005260206000209060069182820401919006600502915054906101000a900460d81b81565b6007546000901580159061054857506001600160a01b038216600081815260086020526040902054600780549091908110610531576105316113db565b6000918252602090912001546001600160a01b0316145b92915050565b806001600160a01b03163b60000361057b5780604051631bd1ba9d60e21b81526004016102ab9190611254565b50565b8060005b60058110156105f757600082826005811061059f5761059f6113db565b1a60f81b9050604160f81b6001600160f81b0319821610806105ce5750602d60f91b6001600160f81b03198216115b156105ee578360405163075f770560e31b81526004016102ab91906112f3565b50600101610582565b505050565b6000816001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066091906113be565b6001600160d81b031981166000908152600260205260409020549091506001600160a01b0316156106a65780604051634403633360e11b81526004016102ab91906112f3565b6001600160d81b03198116600090815260026020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558084526003909252808320805464ffffffffff191660d886901c9081179091556001805480820182559085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600680830491909101805464ffffffffff929093066005026101000a9182021990921692029190911790558051633a990e4560e21b81529051919263ea6439149260048084019382900301818387803b15801561078757600080fd5b505af115801561079b573d6000803e3d6000fd5b505050505050565b6000816001600160a01b0316631ae7ec2e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080791906113be565b6001600160d81b031981166000908152600260205260409020549091506001600160a01b031680158061084b5750826001600160a01b0316816001600160a01b0316145b1561086b578160405163073e073160e01b81526004016102ab91906112f3565b6001600160a01b038181166000908152600360209081526040808320805464ffffffffff19908116909155938716808452818420805490951660d888901c179094556001600160d81b031986168352600290915280822080546001600160a01b031916841790558051633a990e4560e21b8152905163ea6439149260048084019391929182900301818387803b15801561090457600080fd5b505af1158015610918573d6000803e3d6000fd5b505050506105f782610e64565b61092e816104f4565b1561094e578060405163224b187760e01b81526004016102ab9190611254565b600780546001808201835560008390527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68890910180546001600160a01b0319166001600160a01b03851617905590546109a791906113f1565b6001600160a01b038216600081815260086020526040808220939093558251639459b87560e01b815292519092639459b8759160048083019286929190829003018183875af11580156109fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a2691908101906114a7565b805190915060005b81811015610adf576000838281518110610a4a57610a4a6113db565b6020908102919091018101516001600160d81b03198116600081815260048452604081208054600180820183558284529583200180546001600160a01b0319166001600160a01b038c1617905591905254909250610aa891906113f1565b6001600160d81b031990911660009081526005602090815260408083206001600160a01b0389168452909152902055600101610a2e565b506000836001600160a01b0316635924be706040518163ffffffff1660e01b8152600401600060405180830381865afa158015610b20573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b489190810190611545565b9050610b5684826001610f6f565b50505050565b610b65816104f4565b610b8457806040516322cd55c560e01b81526004016102ab9190611254565b6000816001600160a01b0316635924be706040518163ffffffff1660e01b8152600401600060405180830381865afa158015610bc4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bec9190810190611545565b9050610bfa82826000610f6f565b6001600160a01b03821660009081526008602052604081205460078054919291610c26906001906113f1565b81548110610c3657610c366113db565b600091825260209091200154600780546001600160a01b039092169250829184908110610c6557610c656113db565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506007805480610ca457610ca4611602565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b038381168352600890915260408083208590559086168252812055610b5684611048565b60015460005b81811015610dc65760006002600060018481548110610d1c57610d1c6113db565b6000918252602080832060068084049091015492066005026101000a90910460d81b6001600160d81b03191683528201929092526040908101909120549051631195ecdb60e21b81526001600160a01b0390911691508190634657b36c90610d88908790600401611254565b600060405180830381600087803b158015610da257600080fd5b505af1158015610db6573d6000803e3d6000fd5b5050505081600101915050610cfb565b5060075460005b81811015610b5657600060078281548110610dea57610dea6113db565b600091825260209091200154604051631195ecdb60e21b81526001600160a01b0390911691508190634657b36c90610e26908890600401611254565b600060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b5050505081600101915050610dcd565b6001600160d81b03198116600090815260046020908152604080832080548251818502810185019093528083529192909190830182828015610ecf57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610eb1575b505083519394506000925050505b81811015610b5657828181518110610ef757610ef76113db565b60200260200101516001600160a01b0316639459b8756040518163ffffffff1660e01b81526004016000604051808303816000875af1158015610f3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f6691908101906114a7565b50600101610edd565b815160005b81811015611041576000848281518110610f9057610f906113db565b60209081029190910181015180516001600160d81b031990811660009081526006845260408082206001600160a01b038c1680845290865281832085870180516001600160e01b0319908116865291885293839020805460ff19168c1515908117909155865194518451921682529681019690965293955092939116917ff3cdd20c5574ce87c347ea71e37b8fa7a095894be4b7f2bb1533e8d2342965f1910160405180910390a350600101610f74565b5050505050565b6000816001600160a01b0316639459b8756040518163ffffffff1660e01b81526004016000604051808303816000875af115801561108a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110b291908101906114a7565b805190915060005b81811015610b565760008382815181106110d6576110d66113db565b6020908102919091018101516001600160d81b031981166000908152600483526040808220600585528183206001600160a01b038b1684529094528120548354929450918390611128906001906113f1565b81548110611138576111386113db565b9060005260206000200160009054906101000a90046001600160a01b031690508083838154811061116b5761116b6113db565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550828054806111a9576111a9611602565b60008281526020808220600019908401810180546001600160a01b03191690559092019092556001600160d81b03199590951681526005855260408082206001600160a01b039384168352909552848120929092558716815291822091909155506001016110ba565b6001600160d81b03198116811461057b57600080fd5b6000806040838503121561123b57600080fd5b823561124681611212565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461057b57600080fd5b6000806040838503121561129057600080fd5b823561129b81611212565b915060208301356112ab81611268565b809150509250929050565b6000602082840312156112c857600080fd5b5035919050565b6000602082840312156112e157600080fd5b81356112ec81611268565b9392505050565b6001600160d81b031991909116815260200190565b60006020828403121561131a57600080fd5b81356112ec81611212565b6000806040838503121561133857600080fd5b82356006811061129b57600080fd5b6001600160e01b03198116811461057b57600080fd5b60008060006060848603121561137257600080fd5b833561137d81611212565b9250602084013561138d81611268565b9150604084013561139d81611347565b809150509250925092565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156113d057600080fd5b81516112ec81611212565b634e487b7160e01b600052603260045260246000fd5b60008282101561141157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561144e5761144e611416565b60405290565b604051601f8201601f191681016001600160401b038111828210171561147c5761147c611416565b604052919050565b60006001600160401b0382111561149d5761149d611416565b5060051b60200190565b600060208083850312156114ba57600080fd5b82516001600160401b038111156114d057600080fd5b8301601f810185136114e157600080fd5b80516114f46114ef82611484565b611454565b81815260059190911b8201830190838101908783111561151357600080fd5b928401925b8284101561153a57835161152b81611212565b82529284019290840190611518565b979650505050505050565b6000602080838503121561155857600080fd5b82516001600160401b0381111561156e57600080fd5b8301601f8101851361157f57600080fd5b805161158d6114ef82611484565b81815260069190911b820183019083810190878311156115ac57600080fd5b928401925b8284101561153a57604084890312156115ca5760008081fd5b6115d261142c565b84516115dd81611212565b8152848601516115ec81611347565b81870152825260409390930192908401906115b1565b634e487b7160e01b600052603160045260246000fdfea26469706673582212200a72e84c92701fcd62e8d96b0d5f7fc8892dd4d1536ec088a995235488c064ab64736f6c634300080f0033a2646970667358221220a5451e4d6b289974af42754c26969b795e3173e3d3b1833aa7639719d276010864736f6c634300080f0033";

type KernelDeployConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: KernelDeployConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class KernelDeploy__factory extends ContractFactory {
  constructor(...args: KernelDeployConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<KernelDeploy> {
    return super.deploy(overrides || {}) as Promise<KernelDeploy>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KernelDeploy {
    return super.attach(address) as KernelDeploy;
  }
  override connect(signer: Signer): KernelDeploy__factory {
    return super.connect(signer) as KernelDeploy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KernelDeployInterface {
    return new utils.Interface(_abi) as KernelDeployInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KernelDeploy {
    return new Contract(address, _abi, signerOrProvider) as KernelDeploy;
  }
}
