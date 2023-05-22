import React from "react";
import BondCards from "src/components/BondCards";
import Footer from "src/components/Footer";
import { useAccount } from "wagmi";

const Bond = () => {
  const account = useAccount();

  // User Vesting Tokens Query
  // const {
  //   loading: userVestedTokensLoading,
  //   error: userVestedTokensError,
  //   data: userVestedTokenData,
  // } = useQuery(USER_VESTING_TOKENS, {
  //   variables: { ownerAddress: account },
  // });

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
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

        <div className="w-full grid grid-cols-3 auto-rows-auto gap-4">
          <BondCards bondToken="GDAO" bondId="1" />
          <BondCards bondToken="GDAO" bondId="2" />
          <BondCards bondToken="GDAO" bondId="3" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bond;
