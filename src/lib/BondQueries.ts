import { gql } from "@apollo/client";

export const GET_GDAO_MARKETS = gql`
  {
    markets(where: { hasClosed: false, name_contains: "GDAO", network: "goerli" }) {
      id
      name
      network
      auctioneer
      teller
      marketId
      owner
      callbackAddress
      capacity
      capacityInQuote
      chainId
      minPrice
      scale
      start
      conclusion
      payoutToken {
        id
        address
        symbol
        decimals
        name
      }
      quoteToken {
        id
        address
        symbol
        decimals
        name
        lpPair {
          token0 {
            id
            address
            symbol
            decimals
            name
            typeName
          }
          token1 {
            id
            address
            symbol
            decimals
            name
            typeName
          }
        }
        balancerWeightedPool {
          id
          vaultAddress
          poolId
          constituentTokens {
            id
            address
            symbol
            decimals
            name
            typeName
          }
        }
      }
      vesting
      vestingType
      isInstantSwap
      hasClosed
      totalBondedAmount
      totalPayoutAmount
      creationBlockTimestamp
    }
  }
`;

export const USER_VESTING_TOKENS = gql`
  query VestingTokens($ownerAddress: String!) {
    ownerBalances(where: { owner_contains_nocase: $ownerAddress, balance_gt: 0 }) {
      id
      tokenId
      owner
      balance
      network
      chainId
      bondToken {
        id
        symbol
        decimals
        expiry
        network
        chainId
        type
        teller
        underlying {
          id
          symbol
          decimals
        }
      }
    }
  }
`;

export const ALL_BONDPROTOCOL_MARKETS = gql`
  {
    markets(where: { hasClosed: false }) {
      id
      name
      network
      auctioneer
      teller
      marketId
      owner
      callbackAddress
      capacity
      capacityInQuote
      chainId
      minPrice
      scale
      start
      conclusion
      payoutToken {
        id
        address
        symbol
        decimals
        name
      }
      quoteToken {
        id
        address
        symbol
        decimals
        name
        lpPair {
          token0 {
            id
            address
            symbol
            decimals
            name
            typeName
          }
          token1 {
            id
            address
            symbol
            decimals
            name
            typeName
          }
        }
        balancerWeightedPool {
          id
          vaultAddress
          poolId
          constituentTokens {
            id
            address
            symbol
            decimals
            name
            typeName
          }
        }
      }
      vesting
      vestingType
      isInstantSwap
      hasClosed
      totalBondedAmount
      totalPayoutAmount
      creationBlockTimestamp
    }
  }
`;

export const ALL_BONDPROTOCOL_TOKENS = gql`
  {
    tokens {
      id
      network
      chainId
      address
      decimals
      symbol
      name
      lpPair {
        token0 {
          id
        }
        token1 {
          id
        }
      }
      balancerWeightedPool {
        constituentTokens {
          id
        }
      }
    }
  }
`;

export const BOND_PURCHASES_BY_MARKET = gql`
  {
    bondPurchases(first: 1000, where: { marketId: MARKET_ID }, orderBy: timestamp) {
      id
      recipient
      payout
      amount
      timestamp
      purchasePrice
      postPurchasePrice
      quoteToken {
        id
        name
        symbol
        address
      }
      payoutToken {
        id
        name
        symbol
        address
      }
    }
  }
`;
