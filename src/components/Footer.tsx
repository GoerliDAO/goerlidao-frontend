import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between my-5">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 text-xs">
          <a href="">Docs</a>
          <a href="">Discord</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase font-semibold text-2xl">GöERLIDAO</span>
          <span className="text-xs">© Gööööööööööööööööööerli</span>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-2 text-xs">
          <a href="">Twitter</a>
          <a href="">Telegram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
