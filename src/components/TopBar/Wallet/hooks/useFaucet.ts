import { useMutation } from "@tanstack/react-query";
import { ContractReceipt } from "ethers";
import toast from "react-hot-toast";
import { FAUCET_ADDRESSES } from "src/constants/local/addresses";
import { useDynamicFaucetContract } from "src/hooks/useContract";
import { EthersError } from "src/lib/EthersTypes";

export const useFaucet = () => {
  const contract = useDynamicFaucetContract(FAUCET_ADDRESSES, true);

  return useMutation<ContractReceipt, EthersError, string>(
    async token_ => {
      if (!contract)
        throw new Error(`Faucet is not supported on this network. Please switch to Goerli Testnet to use the faucet`);

      let transaction;
      if (token_ === "OHM V1") {
        transaction = await contract.mintOHM(0);
      } else if (token_ === "OHM V2") {
        transaction = await contract.mintOHM(1);
      } else if (token_ === "sOHM V1") {
        transaction = await contract.mintSOHM(0);
      } else if (token_ === "sOHM V2") {
        transaction = await contract.mintSOHM(1);
      } else if (token_ === "wsOHM") {
        transaction = await contract.mintWSOHM();
      } else if (token_ === "gOHM") {
        transaction = await contract.mintGOHM();
      } else if (token_ === "DAI") {
        transaction = await contract.mintDAI();
      } else if (token_ === "ETH") {
        transaction = await contract.drip("ETH");
      } else if (token_ === "MOHM") {
        transaction = await contract.drip(1, { gasLimit: 1000000 });
      } else if (token_ === "GDAO") {
        transaction = await contract.dripTestAmounts({ gasLimit: 5000000 });
      } else {
        throw new Error(`Invalid token`);
      }

      return transaction.wait();
    },
    {
      onError: error => {
        toast.error("error" in error ? error.error.message : error.message);
      },
      onSuccess: async () => {
        toast.success("Successfully requested tokens from Faucet");
      },
    },
  );
};
