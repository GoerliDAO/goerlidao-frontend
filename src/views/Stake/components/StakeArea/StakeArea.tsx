import { useTheme } from "@mui/material";
import { Metric } from "@olympusdao/component-library";
import { useState } from "react";
import RebaseTimer from "src/views/Stake/components/StakeArea/components/RebaseTimer/RebaseTimer";
import { StakeBalances } from "src/views/Stake/components/StakeArea/components/StakeBalances";
import { StakeFiveDayYield } from "src/views/Stake/components/StakeArea/components/StakeFiveDayYield";
import { StakeInputArea } from "src/views/Stake/components/StakeArea/components/StakeInputArea/StakeInputArea";
import { StakeNextRebaseAmount } from "src/views/Stake/components/StakeArea/components/StakeNextRebaseAmount";
import { StakeRebaseYield } from "src/views/Stake/components/StakeArea/components/StakeRebaseYield";
import { StakingAPY } from "src/views/TreasuryDashboard/components/Metric/Metric";
import { useAccount } from "wagmi";

export const StakeArea: React.FC = () => {
  const theme = useTheme();
  const [isZoomed, setIsZoomed] = useState(false);
  const { isConnected } = useAccount();

  return (
    <>
      <div className="w-full my-5">
        <div
          style={{
            fontSize: "0.6rem",
          }}
          className="grid grid-cols-2 grid-rows-2 md:flex md:items-start md:justify-between"
        >
          <StakingAPY className="stake-apy" />
          <Metric className="text-xs" label="Time until next rebase" metric={<RebaseTimer />} />
          {/* <CurrentIndex className="stake-index" /> */}
        </div>

        <StakeInputArea isZoomed={isZoomed} />

        <div className="flex justify-center items-center">
          <div
            style={{
              border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
            }}
            className="text-xs p-4 rounded-md w-full md:w-96"
          >
            {isConnected && (
              <div className="grid grid-cols-1 auto-rows-auto">
                <StakeBalances />
                <StakeNextRebaseAmount />
                <StakeRebaseYield />
                <StakeFiveDayYield />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
