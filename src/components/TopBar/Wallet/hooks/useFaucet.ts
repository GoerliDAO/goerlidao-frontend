import { useMutation } from "@tanstack/react-query";
import { ContractReceipt } from "ethers";
import toast from "react-hot-toast";
import { DEV_FAUCET } from "src/constants/addresses";
import { FAUCET } from "src/constants/contracts";
import { useDynamicFaucetContract } from "src/hooks/useContract";
import { EthersError } from "src/lib/EthersTypes";
import { NetworkId } from "src/networkDetails";

export const useFaucet = () => {
  const contract = useDynamicFaucetContract(DEV_FAUCET, true);
  const newContract = FAUCET.getEthersContract(NetworkId.LOCALHOST);

  return useMutation<ContractReceipt, EthersError, string>(
    async token_ => {
      if (!contract)
        throw new Error(`Faucet is not supported on this network. Please switch to Goerli Testnet to use the faucet`);

      let transaction;
      if (token_ === "") {
        transaction = await contract.mintOHM(0);
        // } else if (token_ === "OHM V2") {
        //   transaction = await contract.mintOHM(1);
        // } else if (token_ === "sOHM V1") {
        //   transaction = await contract.mintSOHM(0);
        // } else if (token_ === "sOHM V2") {
        //   transaction = await contract.mintSOHM(1);
        // } else if (token_ === "wsOHM") {
        //   transaction = await contract.mintWSOHM();
        // } else if (token_ === "gOHM") {
        //   transaction = await contract.mintGOHM();
      } else if (token_ === "DAI") {
        transaction = await newContract.drip(2);
      } else if (token_ === "ETH") {
        transaction = await contract.mintETH("150000000000000000");
      } else if (token_ === "GDAO") {
        transaction = await newContract.drip(1);
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
