import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { NetworkId } from "src/constants";
// import { STAKING_ADDRESSES } from "src/constants/addresses";
import { STAKING_CONTRACT } from "src/constants/contracts";
import { parseBigNumber } from "src/helpers";
// import { useStaticStakingContract } from "src/hooks/useContract";

export const useNextRebaseDate = () => {
  const { data: secondsToRebase, isSuccess } = useNextRebase();
  const parsedSeconds = parseBigNumber(secondsToRebase || BigNumber.from("0"), 0);
  const dateTime = new Date(Date.now() + parsedSeconds * 1000);
  return {
    data: isSuccess ? dateTime : undefined,
  };
};

export const useNextRebase = () => {
  // const contract = useStaticStakingContract(STAKING_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
  const contract = STAKING_CONTRACT.getEthersContract(NetworkId.TESTNET_SEPOLIA | NetworkId.TESTNET_GOERLI);

  return useQuery<BigNumber, Error>(["secondsToNextRebase"], async () => {
    const secondsToRebase = await contract.secondsToNextEpoch();

    return secondsToRebase;
  });
};
