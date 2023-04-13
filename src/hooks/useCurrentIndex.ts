import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import { STAKING_CONTRACT } from "src/constants/contracts";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
// import { useStaticStakingContract } from "src/hooks/useContract";

export const currentIndexQueryKey = () => ["useCurrentIndex"];

export const useCurrentIndex = () => {
  const stakingContract = STAKING_CONTRACT.getEthersContract(NetworkId.TESTNET_SEPOLIA | NetworkId.TESTNET_GOERLI);
  // const stakingContract = useStaticStakingContract(STAKING_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
  // const stakingContract = useStaticStakingContract(
  //   STAKING_ADDRESSES[NetworkId.TESTNET_SEPOLIA],
  //   NetworkId.TESTNET_SEPOLIA,
  // );

  return useQuery<DecimalBigNumber, Error>([currentIndexQueryKey()], async () => {
    const index = await stakingContract.index();

    return new DecimalBigNumber(index, 9);
  });
};
