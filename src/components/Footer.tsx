import { useTheme } from "@mui/material";
import React from "react";
import { ReactComponent as FooterApeBlue } from "src/assets/icons/GDAO-footer-ape-blue.svg";
import { ReactComponent as FooterApeWhite } from "src/assets/icons/GDAO-footer-ape-white.svg";

const Footer = () => {
  const theme = useTheme().palette.mode;

  return (
    <div
      className="pt-36 pb-5"
      style={{
        backgroundColor: theme === "dark" ? "#121415" : "#C6D9F9",
        color: theme === "dark" ? "#FFFFFF" : "#0202FF",
      }}
    >
      <div className="container mx-auto flex items-end justify-between font-semibold">
        <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-3 gap-2 text-xs">
          <a target="_blank" href="https://twitter.com/GoerliDAO">
            Twitter
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          {theme === "dark" ? <FooterApeWhite className="w-20" /> : <FooterApeBlue className="w-20" />}
          <span className="text-xs">© Gööööööööööööööööööööööööerli</span>
        </div>
        <div className="grid grid-cols-1 md:grid-rows-3 gap-2 text-xs">
          <a target="_blank" href="https://t.me/goerli_dao">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
