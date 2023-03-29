import { DataRow } from "@olympusdao/component-library";
import { NetworkId } from "src/constants";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { nonNullable } from "src/helpers/types/nonNullable";
import {
  useGdaoBalance,
  // useFuseBalance,
  // useGohmBalance,
  // useGohmTokemakBalance,
  // useOhmBalance,
  // useSohmBalance,
  // useV1SohmBalance,
  // useWsohmBalance,
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

  // const gohmBalances = useGohmBalance();
  // const wsohmBalances = useWsohmBalance();

  // const ohmBalance = useOhmBalance()[networks.MAINNET].data;
  // const sohmBalance = useSohmBalance()[networks.MAINNET].data;
  // const v1sohmBalance = useV1SohmBalance()[networks.MAINNET].data;
  // const gohmFuseBalance = useFuseBalance()[NetworkId.MAINNET].data;
  // const gohmTokemakBalance = useGohmTokemakBalance()[NetworkId.MAINNET].data;
  const gdaoBalance = useGdaoBalance()[NetworkId.TESTNET_GOERLI].data;
  const sgdaoBalance = useSgdaoBalance()[networks.TESTNET_GOERLI].data;
  const xgdaoBalance = useXgdaoBalance()[NetworkId.TESTNET_GOERLI].data;

  // const sohmTokens = [sohmBalance, v1sohmBalance];
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
  const xgdaoTokens = [xgdaoBalance[networks.LOCALHOST].data, xgdaoBalance[networks.TESTNET_GOERLI].data];

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
          title={`xGDAO`}
          isLoading={!xgdaoBalance[networks.TESTNET_GOERLI].data}
          balance={`${formatBalance(xgdaoBalance[networks.TESTNET_GOERLI].data)} xGDAO`}
        />

        {hasVisibleBalance(xgdaoBalance[NetworkId.LOCALHOST].data) && (
          <DataRow
            indented
            title={`xGDAO (LOCALHOST)`}
            isLoading={!xgdaoBalance[NetworkId.LOCALHOST].data}
            balance={`${formatBalance(xgdaoBalance[NetworkId.LOCALHOST].data)} xGDAO`}
          />
        )}

        {/* {hasVisibleBalance(gohmBalances[NetworkId.AVALANCHE].data) && (
          <DataRow
            indented
            title={`gOHM (Avalanche)`}
            isLoading={!gohmBalances[NetworkId.AVALANCHE].data}
            balance={`${formatBalance(gohmBalances[NetworkId.AVALANCHE].data)} gOHM`}
          />
        )}

        {hasVisibleBalance(gohmBalances[NetworkId.POLYGON].data) && (
          <DataRow
            indented
            title={`gOHM (Polygon)`}
            isLoading={!gohmBalances[NetworkId.POLYGON].data}
            balance={`${formatBalance(gohmBalances[NetworkId.POLYGON].data)} gOHM`}
          />
        )}

        {hasVisibleBalance(gohmBalances[NetworkId.FANTOM].data) && (
          <DataRow
            indented
            title={`gOHM (Fantom)`}
            isLoading={!gohmBalances[NetworkId.FANTOM].data}
            balance={`${formatBalance(gohmBalances[NetworkId.FANTOM].data)} gOHM`}
          />
        )}

        {hasVisibleBalance(gohmBalances[NetworkId.OPTIMISM].data) && (
          <DataRow
            indented
            title={`gOHM (Optimism)`}
            isLoading={!gohmBalances[NetworkId.OPTIMISM].data}
            balance={`${formatBalance(gohmBalances[NetworkId.OPTIMISM].data)} gOHM`}
          />
        )}

        {hasVisibleBalance(gohmTokemakBalance) && (
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
        )}

        {hasVisibleBalance(v1sohmBalance) && (
          <DataRow
            indented
            title={`sOHM (v1)`}
            isLoading={!v1sohmBalance}
            balance={`${formatBalance(v1sohmBalance)} sOHM`}
          />
        )}

        {hasVisibleBalance(wsohmBalances[networks.MAINNET].data) && (
          <DataRow
            indented
            title={`wsOHM`}
            isLoading={!wsohmBalances[networks.MAINNET].data}
            balance={`${formatBalance(wsohmBalances[networks.MAINNET].data)} wsOHM`}
          />
        )}

        {hasVisibleBalance(wsohmBalances[NetworkId.ARBITRUM].data) && (
          <DataRow
            indented
            title={`wsOHM (Arbitrum)`}
            isLoading={!wsohmBalances[NetworkId.ARBITRUM].data}
            balance={`${formatBalance(wsohmBalances[NetworkId.ARBITRUM].data)} wsOHM`}
          />
        )}

        {hasVisibleBalance(wsohmBalances[NetworkId.AVALANCHE].data) && (
          <DataRow
            indented
            title={`wsOHM (Avalanche)`}
            isLoading={!wsohmBalances[NetworkId.AVALANCHE].data}
            balance={`${formatBalance(wsohmBalances[NetworkId.AVALANCHE].data)} wsOHM`}
          />
        )} */}
      </DataRow>
    </>
  );
};
