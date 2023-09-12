import React from "react";
import Materials from "./Materials";

const LayoutTwo = () => {
  const {
    woodCount,
    oreCount,
    woodIncrement,
    oreIncrement,
    leaf,
    gem,
    updateWoodCount,
    updateOreCount,
    updateLeafCount,
    updateGemCount,
  } = Materials();

  return (
    <div className="flex">
    Two
    </div>
);
};

export default LayoutTwo;