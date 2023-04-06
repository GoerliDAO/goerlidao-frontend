import { DataRow } from "@olympusdao/component-library";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  // useFuseBalance,
  // useGohmBalance,
  // useGohmTokemakBalance,
  // useOhmBalance,
  // useSohmBalance,
  // useV1SohmBalance,
  // useWsohmBalance,
  useGdaoBalance,
  useSgdaoBalance,
  useXgdaoBalance,
} from "src/hooks/useBalance";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";

const DECIMAL_PLACES_SHOWN = 4;

const hasVisibleBalance = (balance?: DecimalBigNumber) =>
  balance && balance.toApproxNumber() > 9 / Math.pow(10, DECIMAL_PLACES_SHOWN + 1);

export const formatBalance = (balance?: DecimalBigNumber) =>
  balance?.toString({ decimals: DECIMAL_PLACES_SHOWN, trim: false, format: true });

export const StakeBalances = () => {
  const networks = useTestableNetworks();
  const { data: currentIndex } = useCurrentIndex();

  const xgdaoBalances = useXgdaoBalance();
  // const wsohmBalances = useWsohmBalance();

  const gdaoBalance = useGdaoBalance()[networks.MAINNET].data;
  const sgdaoBalance = useSgdaoBalance()[networks.MAINNET].data;
  // const v1sohmBalance = useV1SohmBalance()[networks.MAINNET].data;
  // const gohmFuseBalance = useFuseBalance()[NetworkId.MAINNET].data;
  // const gohmTokemakBalance = useGohmTokemakBalance()[NetworkId.MAINNET].data;

  const sgdaoTokens = [sgdaoBalance];

  // const gohmTokens = [
  //   gohmFuseBalance,
  //   gohmTokemakBalance,
  //   gohmBalances[networks.MAINNET].data,
  //   gohmBalances[networks.ARBITRUM].data,
  //   gohmBalances[networks.AVALANCHE].data,
  //   gohmBalances[NetworkId.POLYGON].data,
  //   gohmBalances[NetworkId.FANTOM].data,
  //   wsohmBalances[networks.MAINNET].data,
  //   wsohmBalances[networks.ARBITRUM].data,
  //   wsohmBalances[networks.AVALANCHE].data,
  //   gohmBalances[NetworkId.OPTIMISM].data,
  // ];

  const xgdaoTokens = [xgdaoBalances[networks.MAINNET].data];

  const totalSgdaoBalance = sgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 9));

  const totalXgdaoBalance = xgdaoTokens
    .filter(nonNullable)
    .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const totalStakedBalance = currentIndex && formatBalance(totalXgdaoBalance.mul(currentIndex).add(totalSgdaoBalance));

  const allBalancesLoaded = sgdaoTokens.every(Boolean) && xgdaoTokens.every(Boolean);

  return (
    <>
      <DataRow
        id="user-balance"
        title={`Unstaked Balance`}
        isLoading={!gdaoBalance}
        balance={`${formatBalance(gdaoBalance)} GDAO`}
      />

      <DataRow
        id="user-staked-balance"
        isLoading={!allBalancesLoaded}
        title={`Total Staked Balance`}
        balance={`${totalStakedBalance} GDAO`}
      >
        {sgdaoBalance?.gt("0") && (
          <DataRow
            indented
            title={`sGDAO`}
            id="sgdao-balance"
            isLoading={!sgdaoBalance}
            balance={`${formatBalance(sgdaoBalance)} sGDAO`}
          />
        )}

        <DataRow
          indented
          title={`gOHM`}
          isLoading={!xgdaoBalances[networks.MAINNET].data}
          balance={`${formatBalance(xgdaoBalances[networks.MAINNET].data)} xGDAO`}
        />
      </DataRow>
    </>
  );
};
