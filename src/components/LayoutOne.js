import React from "react";
import ClickButton from "./ClickButton";

const LayoutOne = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-1/2 space-x-4">
        <ClickButton text="Wood" storageKey="woodCount" />
        <ClickButton text="Metal" storageKey="metalCount" />
      </div>

      <div className="flex h-1/2 justify-center items-center text-black">
        This is the second half.
      </div>
    </div>
  );
};

export default LayoutOne;
