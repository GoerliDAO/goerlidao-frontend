import { DataRow } from "@olympusdao/component-library";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
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

const hasVisibleBalance = (balance: DecimalBigNumber) =>
  balance && balance.toNumber() > 9 / Math.pow(10, DECIMAL_PLACES_SHOWN + 1);

export const formatBalance = (balance: DecimalBigNumber) =>
  balance.toString({ decimals: DECIMAL_PLACES_SHOWN, trim: false, format: true });

export const StakeBalances = () => {
  const networks = useTestableNetworks();
  const { data: currentIndex } = useCurrentIndex();

  const { data: sgdaoBalance = new DecimalBigNumber("0", 9) } = useSgdaoBalance();
  const { data: gdaoBalance = new DecimalBigNumber("0", 9) } = useGdaoBalance();
  const { data: xgdaoBalance = new DecimalBigNumber("0", 9) } = useXgdaoBalance();
  // const v1sohmBalance = useV1SohmBalance()[networks.MAINNET].data;
  // const gohmFuseBalance = useFuseBalance()[NetworkId.MAINNET].data;
  // const gohmTokemakBalance = useGohmTokemakBalance()[NetworkId.MAINNET].data;

  // const sohmTokens = [sohmBalance, v1sohmBalance];
  // const xgdaoTokens = [
  //   // gohmFuseBalance,
  //   // gohmTokemakBalance,
  //   // xgdaoBalances[networks.MAINNET].data,
  //   xgdaoBalance,
  //   // gohmBalances[networks.ARBITRUM].data,
  //   // gohmBalances[networks.AVALANCHE].data,
  //   // gohmBalances[NetworkId.POLYGON].data,
  //   // gohmBalances[NetworkId.FANTOM].data,
  //   // wsohmBalances[networks.MAINNET].data,
  //   // wsohmBalances[networks.ARBITRUM].data,
  //   // wsohmBalances[networks.AVALANCHE].data,
  //   // gohmBalances[NetworkId.OPTIMISM].data,
  // ];

  // const totalSgdaoBalance = sgdaoTokens
  //   .filter(nonNullable)
  //   .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 9));

  // const totalXgdaoBalance = xgdaoTokens
  //   .filter(nonNullable)
  //   .reduce((res, bal) => res.add(bal), new DecimalBigNumber("0", 18));

  const totalStakedBalance = currentIndex && formatBalance(xgdaoBalance.mul(currentIndex).add(sgdaoBalance));

  // const allBalancesLoaded = sgdaoTokens.every(Boolean) && xgdaoTokens.every(Boolean);
  const allBalancesLoaded = sgdaoBalance && xgdaoBalance;

  return (
    <>
      <DataRow
        id="user-balance"
        title={`Unstaked Balance`}
        isLoading={!gdaoBalance}
        // balance={`${formatBalance(gdaoBalance)} GDAO`}
        balance={`${gdaoBalance} GDAO`}
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
            // balance={`${formatBalance(sgdaoBalance)} sGDAO`}
            balance={`${sgdaoBalance} sGDAO`}
          />
        )}

        <DataRow
          indented
          title={`xGDAO`}
          isLoading={!xgdaoBalance}
          // balance={`${formatBalance(xgdaoBalances[networks.MAINNET].data)} xGDAO`}
          balance={`${xgdaoBalance} xGDAO`}
        />

        {/* {hasVisibleBalance(gohmBalances[NetworkId.ARBITRUM].data) && (
          <DataRow
            indented
            title={`xGDAO (Arbitrum)`}
            isLoading={!gohmBalances[NetworkId.ARBITRUM].data}
            balance={`${formatBalance(gohmBalances[NetworkId.ARBITRUM].data)} gOHM`}
          />
        )} */}

        {/* {hasVisibleBalance(gohmTokemakBalance) && (
          <DataRow
            indented
            title={`gOHM (Tokemak)`}
            isLoading={!gohmTokemakBalance}
            balance={`${formatBalance(gohmTokemakBalance)} gOHM`}
          />
        )}

        {hasVisibleBalance(gohmFuseBalance) && (
          <DataRow
            indented
            title={`gOHM (Fuse)`}
            isLoading={!gohmFuseBalance}
            balance={`${formatBalance(gohmFuseBalance)} gOHM`}
          />
        )} */}
      </DataRow>
    </>
  );
};
