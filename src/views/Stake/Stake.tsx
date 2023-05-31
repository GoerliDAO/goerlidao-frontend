import "src/views/Stake/Stake.scss";

import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "src/components/Footer";
import { usePathForNetwork } from "src/hooks/usePathForNetwork";
import { ClaimsArea } from "src/views/Stake/components/ClaimsArea/ClaimsArea";
// import { ExternalStakePools } from "src/views/Stake/components/ExternalStakePools/ExternalStakePools";
import { StakeArea } from "src/views/Stake/components/StakeArea/StakeArea";
import { useNetwork } from "wagmi";

const Stake: React.FC = () => {
  const navigate = useNavigate();
  const { chain = { id: 5 } } = useNetwork();
  usePathForNetwork({ pathName: "stake", networkID: chain.id, navigate });

  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <StakeArea />
        {/* <ExternalStakePools /> */}
        <ClaimsArea />
      </div>
      <Footer />
    </>
  );
};

export default memo(Stake);
