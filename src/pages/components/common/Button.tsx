import React from "react";

interface IButtonProps {
  backgroundColorHex: string;
  onClick: () => void;
}

const Button = ({ backgroundColorHex, onClick }: IButtonProps) => {
  return (
    <button
      className="w-24 rounded-xl border-2 border-white px-2 py-1 font-normal transition-all ease-in hover:scale-105"
      onClick={onClick}
    >
      {backgroundColorHex}
    </button>
  );
};

export default Button;
