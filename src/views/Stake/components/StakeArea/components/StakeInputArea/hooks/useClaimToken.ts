import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContractReceipt } from "ethers";
import toast from "react-hot-toast";
import { GDAO_ADDRESSES, SGDAO_ADDRESSES, XGDAO_ADDRESSES } from "src/constants/addresses";
import { STAKING_CONTRACT } from "src/constants/contracts";
import { trackGAEvent, trackGtagEvent } from "src/helpers/analytics/trackGAEvent";
import { balanceQueryKey, useBalance } from "src/hooks/useBalance";
// import { useDynamicStakingContract } from "src/hooks/useContract";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { warmupQueryKey } from "src/hooks/useWarmupInfo";
import { EthersError } from "src/lib/EthersTypes";
import { useAccount } from "wagmi";

/**
 * when warmup is on, useClaimToken claims the user's stake that has been warmed up
 */
export const useClaimToken = () => {
  const client = useQueryClient();
  const { address = "" } = useAccount();
  const networks = useTestableNetworks();
  const balance = useBalance(GDAO_ADDRESSES)[networks.MAINNET].data;
  const contract = STAKING_CONTRACT.getEthersContract(networks.MAINNET);

  return useMutation<ContractReceipt, EthersError, { toToken: string }>({
    onMutate: async ({ toToken }) => {
      if (!balance) throw new Error(`Please refresh your page and try again`);

      if (!contract) throw new Error(`Please switch to the Ethereum network to claim your warmup`);

      if (!address) throw new Error(`Please refresh your page and try again`);

      const shouldRebase = toToken === "sGDAO";

      const transaction = await contract.claim(address, shouldRebase);
      return transaction.wait();
    },
    onError: error => {
      toast.error("error" in error ? error.error.message : error.message);
    },
    onSuccess: async (tx, data) => {
      trackGAEvent({
        category: "Staking",
        action: "claim",
        label: `Claim to ${data.toToken}`,
        // value: new DecimalBigNumber(data.amount, 9).toApproxNumber(),
        dimension1: tx.transactionHash,
        dimension2: address,
      });

      trackGtagEvent("Claim Test 2", {
        event_category: "Claiming",
        // value: new DecimalBigNumber(data.amount, 9).toApproxNumber(),
        address: address.slice(2),
        txHash: tx.transactionHash.slice(2),
        token: data.toToken,
      });

      const keysToRefetch = [
        balanceQueryKey(address, data.toToken === "sGDAO" ? SGDAO_ADDRESSES : XGDAO_ADDRESSES, networks.MAINNET),
        warmupQueryKey(address, networks.MAINNET),
      ];

      const promises = keysToRefetch.map(key => client.refetchQueries([key], { type: "active" }));

      await Promise.all(promises);

      toast(`Successfully claimed warmed-up balance`);
    },
  });
};
