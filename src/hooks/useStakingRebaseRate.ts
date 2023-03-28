import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import { parseBigNumber } from "src/helpers";
// import { DISTRIBUTOR_CONTRACT } from "src/constants/contracts";
import { DISTRIBUTOR_CONTRACT } from "src/local/constants/contracts";

export const useStakingRebaseRate = () => {
  return useQuery<number, Error>(["useStakingRebaseRate"], async () => {
    // const distributorContract = DISTRIBUTOR_CONTRACT.getEthersContract(NetworkId.MAINNET);
    const distributorContract = DISTRIBUTOR_CONTRACT.getEthersContract(NetworkId.LOCALHOST);
    const rewardRate = await distributorContract.rewardRate();

    return parseBigNumber(rewardRate, 9);
  });
};
