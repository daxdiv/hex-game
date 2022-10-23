import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-bold text-white">
      {children}
    </div>
  );
};

export default Container;
