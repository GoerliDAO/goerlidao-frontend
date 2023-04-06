import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
import { GDAO_TOKEN } from "src/constants/tokens";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { queryAssertion } from "src/helpers/react-query/queryAssertion";
import { nonNullable } from "src/helpers/types/nonNullable";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";

export const gdaoPriceQueryKey = () => ["useGdaoPrice"];

/**
 * Returns the market price of OHM.
 */
export const useGdaoPrice = () => {
  const key = gdaoPriceQueryKey();
  return useQuery<number, Error>([key], async () => {
    const price = await GDAO_TOKEN.getPrice(NetworkId.LOCALHOST | NetworkId.TESTNET_GOERLI);
    return parseFloat(price.toString());
  });
};

export const xgdaoPriceQueryKey = (marketPrice?: number, currentIndex?: DecimalBigNumber) =>
  ["useXGDAOPrice", marketPrice, currentIndex].filter(nonNullable);

/**
 * Returns the calculated price of xGDAO.
 */
export const useXGDAOPrice = () => {
  const { data: gdaoPrice } = useGdaoPrice();
  const { data: currentIndex } = useCurrentIndex();

  const key = xgdaoPriceQueryKey(gdaoPrice, currentIndex);
  return useQuery<number, Error>(
    [key],
    async () => {
      queryAssertion(gdaoPrice && currentIndex, key);

      return currentIndex.toApproxNumber() * gdaoPrice;
    },
    { enabled: !!gdaoPrice && !!currentIndex },
  );
};
