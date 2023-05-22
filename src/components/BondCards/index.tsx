import React from "react";
import useTheme from "src/hooks/useTheme";

interface BondCardsProps {
  bondToken: string;
  bondId: string;
}

const BondCards: React.FC<BondCardsProps> = ({ bondToken, bondId }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <div
        style={{
          border: theme === "dark" ? "1px solid #000" : "1px solid #FFFFFF",
        }}
        className="p-2 rounded-md"
      >
        <div className="flex flex-col">{bondToken}</div>
        <div className="flex flex-col">{bondId}</div>
      </div>
    </>
  );
};

export default BondCards;
