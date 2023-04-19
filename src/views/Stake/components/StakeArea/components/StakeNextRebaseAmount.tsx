import { DataRow } from "@olympusdao/component-library";
import { formatNumber } from "src/helpers";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  // useFuseBalance,
  // useGohmBalance,
  // useGohmTokemakBalance,
  // useSohmBalance,
  // useV1SohmBalance,
  // useWsohmBalance,
  useGdaoBalance,
  useSgdaoBalance,
  useXgdaoBalance,
} from "src/hooks/useBalance";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";
import { useStakingRebaseRate } from "src/hooks/useStakingRebaseRate";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";

export const StakeNextRebaseAmount = () => {
  const { data: rebaseRate } = useStakingRebaseRate();

  // const sohmBalances = useSohmBalance();
  // const gohmBalances = useGohmBalance();
  // const wsohmBalances = useWsohmBalance();
  // const v1sohmBalances = useV1SohmBalance();
  // const gohmFuseBalances = useFuseBalance();
  // const gohmTokemakBalances = useGohmTokemakBalance();
  const gdaoBalances = useGdaoBalance();
  const sgdaoBalances = useSgdaoBalance();
  const xgdaoBalances = useXgdaoBalance();

  const networks = useTestableNetworks();
  const { data: currentIndex } = useCurrentIndex();

  const sgdaoTokens = [sgdaoBalances[networks.MAINNET].data];
  const totalSgdaoBalance = sgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 9));

  const xgdaoTokens = [
    xgdaoBalances[networks.MAINNET].data,
    // gohmBalances[networks.MAINNET].data,
    // gohmBalances[NetworkId.ARBITRUM].data,
    // gohmBalances[NetworkId.AVALANCHE].data,
    // gohmBalances[NetworkId.POLYGON].data,
    // gohmBalances[NetworkId.FANTOM].data,
    // gohmBalances[NetworkId.OPTIMISM].data,
    // wsohmBalances[NetworkId.MAINNET].data,
    // wsohmBalances[NetworkId.ARBITRUM].data,
    // wsohmBalances[NetworkId.AVALANCHE].data,
    // gohmFuseBalances[NetworkId.MAINNET].data,
    // gohmTokemakBalances[NetworkId.MAINNET].data,
  ];
  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const props: PropsOf<typeof DataRow> = { title: `Your Next Rebase` };

  if (rebaseRate && sgdaoBalances && totalXgdaoBalance && currentIndex) {
    const nextRewardAmount = rebaseRate * totalXgdaoBalance.mul(currentIndex).add(totalSgdaoBalance).toApproxNumber();
    props.balance = `${formatNumber(nextRewardAmount, 4)} OHM`;
  } else props.isLoading = true;

  return <DataRow {...props} />;
};
