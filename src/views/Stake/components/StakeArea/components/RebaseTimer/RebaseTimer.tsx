import "src/views/Stake/components/StakeArea/components/RebaseTimer/RebaseTimer.scss";

import { Skeleton } from "@mui/material";
import React from "react";
import { prettifySeconds } from "src/helpers/timeUtil";
import { useNextRebaseDate } from "src/views/Stake/components/StakeArea/components/RebaseTimer/hooks/useNextRebaseDate";

const RebaseTimer: React.FC = () => {
  const { data: nextRebaseDate } = useNextRebaseDate();

  return (
    <>
      {nextRebaseDate ? (
        <>
          <span className="">{prettifySeconds((nextRebaseDate.getTime() - new Date().getTime()) / 1000)}&nbsp;</span>
        </>
      ) : (
        <Skeleton width="155px" />
      )}
    </>
  );
};

export default RebaseTimer;
