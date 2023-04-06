import { Dispatch, SetStateAction } from "react";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  // useFuseBalance,
  // useGohmBalance,
  // useGohmTokemakBalance,
  // useOhmBalance,
  // useSohmBalance,
  useGdaoBalance,
  useSgdaoBalance,
  useXgdaoBalance,
} from "src/hooks/useBalance";
import { useOldAssetsDetected } from "src/hooks/useOldAssetsDetected";
import { useOldAssetsEnoughToMigrate } from "src/hooks/useOldAssetsEnoughToMigrate";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { Stake, V1Stake } from "src/views";

export const StakeVersionContainer: React.FC<{ setMigrationModalOpen: Dispatch<SetStateAction<boolean>> }> = props => {
  const oldAssetsDetected = useOldAssetsDetected();
  const oldAssetsEnoughToMigrate = useOldAssetsEnoughToMigrate();

  const networks = useTestableNetworks();
  const { data: sGdaoBalance = new DecimalBigNumber("0", 9) } = useSgdaoBalance()[networks.MAINNET];
  const { data: gdaoBalance = new DecimalBigNumber("0", 9) } = useGdaoBalance()[networks.MAINNET];
  const xgdaoBalances = useXgdaoBalance();
  // const { data: gohmFuseBalance = new DecimalBigNumber("0", 18) } = useFuseBalance()[NetworkId.MAINNET];
  // const { data: gohmTokemakBalance = new DecimalBigNumber("0", 18) } = useGohmTokemakBalance()[NetworkId.MAINNET];
  const xgdaoTokens = [
    xgdaoBalances[networks.MAINNET].data,
    // gohmFuseBalance,
    // gohmTokemakBalance,
    // gohmBalances[networks.MAINNET].data,
    // gohmBalances[NetworkId.ARBITRUM].data,
    // gohmBalances[NetworkId.AVALANCHE].data,
    // gohmBalances[NetworkId.POLYGON].data,
    // gohmBalances[NetworkId.FANTOM].data,
    // gohmBalances[NetworkId.OPTIMISM].data,
  ];
  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));
  const newAssetsDetected = Number(totalXgdaoBalance) || Number(sGdaoBalance) || Number(gdaoBalance);

  if (newAssetsDetected || (!newAssetsDetected && !oldAssetsDetected) || !oldAssetsEnoughToMigrate) return <Stake />;

  return <V1Stake setMigrationModalOpen={props.setMigrationModalOpen} />;
};
