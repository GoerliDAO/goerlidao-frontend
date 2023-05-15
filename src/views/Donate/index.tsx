import { useTheme } from "@mui/material";
import { ethers } from "ethers";
import React from "react";
import { useEffect, useState } from "react";
import donateABI from "src/abi/donateABI";
import Footer from "src/components/Footer";

const Donate = () => {
  const theme = useTheme();
  const [totalTokens, setTotalTokens] = React.useState(10);
  const [donationAmount, setDonationAmount] = React.useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Remove any non-digit characters from the input value
    const sanitizedValue = value.replace(/\D/g, "");

    // Check if the input is a valid number and not less than 0
    if (sanitizedValue === "" || (Number(sanitizedValue) >= 0 && !isNaN(Number(sanitizedValue)))) {
      setDonationAmount(Number(sanitizedValue));
    }
  };

  const getContractData = async () => {
    // Replace with your contract address and ABI
    const contractAddress = "0xd85435F248cC9c000DBAA5bE342ad0c78a644b48";
    const contractABI = donateABI; // Replace with the ABI of your contract

    // Create an instance of the contract
    const provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/b42fdbed6f7d4990a5f1fed9c4599ad2",
    );
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const owner = await contract.owner();
    // const cap = await contract.cap();
    // const total = await contract.total();
    // const depositCoin = await contract.depositCoin();
    const individualCap = await contract.individualCap().toString();
    const saleToken = await contract.saleToken();
    const saleConcluded = await contract.saleConcluded();

    return {
      owner,
      // cap,
      // total,
      // depositCoin,
      individualCap,
      saleToken,
      saleConcluded,
    };
  };

  const [donationEventContractData, setDonationEventContractData] = useState({
    owner: "",
    // cap: 0,
    // total: 0,
    // depositCoin: '',
    individualCap: 0,
    saleToken: "",
    saleConcluded: false,
  });

  useEffect(() => {
    const fetchContractData = async () => {
      try {
        const data = await getContractData();
        setDonationEventContractData(data);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    };

    fetchContractData();
  }, []);

  console.log("This is your contract data:", donationEventContractData);

  return (
    <>
      <div className="container mx-auto flex items-center justify-center">
        <div className="sm:w-1/2 w-full h-full flex flex-col text-sm">
          <div
            style={{
              border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
            }}
            className="relative text-xs flex flex-col rounded-lg"
          >
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold underline">$GDAO DONATION EVENT</span>
                <div
                  style={{
                    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
                    color: theme.palette.mode === "dark" ? "#000" : "#fff",
                    fontSize: "0.6rem",
                  }}
                  className="p-1 rounded-md font-semibold"
                >
                  {donationEventContractData.saleConcluded ? "EVENT OPEN NOW" : "EVENT NOW CLOSED"}
                </div>
              </div>

              <div className="flex flex-col">
                <span style={{ fontSize: 11 }}>
                  TOTAL $GETH CONTRIBUTED: <span className="font-bold">0Ξ</span>
                </span>
              </div>

              <div className="flex flex-col hidden">
                <div
                  style={{
                    border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  }}
                  className="w-full h-4 rounded-full mt-3"
                >
                  <div
                    style={{
                      width: `${totalTokens}%`,
                    }}
                    className="h-full text-center text-xs text-white bg-green-500 rounded-full"
                  ></div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderBottom: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                borderTop: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
              }}
              className="grid grid-cols-2 grid-rows-1 gap-2 h-10"
            >
              <div className="flex items-center justify-center">
                <div className="font-base">
                  Starts at:
                  <span className="font-extrabold"> 15 Apr, 18:00</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="font-base">
                  Ends at:
                  <span className="font-extrabold"> 15 Apr, 18:00</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-4 p-2 rounded-b-lg">
              <div className="flex items-center justify-between">
                <p>Token Address:</p>
                <a
                  className="underline"
                  target="_blank"
                  href={`https://goerli.etherscan.io/address/${donationEventContractData.saleToken}`}
                >
                  {donationEventContractData.saleToken}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <p>Swap Rate</p>
                <span>1Ξ = ? GDAO</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <p>Max. Individual Contribution</p>
                <span>{donationEventContractData.individualCap}Ξ</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Multisig</p>
                <a
                  className="underline"
                  target="_blank"
                  href={`https://goerli.etherscan.io/address/${donationEventContractData.owner}`}
                >
                  {donationEventContractData.owner}
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
              color: theme.palette.mode === "dark" ? "#000" : "#fff",
              fontSize: "0.7rem",
            }}
            className="font-semibold mt-2.5 rounded-md p-2"
          >
            MY CONTRIBUTION: 0Ξ
          </div>

          <div className="my-2.5 rounded-md shadow-sm">
            <input
              min={0}
              type="number"
              onChange={handleInputChange}
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter donation amount"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <span className="text-gray-500 sm:text-sm">Ξ</span>
            </div>
          </div>
          <button className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5">
            Donate
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Donate;
