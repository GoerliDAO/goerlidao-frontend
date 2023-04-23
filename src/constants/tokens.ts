import {
  DAI_ADDRESSES,
  // LUSD_ADDRESSES,
  GDAO_ADDRESSES,
  // OHM_DAI_BALANCER_LP_ADDRESSES,
  // OHM_DAI_LP_ADDRESSES,
  GDAO_WETH_LP_ADDRESSES,
  SGDAO_ADDRESSES,
  // UST_ADDRESSES,
  // V1_OHM_ADDRESSES,
  // V1_SOHM_ADDRESSES,
  // WBTC_ADDRESSES,
  WETH_ADDRESSES,
  // FRAX_ADDRESSES,
  XGDAO_ADDRESSES,
  // WSOHM_ADDRESSES,
} from "src/constants/addresses";
// import { BALANCER_VAULT } from "src/constants/contracts";
import { Token } from "src/helpers/contracts/Token";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { NetworkId } from "src/networkDetails";
import { IERC20__factory, IUniswapV2Pair__factory } from "src/typechain_goerli/factories";

export const GDAO_TOKEN = new Token({
  icons: ["GDAO"],
  name: "GDAO",
  decimals: 9,
  addresses: GDAO_ADDRESSES,
  factory: IERC20__factory,
  purchaseUrl: "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
});

export const SGDAO_TOKEN = new Token({
  icons: ["sGDAO"],
  name: "sGDAO",
  decimals: 9,
  addresses: SGDAO_ADDRESSES,
  factory: IERC20__factory,
  // customPricingFunc: GDAO_TOKEN.getPrice,
  purchaseUrl: "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
});

export const XGDAO_TOKEN = new Token({
  icons: ["xGDAO"],
  name: "xGDAO",
  decimals: 18,
  addresses: XGDAO_ADDRESSES,
  factory: IERC20__factory,
  purchaseUrl: "",
});

export const WETH_TOKEN = new Token({
  icons: ["wETH"],
  name: "WETH",
  decimals: 18,
  addresses: WETH_ADDRESSES,
  factory: IERC20__factory,
  purchaseUrl: "",
});

export const DAI_TOKEN = new Token({
  icons: ["DAI"],
  name: "DAI",
  decimals: 18,
  addresses: DAI_ADDRESSES,
  factory: IERC20__factory,
  purchaseUrl: "",
});

export const GDAO_WETH_LP_TOKEN = new Token({
  icons: ["GDAO", "wETH"],
  name: "GDAO-WETH",
  decimals: 18,
  addresses: GDAO_WETH_LP_ADDRESSES,
  factory: IUniswapV2Pair__factory,
  purchaseUrl: "",
});

/**
 * We have to add the custom pricing func after
 * the token has been initialised to prevent
 * circular references during initialisation.
 */
DAI_TOKEN.customPricingFunc = async () => {
  // WHY DO WE FIX DAI to $1 in BOND PRICING?
  // because we are trying to give the user a price in USD and
  // there is no such thing as USD on chain. If we wanted to be
  // more precise we could give a price in DAI like 13.59 DAI
  // rather than $13.59
  return new DecimalBigNumber("1", 18);
};

/**
 * For inverse bonds, we have to use a different DAI testnet token
 * for compatability. Reason why has something to do with how the
 * treasury was set up on the rinkeby contract.
 */
export const TEST_DAI_TOKEN = new Token({
  icons: ["DAI"],
  name: "DAI",
  decimals: 18,
  addresses: {
    [NetworkId.TESTNET_SEPOLIA]: DAI_ADDRESSES[NetworkId.TESTNET_SEPOLIA],
    [NetworkId.TESTNET_GOERLI]: DAI_ADDRESSES[NetworkId.TESTNET_GOERLI],
  },
  factory: IERC20__factory,
  purchaseUrl: "",
});

/**
 * We have to add the custom pricing func after
 * the token has been initialised to prevent
 * circular references during initialisation.
 */
TEST_DAI_TOKEN.customPricingFunc = async () => {
  return new DecimalBigNumber("1", 18);
};

GDAO_WETH_LP_TOKEN.customPricingFunc = networkId =>
  calculateUniOrSushiLPValue({ networkId, lpToken: GDAO_WETH_LP_TOKEN, poolTokens: [GDAO_TOKEN, WETH_TOKEN] });

// export const OHM_DAI_BALANCER_LP_TOKEN = new Token({
//   decimals: 18,
//   name: "50OHM-50DAI",
//   icons: ["OHM", "DAI"],
//   factory: BalancerV2Pool__factory,
//   addresses: OHM_DAI_BALANCER_LP_ADDRESSES,
//   purchaseUrl: "https://app.balancer.fi/#/trade",
// });

// OHM_DAI_BALANCER_LP_TOKEN.customPricingFunc = async () => {
//   const contract = OHM_DAI_BALANCER_LP_TOKEN.getEthersContract(NetworkId.MAINNET);
//   const vault = BALANCER_VAULT.getEthersContract(NetworkId.MAINNET);
//   const poolId = await contract.getPoolId();
//   const poolTokens = await vault.getPoolTokens(poolId);
//   const daiPrice = await DAI_TOKEN.getPrice(NetworkId.MAINNET);
//   const daiUSDValue = daiPrice.mul(new DecimalBigNumber(poolTokens.balances[1], 18));

//   return daiUSDValue.div(new DecimalBigNumber(poolTokens.balances[0], 9));
// };

/**
 * We have to add the custom pricing func after
 * the token has been initialised to prevent
 * circular references during initialisation.
 */
// OHM_TOKEN.customPricingFunc = async () => {
//   return OHM_DAI_BALANCER_LP_TOKEN.getPrice(NetworkId.MAINNET);
// };
