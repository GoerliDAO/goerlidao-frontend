/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployPrice, DeployPriceInterface } from "../../DeployPrice.s.sol/DeployPrice";

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
        internalType: "contract GoerliDaoPrice",
        name: "price",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b50612e888061002d6000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80633a768463146200004b578063c04062261462000091578063f8ccbf47146200009b575b600080fd5b62000067737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b62000067620000ba565b600054620000a99060ff1681565b604051901515815260200162000088565b6040517f60f9bb1100000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2e7365637265740000000000000000000000000000000000000000000000000060448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb11906064016000604051808303816000875af115801562000158573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052620001a09190810190620006d9565b6040517f6229498b000000000000000000000000000000000000000000000000000000008152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d90636229498b90620001fa9085908590600401620007b0565b6020604051808303816000875af11580156200021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000240919062000811565b6040517fce817d4700000000000000000000000000000000000000000000000000000000815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b158015620002aa57600080fd5b505af1158015620002bf573d6000803e3d6000fd5b50506040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4b45524e454c0000000000000000000000000000000000000000000000000000604482015260009250737109709ecfa91a80626ff3989d68f67f5b1dd12d915063350d56bf906064016020604051808303816000875af11580156200035f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200038591906200082b565b6040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4d4f434b5f5052494345000000000000000000000000000000000000000000006044820152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af115801562000424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200044a91906200082b565b6040517f350d56bf00000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4d4f434b5f524553455256450000000000000000000000000000000000000000604482015290915081906201518090600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063350d56bf906064016020604051808303816000875af1158015620004f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200051691906200082b565b604051909150819062015180906170809062278d0090679077bfd86fd10000908a9081908a908a9089908990899089908990620005539062000669565b73ffffffffffffffffffffffffffffffffffffffff9889168152968816602088015265ffffffffffff95861660408801529690931660608601529083166080850152821660a08401521660c082015260e081019190915261010001604051809103906000f080158015620005cb573d6000803e3d6000fd5b509d507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200064057600080fd5b505af115801562000655573d6000803e3d6000fd5b505050505050505050505050505050505090565b6125e8806200086b83390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b83811015620006c3578181015183820152602001620006a9565b83811115620006d3576000848401525b50505050565b600060208284031215620006ec57600080fd5b815167ffffffffffffffff808211156200070557600080fd5b818401915084601f8301126200071a57600080fd5b8151818111156200072f576200072f62000677565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171562000778576200077862000677565b816040528281528760208487010111156200079257600080fd5b620007a5836020830160208801620006a6565b979650505050505050565b6040815260008351806040840152620007d1816060850160208801620006a6565b63ffffffff93909316602083015250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601606001919050565b6000602082840312156200082457600080fd5b5051919050565b6000602082840312156200083e57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146200086357600080fd5b939250505056fe60a06040523480156200001157600080fd5b50604051620025e8380380620025e883398101604081905262000034916200049d565b600080546001600160a01b0319166001600160a01b038a1617905565ffffffffffff821615806200007757506200006c838362000559565b65ffffffffffff1615155b15620000965760405163bd19ab3f60e01b815260040160405180910390fd5b600180546001600160a01b038981166001600160d01b031990921691909117600160a01b65ffffffffffff8a160217918290556040805163313ce56760e01b815290516000939092169163313ce567916004808201926020929091908290030181865afa1580156200010c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000132919062000581565b600280546001600160a01b038981166001600160d01b031990921691909117600160a01b65ffffffffffff8a160217918290556040805163313ce56760e01b81529051939450600093929091169163313ce567916004808201926020929091908290030181865afa158015620001ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001d2919062000581565b9050600082620001e4836012620005c3565b620001f09190620005eb565b60ff1690506026811115620002185760405163bd19ab3f60e01b815260040160405180910390fd5b6200022581600a62000710565b6080526005805465ffffffffffff878116600160701b0265ffffffffffff60701b19918a16680100000000000000000291909116600160401b600160a01b0319909216919091171790556200027b86866200071e565b6005805463ffffffff60201b191664010000000063ffffffff938416810291909117918290559004166001600160401b03811115620002be57620002be62000746565b604051908082528060200260200182016040528015620002e8578160200160208202803683370190505b508051620002ff9160049160209091019062000401565b50600684905560405165ffffffffffff861681527fbf17d91c3fb2f4166d1548087583c97a6cb790502bbcdce123d872c290f582029060200160405180910390a160405165ffffffffffff871681527fccdeec192bc388cfc3e642b4a812d9cab15e3728046b2cb7b359702510a918c59060200160405180910390a16040805165ffffffffffff808c168252891660208201527f7afa9e43491ad08e1044e0aef56f3033b1e4043e9ee7795632c5877ba35a7928910160405180910390a16040518481527f429369433de996bd22c83edbc227a7480e136a8ac3bbf0138a908bc98f7b4b639060200160405180910390a150505050505050505050506200075c565b8280548282559060005260206000209081019282156200043f579160200282015b828111156200043f57825182559160200191906001019062000422565b506200044d92915062000451565b5090565b5b808211156200044d576000815560010162000452565b6001600160a01b03811681146200047e57600080fd5b50565b805165ffffffffffff811681146200049857600080fd5b919050565b600080600080600080600080610100898b031215620004bb57600080fd5b8851620004c88162000468565b60208a0151909850620004db8162000468565b9650620004eb60408a0162000481565b95506060890151620004fd8162000468565b94506200050d60808a0162000481565b93506200051d60a08a0162000481565b92506200052d60c08a0162000481565b915060e089015190509295985092959890939650565b634e487b7160e01b600052601260045260246000fd5b600065ffffffffffff8084168062000575576200057562000543565b92169190910692915050565b6000602082840312156200059457600080fd5b815160ff81168114620005a657600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff03821115620005e357620005e3620005ad565b019392505050565b600060ff821660ff841680821015620006085762000608620005ad565b90039392505050565b600181815b8085111562000652578160001904821115620006365762000636620005ad565b808516156200064457918102915b93841c939080029062000616565b509250929050565b6000826200066b575060016200070a565b816200067a575060006200070a565b81600181146200069357600281146200069e57620006be565b60019150506200070a565b60ff841115620006b257620006b2620005ad565b50506001821b6200070a565b5060208310610133831016604e8410600b8410161715620006e3575081810a6200070a565b620006ef838362000611565b8060001904821115620007065762000706620005ad565b0290505b92915050565b6000620005a683836200065a565b600065ffffffffffff808416806200073a576200073a62000543565b92169190910492915050565b634e487b7160e01b600052604160045260246000fd5b608051611e7062000778600039600061197b0152611e706000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638a15733711610104578063d09f7245116100a2578063d8cf24fd11610071578063d8cf24fd146104b4578063ea643914146104bc578063eb91d37e146104c4578063ffa1ad74146104cc57600080fd5b8063d09f724514610416578063d266f5d014610440578063d4aae0c41461046a578063d532ade41461048a57600080fd5b8063b5e71305116100de578063b5e71305146103dd578063bd01bb32146103e5578063be8ef3d3146103ed578063c05b695c1461040d57600080fd5b80638a15733714610393578063902a35b9146103a6578063aa321fe2146103b957600080fd5b806357ee9383116101715780636d2c28081161014b5780636d2c28081461033a5780637321f100146103435780637d4dce761461037857806386db7df01461038b57600080fd5b806357ee9383146102ca5780636707853d146102dd57806367eab0441461032257600080fd5b8063252c09d7116101ad578063252c09d7146102575780632e23fc3f14610278578063313ce5671461029d5780634657b36c146102b757600080fd5b80630fbe3476146101d4578063158ef93e146101e95780631ae7ec2e14610229575b600080fd5b6101e76101e2366004611a32565b6104e0565b005b600554610214907a010000000000000000000000000000000000000000000000000000900460ff1681565b60405190151581526020015b60405180910390f35b6040517f50524943450000000000000000000000000000000000000000000000000000008152602001610220565b61026a610265366004611a65565b6106bd565b604051908152602001610220565b6005546102889063ffffffff1681565b60405163ffffffff9091168152602001610220565b6102a5601281565b60405160ff9091168152602001610220565b6101e76102c5366004611a7e565b6106de565b6101e76102d8366004611a65565b610778565b6001546102fd9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610220565b60055461028890640100000000900463ffffffff1681565b61026a60065481565b6005546103619068010000000000000000900465ffffffffffff1681565b60405165ffffffffffff9091168152602001610220565b6101e7610386366004611abb565b6108d6565b6101e7610ba9565b6101e76103a1366004611abb565b610ea2565b6101e76103b4366004611b05565b61116d565b600554610361906e010000000000000000000000000000900465ffffffffffff1681565b61026a6114a4565b61026a61151f565b6002546102fd9073ffffffffffffffffffffffffffffffffffffffff1681565b61026a60035481565b6001546103619074010000000000000000000000000000000000000000900465ffffffffffff1681565b6005546103619074010000000000000000000000000000000000000000900465ffffffffffff1681565b6000546102fd9073ffffffffffffffffffffffffffffffffffffffff1681565b6002546103619074010000000000000000000000000000000000000000900465ffffffffffff1681565b61026a611545565b6101e7611616565b61026a61166b565b604080516001808252602082015201610220565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa1580156105a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cb9190611bf3565b610608576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b6001805465ffffffffffff808516740100000000000000000000000000000000000000009081027fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff938416179093556002805491851690930291161790556040517f7afa9e43491ad08e1044e0aef56f3033b1e4043e9ee7795632c5877ba35a7928906106ac908490849065ffffffffffff92831681529116602082015260400190565b60405180910390a15050565b905090565b600481815481106106cd57600080fd5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff163314610731576040517f14fa403c0000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa15801561083f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108639190611bf3565b61089b576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b60068190556040518181527f429369433de996bd22c83edbc227a7480e136a8ac3bbf0138a908bc98f7b4b639060200160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa15801561099d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c19190611bf3565b6109f9576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b65ffffffffffff81161580610a3c5750600554610a319082906e010000000000000000000000000000900465ffffffffffff16611c44565b65ffffffffffff1615155b15610a73576040517fbd19ab3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600554600090610a9e9083906e010000000000000000000000000000900465ffffffffffff16611c98565b65ffffffffffff1690508067ffffffffffffffff811115610ac157610ac1611ad6565b604051908082528060200260200182016040528015610aea578160200160208202803683370190505b508051610aff916004916020909101906119b7565b506005805460006003557fffffffffff00000000000000ffffffffffff0000000000000000000000000000166801000000000000000065ffffffffffff85169081027fffffffffffffffffffffffffffffffffffffffffffffffff00000000ffffffff169190911764010000000063ffffffff851602179091556040519081527fccdeec192bc388cfc3e642b4a812d9cab15e3728046b2cb7b359702510a918c5906020016106ac565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa158015610c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c949190611bf3565b610ccc576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b6005547a010000000000000000000000000000000000000000000000000000900460ff16610d26576040517fa985d3f500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005546004805463ffffffff6401000000008404811693600093929116908110610d5257610d52611cbd565b906000526020600020015490506000610d6961166b565b90508181600354610d7a9190611cec565b610d849190611d04565b60035560055460048054839263ffffffff16908110610da557610da5611cbd565b6000918252602090912001556005805465ffffffffffff421674010000000000000000000000000000000000000000027fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff821681179092558491610e159163ffffffff9182169116176001611d1b565b610e1f9190611d43565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff929092169190911790557fa62f55aa6e9680aff071df0c621257f66bc5ba0dce63725989b3e5e42f24c6294282610e7f6114a4565b6040805193845260208401929092529082015260600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa158015610f69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8d9190611bf3565b610fc5576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b65ffffffffffff811615806110015750600554610ff69068010000000000000000900465ffffffffffff1682611c44565b65ffffffffffff1615155b15611038576040517fbd19ab3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055460009061105c9068010000000000000000900465ffffffffffff1683611c98565b65ffffffffffff1690508067ffffffffffffffff81111561107f5761107f611ad6565b6040519080825280602002602001820160405280156110a8578160200160208202803683370190505b5080516110bd916004916020909101906119b7565b506005805460006003557fffffffffff00000000000000000000000000ffffffffffff0000000000000000166e01000000000000000000000000000065ffffffffffff85169081027fffffffffffffffffffffffffffffffffffffffffffffffff00000000ffffffff169190911764010000000063ffffffff851602179091556040519081527fbf17d91c3fb2f4166d1548087583c97a6cb790502bbcdce123d872c290f58202906020016106ac565b60005473ffffffffffffffffffffffffffffffffffffffff1663f166d9eb7f50524943450000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b811682527fffffffffff0000000000000000000000000000000000000000000000000000009290921660048201523360248201526000359091166044820152606401602060405180830381865afa158015611234573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112589190611bf3565b611290576040517f11bf00c90000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b6005547a010000000000000000000000000000000000000000000000000000900460ff16156112eb576040517fd5a5ed8900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045482518114158061130d57504265ffffffffffff168265ffffffffffff16115b15611344576040517fbd19ab3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805b8281101561140b5784818151811061136257611362611cbd565b60200260200101516000036113a3576040517fbd19ab3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8481815181106113b5576113b5611cbd565b6020026020010151826113c89190611cec565b91508481815181106113dc576113dc611cbd565b6020026020010151600482815481106113f7576113f7611cbd565b600091825260209091200155600101611348565b5060035550600580547fffffffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffff65ffffffffffff9093167401000000000000000000000000000000000000000002929092167fffffffffff00000000000000ffffffffffffffffffffffffffffffffffffffff909216919091177a01000000000000000000000000000000000000000000000000000017905550565b6005546000907a010000000000000000000000000000000000000000000000000000900460ff16611501576040517fa985d3f500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005546003546106b891640100000000900463ffffffff1690611d5a565b60008061152a6114a4565b9050600654811161153d5760065461153f565b805b91505090565b6005546000907a010000000000000000000000000000000000000000000000000000900460ff166115a2576040517fa985d3f500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055460009063ffffffff16156115cd576005546115c89060019063ffffffff16611d6e565b6115ea565b6005546115ea90600190640100000000900463ffffffff16611d6e565b905060048163ffffffff168154811061160557611605611cbd565b906000526020600020015491505090565b60005473ffffffffffffffffffffffffffffffffffffffff163314611669576040517f14fa403c0000000000000000000000000000000000000000000000000000000081523360048201526024016105ff565b565b6005546000907a010000000000000000000000000000000000000000000000000000900460ff166116c8576040517fa985d3f500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561173e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117629190611dad565b9450945050935093506000831315806117a657506001546117a39074010000000000000000000000000000000000000000900465ffffffffffff1642611d04565b82105b806117c957508369ffffffffffffffffffff168169ffffffffffffffffffff1614155b1561181c576001546040517f5ee314b600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024016105ff565b8295506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561188e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b29190611dad565b93985095509193509150506000811315806118f857506002546118f59074010000000000000000000000000000000000000000900465ffffffffffff1642611d04565b83105b8061191b57508469ffffffffffffffffffff168269ffffffffffffffffffff1614155b1561196e576002546040517f5ee314b600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911660048201526024016105ff565b80955050505050506000817f0000000000000000000000000000000000000000000000000000000000000000846119a59190611dfd565b6119af9190611d5a565b949350505050565b8280548282559060005260206000209081019282156119f2579160200282015b828111156119f25782518255916020019190600101906119d7565b506119fe929150611a02565b5090565b5b808211156119fe5760008155600101611a03565b803565ffffffffffff81168114611a2d57600080fd5b919050565b60008060408385031215611a4557600080fd5b611a4e83611a17565b9150611a5c60208401611a17565b90509250929050565b600060208284031215611a7757600080fd5b5035919050565b600060208284031215611a9057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114611ab457600080fd5b9392505050565b600060208284031215611acd57600080fd5b611ab482611a17565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611b1857600080fd5b823567ffffffffffffffff80821115611b3057600080fd5b818501915085601f830112611b4457600080fd5b8135602082821115611b5857611b58611ad6565b8160051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108682111715611b9b57611b9b611ad6565b604052928352818301935084810182019289841115611bb957600080fd5b948201945b83861015611bd757853585529482019493820193611bbe565b9650611be69050878201611a17565b9450505050509250929050565b600060208284031215611c0557600080fd5b81518015158114611ab457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600065ffffffffffff80841680611c5d57611c5d611c15565b92169190910692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600065ffffffffffff80841680611cb157611cb1611c15565b92169190910492915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008219821115611cff57611cff611c69565b500190565b600082821015611d1657611d16611c69565b500390565b600063ffffffff808316818516808303821115611d3a57611d3a611c69565b01949350505050565b600063ffffffff80841680611c5d57611c5d611c15565b600082611d6957611d69611c15565b500490565b600063ffffffff83811690831681811015611d8b57611d8b611c69565b039392505050565b805169ffffffffffffffffffff81168114611a2d57600080fd5b600080600080600060a08688031215611dc557600080fd5b611dce86611d93565b9450602086015193506040860151925060608601519150611df160808701611d93565b90509295509295909350565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611e3557611e35611c69565b50029056fea2646970667358221220936238efafaf8e1cd04801749abdf324ba8ce9abfc757e3dea1a32796f67cffb64736f6c634300080f0033a26469706673582212201a931460eb388a993123a7fcdcaae39336b296f68c9e07354a24f722bac18cdc64736f6c634300080f0033";

type DeployPriceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DeployPriceConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class DeployPrice__factory extends ContractFactory {
  constructor(...args: DeployPriceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<DeployPrice> {
    return super.deploy(overrides || {}) as Promise<DeployPrice>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployPrice {
    return super.attach(address) as DeployPrice;
  }
  override connect(signer: Signer): DeployPrice__factory {
    return super.connect(signer) as DeployPrice__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployPriceInterface {
    return new utils.Interface(_abi) as DeployPriceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DeployPrice {
    return new Contract(address, _abi, signerOrProvider) as DeployPrice;
  }
}
