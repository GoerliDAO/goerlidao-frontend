import { useTheme } from "@mui/material";
import { getAccount } from "@wagmi/core";
import { ethers } from "ethers";
import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import donateABI from "src/abi/donateABI";
import Footer from "src/components/Footer";
import { useSwitchNetwork } from "wagmi";

const Donate = () => {
  const account = getAccount();
  const theme = useTheme();
  const contractAddress = "0xCcf1dA47ACf0df3f91ccA58842ca4bde1D90EA96";
  const contractABI = donateABI;
  const [totalTokens, setTotalTokens] = React.useState(10);
  const [donationAmount, setDonationAmount] = React.useState(0);
  const [totalDonated, setTotalDonated] = React.useState(0);
  const [totalPercentage, setTotalPercentage] = React.useState(0);

  const useEthereumProvider = () => {
    if (window.ethereum) {
      return new ethers.providers.Web3Provider(window.ethereum as ethers.providers.ExternalProvider);
    } else {
      // Fallback to infura provider when window.ethereum is not available
      return new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/b42fdbed6f7d4990a5f1fed9c4599ad2");
    }
  };

  const provider = useEthereumProvider();

  const infuraProvider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/b42fdbed6f7d4990a5f1fed9c4599ad2",
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const floatValue = parseFloat(event.target.value);
    if (!isNaN(floatValue) && floatValue >= 0) {
      setDonationAmount(floatValue);
    }
  };

  function formatBigNumber(value: any, fallback = "--") {
    return value.isZero() ? fallback : ethers.utils.formatEther(value);
  }

  const { switchNetwork } = useSwitchNetwork();

  const deposit = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask first.");
        return;
      }
      switchNetwork?.(5);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const depositAmount = ethers.utils.parseEther(donationAmount.toString());
      const tx = await contract.deposit({ value: depositAmount });
      await tx.wait();
      toast.success(`Successfully donated ${donationAmount}Ξ}`);
    } catch (err) {
      console.error(err);
      toast.error(
        "There was an error donating. Make sure you're on Goerli network. If the problem continues contact us.",
      );
    }
  };

  const getTotalCap = async () => {
    try {
      const infuraContract = new ethers.Contract(contractAddress, contractABI, infuraProvider);
      const total = await infuraContract.total();
      const totalInEther = ethers.utils.formatEther(total);
      const totalInEtherPercentage = (parseFloat(totalInEther) / 1000000) * 100;
      setTotalDonated(total);
      setTotalPercentage(totalInEtherPercentage);
    } catch (err) {
      console.error(err);
    }
  };

  const getContractData = async () => {
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const share = await contract.share(account.address);
    const saleConcluded = await contract.saleConcluded();

    return {
      share,
      saleConcluded,
    };
  };

  const [donationEventContractData, setDonationEventContractData] = useState({
    share: ethers.constants.Zero,
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

  useEffect(() => {
    getTotalCap();
  }, []);

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
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-2 rounded-xl">
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

              <div className="relative">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <div className="flex flex-col">
                      <span style={{ fontSize: 11 }}>
                        TOTAL $GETH CONTRIBUTED:{" "}
                        <span className="font-bold">{ethers.utils.formatEther(totalDonated)}Ξ / 1,000,000Ξ</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">{totalPercentage}%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-300">
                  <div
                    style={{ width: `${totalPercentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
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
                  <span className="font-extrabold"> July 17, 4pm UTC</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="font-base">
                  Ends at:
                  <span className="font-extrabold"> July 19, 4pm UTC</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-2 rounded-b-lg">
              {/* <div className="flex items-center justify-between">
                <p>Your Total Contribution</p>
                <span>{formatBigNumber(donationEventContractData.share)}Ξ</span>
              </div> */}
              <div className="flex items-center justify-between">
                <p>Max. Individual Contribution</p>
                <span>25,000Ξ</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Multisig</p>
                <a
                  className="underline"
                  target="_blank"
                  href="https://goerli.etherscan.io/address/0x402D6dD892DA0b3FE7e4f2a6a0c30fee010E8864"
                >
                  0x402D6dD892DA0b3FE7e4f2a6a0c30fee010E8864
                </a>
              </div>
            </div>
          </div>

          <div className="my-2.5 rounded-md shadow-sm">
            <input
              disabled
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
