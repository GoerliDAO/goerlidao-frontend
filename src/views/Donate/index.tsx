import React from "react";
import Footer from "src/components/Footer";

const Donate = () => {
  const [totalTokens, setTotalTokens] = React.useState(10);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="sm:w-1/2 w-full h-full grid grid-cols-1 grid-rows-4 gap-4 text-sm">
          <div>
            <h1 className="text-xl font-extrabold mb-5">Donate</h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-4 rounded-xl bg-gray-200">
              <div className="flex items-center justify-between">
                <span>{`Finished.`}</span>
                <span>888/999</span>
              </div>

              <div>
                <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div
                    style={{
                      width: `${totalTokens}%`,
                    }}
                    className="h-full text-center text-xs text-white bg-green-500 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 grid-rows-1 gap-2 bg-gray-200 h-12 rounded-t-lg border-b border-gray-300">
              <div className="flex items-center justify-center border-r border-gray-300">
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
            <div className="grid grid-cols-1 grid-rows-3 p-2 rounded-b-lg bg-gray-200">
              <div className="flex items-center justify-between">
                <p>Swap Rate</p>
                <span>$1 = 10.00 $ Array</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <p>Max. Contribution</p>
                <span>$18000</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Pool Address</p>
                <span>0x6969696969696969696969696969696969696969696969</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Donate;
