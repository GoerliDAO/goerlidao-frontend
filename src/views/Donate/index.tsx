import { useTheme } from "@mui/material";
import { getAccount } from "@wagmi/core";
import { ethers } from "ethers";
import React from "react";
import { useEffect, useState } from "react";
import donateABI from "src/abi/donateABI";
import Footer from "src/components/Footer";

const Donate = () => {
  const account = getAccount();
  console.log("this is your account :", account);
  const theme = useTheme();
  const contractAddress = "0x08F81f3be4a03E0332643B8bF80D74744a11bF32";
  const contractABI = donateABI;
  const [totalTokens, setTotalTokens] = React.useState(10);
  const [donationAmount, setDonationAmount] = React.useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    if (sanitizedValue === "" || (Number(sanitizedValue) >= 0 && !isNaN(Number(sanitizedValue)))) {
      setDonationAmount(Number(sanitizedValue));
    }
  };

  const deposit = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask first.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const depositAmount = ethers.utils.parseEther(donationAmount.toString());
      const tx = await contract.deposit({ value: depositAmount });
      await tx.wait();
      alert("Deposit successful!");
    } catch (err) {
      console.error(err);
      alert("An error occurred, check the console for details");
    }
  };

  const getContractData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const cap = await contract.cap();
    const share = await contract.share(account.address);
    const formattedShare = ethers.utils.formatEther(share);

    // individual cap in wei and converted to ether
    const individualCap = await contract.individualCap();
    const formattedIndividualCap = ethers.utils.formatEther(individualCap);

    const saleConcluded = await contract.saleConcluded();

    // total donated in wei and converted to ether
    const total = await contract.total();
    const totalInEther = ethers.utils.formatEther(total);

    return {
      formattedIndividualCap,
      formattedShare,
      individualCap,
      saleConcluded,
      totalInEther,
    };
  };

  const [donationEventContractData, setDonationEventContractData] = useState({
    formattedIndividualCap: "0",
    formattedShare: "0",
    individualCap: 0,
    saleConcluded: false,
    totalInEther: "0",
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

  console.log("This is your contract data: ", donationEventContractData);

  return (
    <>
      <div className="mt-5 container mx-auto flex items-center justify-center">
        <div className="sm:w-1/2 w-full h-full flex flex-col text-sm">
          <div
            style={{
              border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
            }}
            className="relative text-xs flex flex-col rounded-lg"
          >
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold">GOERLIDAO Donation Event</span>
                <div
                  style={{
                    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
                    color: theme.palette.mode === "dark" ? "#000" : "#fff",
                    fontSize: "0.6rem",
                  }}
                  className="p-1 rounded-md font-semibold"
                >
                  {!donationEventContractData.saleConcluded ? "EVENT OPEN NOW" : "EVENT NOW CLOSED"}
                </div>
              </div>

              <div className="flex flex-col">
                <span style={{ fontSize: 10 }}>
                  TOTAL $GETH CONTRIBUTED: <span className="font-bold">{donationEventContractData.totalInEther}Ξ</span>
                </span>
              </div>

              <div className="flex-col hidden">
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
            <div className="grid grid-cols-1 grid-rows-2 p-2 rounded-b-lg">
              <div className="py-2.5 flex items-center justify-between">
                <p>Max. Individual Contribution</p>
                <span>{donationEventContractData.formattedIndividualCap}Ξ</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Multisig</p>
                <a
                  className="underline"
                  target="_blank"
                  href="https://goerli.etherscan.io/address/0x453935F8BdB458F69E87E238E41A222d4FC7813f"
                >
                  0x453935F8BdB458F69E87E238E41A222d4FC7813f
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
            MY CONTRIBUTION: {donationEventContractData.formattedShare}Ξ (GETH)
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
          <button
            disabled={!account}
            onClick={deposit}
            className="w-full p-2 text-center bg-white text-black border border-black font-extrabold rounded-md mt-2.5"
          >
            Donate
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Donate;
