import { Dispatch, SetStateAction } from "react";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  useGdaoBalance,
  useSgdaoBalance,
  // useFuseBalance,
  // useGohmBalance,
  // useGohmTokemakBalance,
  // useOhmBalance,
  // useSohmBalance,
  useXgdaoBalance,
} from "src/hooks/useBalance";
// import { useOldAssetsDetected } from "src/hooks/useOldAssetsDetected";
// import { useOldAssetsEnoughToMigrate } from "src/hooks/useOldAssetsEnoughToMigrate";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { Stake, V1Stake } from "src/views";

export const StakeVersionContainer: React.FC<{ setMigrationModalOpen: Dispatch<SetStateAction<boolean>> }> = props => {
  // const oldAssetsDetected = useOldAssetsDetected();
  // const oldAssetsEnoughToMigrate = useOldAssetsEnoughToMigrate();

  const networks = useTestableNetworks();
  const { data: sGdaoBalance = new DecimalBigNumber("0", 9) } = useSgdaoBalance()[networks.MAINNET];
  const { data: gdaoBalance = new DecimalBigNumber("0", 9) } = useGdaoBalance()[networks.MAINNET];
  const xgdaoBalances = useXgdaoBalance();
  // const { data: gohmFuseBalance = new DecimalBigNumber("0", 18) } = useFuseBalance()[NetworkId.TESTNET_SEPOLIA];
  // const { data: gohmTokemakBalance = new DecimalBigNumber("0", 18) } =
  //   useGohmTokemakBalance()[NetworkId.TESTNET_SEPOLIA];
  const xgdaoTokens = [
    // gohmFuseBalance,
    // gohmTokemakBalance,
    xgdaoBalances[networks.MAINNET].data,
  ];
  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));
  const newAssetsDetected = Number(totalXgdaoBalance) || Number(sGdaoBalance) || Number(gdaoBalance);

  // if (newAssetsDetected || (!newAssetsDetected && !oldAssetsDetected) || !oldAssetsEnoughToMigrate) return <Stake />;
  if (newAssetsDetected) return <Stake />;

  return <V1Stake setMigrationModalOpen={props.setMigrationModalOpen} />;
};
