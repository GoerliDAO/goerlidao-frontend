import { useQueries } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import {
  AddressMap,
  GDAO_ADDRESSES,
  SGDAO_ADDRESSES,
  XGDAO_ADDRESSES,
  // FUSE_POOL_6_ADDRESSES,
  // FUSE_POOL_18_ADDRESSES,
  // FUSE_POOL_36_ADDRESSES,
  // GOHM_ADDRESSES,
  // GOHM_TOKEMAK_ADDRESSES,
  // OHM_ADDRESSES,
  // SOHM_ADDRESSES,
  // V1_OHM_ADDRESSES,
  // V1_SOHM_ADDRESSES,
  // WSOHM_ADDRESSES,
} from "src/constants/addresses";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import { GDAOQueries, SGDAOQueries, XGDAOQueries } from "src/typechain_goerli/react-query-hooks";
import { useAccount } from "wagmi";

export const balanceQueryKey = (address?: string, tokenAddressMap?: AddressMap, networkId?: NetworkId) =>
  ["useBalance", address, tokenAddressMap, networkId].filter(nonNullable);

/**
 * Returns a balance.
 * @param addressMap Address map of the token you want the balance of.
 */
// export const useBalance = <TAddressMap extends AddressMap = AddressMap>(tokenAddressMap: TAddressMap) => {
//   const { address = "" } = useAccount();
//   const contracts = useMultipleTokenContracts(tokenAddressMap);
//   console.log("contracts: ", contracts);
//   const gdaoContract = GDAO_TOKEN.getEthersContract(NetworkId.TESTNET_GOERLI);
//   const sgdaoContract = SGDAO_TOKEN.getEthersContract(NetworkId.TESTNET_GOERLI);
//   const xgdaoContract = XGDAO_TOKEN.getEthersContract(NetworkId.TESTNET_GOERLI);
//   const newContracts = [gdaoContract, sgdaoContract, xgdaoContract];

//   const networkIds = Object.keys(tokenAddressMap).map(Number);

//   const results = useQueries({
//     queries: networkIds.map(networkId => ({
//       queryKey: [balanceQueryKey(address, tokenAddressMap, networkId)],
//       enabled: !!address,

//       queryFn: async () => {
//         const contract = contracts[networkId as NetworkId];
//         console.debug("Refetching balance");
//         const [balance, decimals] = await Promise.all([contract.balanceOf(address), contract.decimals()]);

//         return new DecimalBigNumber(balance, decimals);
//       },
//     })),
//   });

//   return networkIds.reduce(
//     (prev, networkId, index) => Object.assign(prev, { [networkId]: results[index] }),
//     {} as Record<keyof typeof tokenAddressMap, UseQueryResult<DecimalBigNumber, Error>>,
//   );

// };

export const useBalance = <TAddressMap extends AddressMap = AddressMap>(tokenAddressMap: TAddressMap) => {
  const { address = "" } = useAccount();
  // const contracts = useMultipleTokenContracts(tokenAddressMap);
  const gdaoContract = new GDAOQueries(GDAO_ADDRESSES[NetworkId.TESTNET_GOERLI]);
  const sGdaoContract = new SGDAOQueries(SGDAO_ADDRESSES[NetworkId.TESTNET_GOERLI]);
  const xGdaoContract = new XGDAOQueries(XGDAO_ADDRESSES[NetworkId.TESTNET_GOERLI]);
  const contracts = [gdaoContract, sGdaoContract, xGdaoContract];
  const gdaoBal = gdaoContract.useBalanceOf(address);
  const sgdaoBal = sGdaoContract.useBalanceOf(address);
  const xgdaoBal = xGdaoContract.useBalanceOf(address);

  const networkIds = Object.keys(tokenAddressMap).map(Number);

  const results = useQueries({
    queries: networkIds.map(networkId => ({
      queryKey: [balanceQueryKey(address, tokenAddressMap, networkId)],
      enabled: !!address,

      queryFn: async () => {
        const contract = contracts[networkId as NetworkId];
        console.debug("Refetching balance");
        // const [balance, decimals] = await Promise.all([contract.useBalanceOf(address), contract.useDecimals()]);
        const { data: balance } = await contract.useBalanceOf(address);
        const { data: decimals } = await contract.useDecimals();

        return new DecimalBigNumber(balance, decimals);
      },
    })),
  });

  return gdaoBal;

  // return networkIds.reduce(
  //   (prev, networkId, index) => Object.assign(prev, { [networkId]: results[index] }),
  //   {} as Record<keyof typeof tokenAddressMap, UseQueryResult<DecimalBigNumber, Error>>,
  // );
};

/**
 * Returns gOHM balance in Fuse
 */
// export const fuseBalanceQueryKey = (address: string) => ["useFuseBalance", address].filter(nonNullable);
// export const useFuseBalance = () => {
//   const { address = "" } = useAccount();
//   const pool6Contract = useStaticFuseContract(FUSE_POOL_6_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
//   const pool18Contract = useStaticFuseContract(FUSE_POOL_18_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
//   const pool36Contract = useStaticFuseContract(FUSE_POOL_36_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);

//   const query = useQuery<DecimalBigNumber, Error>(
//     [fuseBalanceQueryKey(address)],
//     async () => {
//       queryAssertion(address, fuseBalanceQueryKey(address));

//       const results = await Promise.all(
//         [pool6Contract, pool18Contract, pool36Contract].map(async contract => {
//           const balance = await contract.callStatic.balanceOfUnderlying(address);

//           return new DecimalBigNumber(balance, 18);
//         }),
//       );

//       return results.reduce((prev, bal) => prev.add(bal), new DecimalBigNumber("0", 9));
//     },
//     { enabled: !!address },
//   );

//   return { [NetworkId.MAINNET]: query } as Record<NetworkId.MAINNET, typeof query>;
// };

export const useGdaoBalance = () => useBalance(GDAO_ADDRESSES);
export const useSgdaoBalance = () => useBalance(SGDAO_ADDRESSES);
export const useXgdaoBalance = () => useBalance(XGDAO_ADDRESSES);
// export const useWsohmBalance = () => useBalance(WSOHM_ADDRESSES);
// export const useV1OhmBalance = () => useBalance(V1_OHM_ADDRESSES);
// export const useV1SohmBalance = () => useBalance(V1_SOHM_ADDRESSES);
// export const useGohmTokemakBalance = () => useBalance(GOHM_TOKEMAK_ADDRESSES);
