import React from "react";

const CraftButton = ({
  item,
  oreCount,
  woodCount,
  leafCount,
  gemCount,
  updateGemCount,
  updateLeafCount,
  updateOreCount,
  updateWoodCount,
  updateItem,
}) => {
  const handleButtonClick = () => {
    let canCraft = true;

    if (item.hasOwnProperty("wood") && woodCount < item.wood) {
      console.log("Not enough wood");
      canCraft = false;
    }

    if (item.hasOwnProperty("ore") && oreCount < item.ore) {
      console.log("Not enough ore");
      canCraft = false;
    }

    if (item.hasOwnProperty("leaf") && leafCount < item.leaf) {
      console.log("Not enough leaf");
      canCraft = false;
    }

    if (item.hasOwnProperty("gem") && gemCount < item.gem) {
      console.log("Not enough gem");
      canCraft = false;
    }

    if (canCraft) {
      if (item.hasOwnProperty("wood")) {
        const newWoodCount = woodCount - item.wood;
        updateWoodCount(newWoodCount);
      }

      if (item.hasOwnProperty("ore")) {
        const newOreCount = oreCount - item.ore;
        updateOreCount(newOreCount);
      }

      if (item.hasOwnProperty("leaf")) {
        const newLeafCount = leafCount - item.leaf;
        updateLeafCount(newLeafCount);
      }

      if (item.hasOwnProperty("gem")) {
        const newGemCount = gemCount - item.gem;
        updateGemCount(newGemCount);
      }

      updateItem(item);
    }
    /* if (oreCount >= item.ore && woodCount >= item.wood) {
      const newOreCount = oreCount - item.ore;
      const newWoodCount = woodCount - item.wood;
      updateItem(item);
      updateOreCount(newOreCount);
      updateWoodCount(newWoodCount);
    } else {
      console.log("error");
    } */
  };

  return (
    <button
      className="w-1/2 h-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
      onClick={handleButtonClick}
    >
      <div className="flex-col text-center">Craft</div>
    </button>
  );
};

export default CraftButton;
