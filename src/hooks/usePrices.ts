import { useQuery } from "@tanstack/react-query";
import { NetworkId } from "src/constants";
// import { OHM_TOKEN } from "src/constants/tokens";
import { GDAO_TOKEN } from "src/constants/local/tokens";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { queryAssertion } from "src/helpers/react-query/queryAssertion";
import { nonNullable } from "src/helpers/types/nonNullable";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";

// export const ohmPriceQueryKey = () => ["useOhmPrice"];
export const gdaoPriceQueryKey = () => ["useGdaoPrice"];

/**
 * Returns the market price of OHM.
 */
// export const useOhmPrice = () => {
//   const key = ohmPriceQueryKey();
//   return useQuery<number, Error>([key], async () => {
//     const price = await OHM_TOKEN.getPrice(NetworkId.MAINNET);
//     return parseFloat(price.toString());
//   });
// };

export const useGdaoPrice = () => {
  const key = gdaoPriceQueryKey();
  return useQuery<number, Error>([key], async () => {
    // const price = await GDAO_TOKEN.getPrice(NetworkId.MAINNET);
    const price = await GDAO_TOKEN.getPrice(NetworkId.LOCALHOST);
    return parseFloat(price.toString());
  });
};

// export const gohmPriceQueryKey = (marketPrice?: number, currentIndex?: DecimalBigNumber) =>
//   ["useGOHMPrice", marketPrice, currentIndex].filter(nonNullable);

export const xgdaoPriceQueryKey = (marketPrice?: number, currentIndex?: DecimalBigNumber) =>
  ["useXGDAOPrice", marketPrice, currentIndex].filter(nonNullable);

/**
//  * Returns the calculated price of gOHM.
//  */
// export const useGohmPrice = () => {
//   const { data: ohmPrice } = useOhmPrice();
//   const { data: currentIndex } = useCurrentIndex();

//   const key = gohmPriceQueryKey(ohmPrice, currentIndex);
//   return useQuery<number, Error>(
//     [key],
//     async () => {
//       queryAssertion(ohmPrice && currentIndex, key);

//       return currentIndex.toApproxNumber() * ohmPrice;
//     },
//     { enabled: !!ohmPrice && !!currentIndex },
//   );
// };

export const useXgdaoPrice = () => {
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
