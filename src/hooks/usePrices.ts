import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NetworkId } from "src/constants";
import { OHM_TOKEN } from "src/constants/tokens";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { queryAssertion } from "src/helpers/react-query/queryAssertion";
import { nonNullable } from "src/helpers/types/nonNullable";
import { useCurrentIndex } from "src/hooks/useCurrentIndex";

export const gdaoPriceQueryKey = () => ["useGdaoPrice"];

const token_addr = "0xd59Abc4D7E6948De9344574A3a63754186e17a2C"; // update to GDAO
const url = `https://api.dexscreener.com/latest/dex/search/?q=${token_addr}`;

/**
 * Returns the market price of OHM.
 */
export const useGdaoPrice = async () => {
  const price = async () => {
    const { data: response } = await axios.get(url);
    const price_ = JSON.parse(JSON.stringify(response.data.pairs[0])).priceUsd;
    console.log(price_);
    return price_;
  };
  return price;
};

export const xgdaoPriceQueryKey = (marketPrice?: number, currentIndex?: DecimalBigNumber) =>
  ["useXGDAOPrice", marketPrice, currentIndex].filter(nonNullable);

/**
 * Returns the calculated price of gOHM.
 */
// export const useXgdaoPrice = () => {
//   const gdaoPrice = useGdaoPrice();
//   const { data: currentIndex } = useCurrentIndex();

//   const key = xgdaoPriceQueryKey(gdaoPrice, currentIndex);
//   return useQuery<number, Error>(
//     [key],
//     async () => {
//       queryAssertion(gdaoPrice && currentIndex, key);

//       return currentIndex.toApproxNumber() * gdaoPrice;
//     },
//     { enabled: !!gdaoPrice && !!currentIndex },
//   );
// };

export const ohmPriceQueryKey = () => ["useOhmPrice"];

/**
 * Returns the market price of OHM.
 */
export const useOhmPrice = () => {
  const key = ohmPriceQueryKey();
  return useQuery<number, Error>([key], async () => {
    const price = await OHM_TOKEN.getPrice(NetworkId.MAINNET);
    return parseFloat(price.toString());
  });
};

export const gohmPriceQueryKey = (marketPrice?: number, currentIndex?: DecimalBigNumber) =>
  ["useGOHMPrice", marketPrice, currentIndex].filter(nonNullable);

/**
 * Returns the calculated price of gOHM.
 */
export const useGohmPrice = () => {
  const { data: ohmPrice } = useOhmPrice();
  const { data: currentIndex } = useCurrentIndex();

  const key = gohmPriceQueryKey(ohmPrice, currentIndex);
  return useQuery<number, Error>(
    [key],
    async () => {
      queryAssertion(ohmPrice && currentIndex, key);

      return currentIndex.toApproxNumber() * ohmPrice;
    },
    { enabled: !!ohmPrice && !!currentIndex },
  );
};
