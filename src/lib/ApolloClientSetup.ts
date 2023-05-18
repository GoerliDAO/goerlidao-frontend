// ApolloClientSetup.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-goerli",
  cache: new InMemoryCache(),
});

export default client;
