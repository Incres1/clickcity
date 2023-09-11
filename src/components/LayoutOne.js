import React from "react";
import ClickButton from "./ClickButton";
import UpgradeButton from "./UpgradeButton";

const LayoutOne = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-1/2 space-x-4">
        <ClickButton text="Wood" storageKey="woodCount" />
        <ClickButton text="Metal" storageKey="metalCount" />
      </div>

      <div className="flex h-1/2 space-x-4 ">
        <UpgradeButton text="Upgrade Wood" storageKey="woodCount" cost="20" />
      </div>
    </div>
  );
};

export default LayoutOne;
