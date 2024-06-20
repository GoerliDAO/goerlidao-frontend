import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import { G_DISTRIBUTOR_CONTRACT } from "src/constants/contracts";
import { parseBigNumber } from "src/helpers";

export const useStakingRebaseRate = () => {
  return useQuery<number, Error>(["useStakingRebaseRate"], async () => {
    // const distributorContract = DISTRIBUTOR_CONTRACT.getEthersContract(NetworkId.MAINNET);
    const distributorContract = G_DISTRIBUTOR_CONTRACT.getEthersContract(NetworkId.TESTNET_GOERLI);
    const rewardRate = await distributorContract.rewardRate();

    return parseBigNumber(rewardRate, 9);
  });
};
