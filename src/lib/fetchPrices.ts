import axios, { AxiosError } from "axios";

export const fetchGdaoAndMethPrices = async () => {
  try {
    const gdaoResponse = await axios.get("https://api.dexscreener.com/latest/dex/search/?q=GDAO");
    const methResponse = await axios.get("https://api.dexscreener.com/latest/dex/search/?q=METH");

    const gdaoPrice = gdaoResponse.data;
    const methPrice = methResponse.data;

    const actualGdaoPrice = JSON.parse(JSON.stringify(gdaoPrice.data.pairs[0])).priceUsd;
    const actualMethPrice = JSON.parse(JSON.stringify(methPrice.data.pairs[0])).priceUsd;

    return { actualGdaoPrice, actualMethPrice };
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
    return { error: axiosError.message };
  }
};
