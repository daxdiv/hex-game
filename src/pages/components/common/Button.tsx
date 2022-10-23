import React from "react";

interface IButtonProps {
  backgroundColor: string;
}

const Button = ({ backgroundColor }: IButtonProps) => {
  return (
    <button
      style={{ backgroundColor }}
      className="w-24 rounded-xl px-2 py-1 transition-all ease-in hover:scale-105"
    >
      {backgroundColor}
    </button>
  );
};

export default Button;
