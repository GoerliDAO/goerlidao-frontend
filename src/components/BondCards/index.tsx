import React from "react";
import useTheme from "src/hooks/useTheme";

// interface BondCardsProps {

// }

const BondCards = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <div
        style={{
          background: theme === "dark" ? "#1F1F1F" : "#FFFFFF",
        }}
        className=""
      >
        <div className="flex flex-col"></div>
      </div>
    </>
  );
};

export default BondCards;
