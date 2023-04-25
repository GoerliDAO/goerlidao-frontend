import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import { STAKING_ADDRESSES } from "src/constants/addresses";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { useStaticGoerliStakingContract } from "src/hooks/useContract";

export const currentIndexQueryKey = () => ["useCurrentIndex"];

export const useCurrentIndex = () => {
  // const contract = useStaticStakingContract(STAKING_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
  const stakingContract = useStaticGoerliStakingContract(
    STAKING_ADDRESSES[NetworkId.TESTNET_GOERLI],
    NetworkId.TESTNET_GOERLI,
  );

  return useQuery<DecimalBigNumber, Error>([currentIndexQueryKey()], async () => {
    const index = await stakingContract.index();

    return new DecimalBigNumber(index, 9);
  });
};
