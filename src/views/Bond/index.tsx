import { useQuery } from "@apollo/client";
import React from "react";
import { USER_VESTING_TOKENS } from "src/lib/BondQueries";
import { useAccount } from "wagmi";

const Bond = () => {
  const account = useAccount();

  //pull in user vested tokens
  const {
    loading: userVestedTokensLoading,
    error: userVestedTokensError,
    data: userVestedTokenData,
  } = useQuery(USER_VESTING_TOKENS, {
    variables: { ownerAddress: account },
  });

  //

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="mt-5 text-xs font-semibold flex items-center justify-between w-1/2">
        <div className="flex flex-col text-center">
          <h2>Treasury Balance</h2>
          <span className="font-bold text-xl">--</span>
        </div>
        <div className="flex flex-col text-center">
          <h2>GDAO Price</h2>
          <span className="font-bold text-xl">--</span>
        </div>
      </div>

      <div className="grid grid-cols-3 auto-rows-auto gap-4"></div>
    </div>
  );
};

export default Bond;
