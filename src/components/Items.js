import React, { useState, useEffect } from "react";
import Materials from "./Materials";

const Items = () => {
  const { woodCount, oreCount, leaf, gem, updateWoodCount, updateOreCount, updateLeafCount, updateGemCount } = Materials();


  const [selectedItem, setSelectedItem] = useState(null);

  // Define items as an object with keys as item names
  const itemList = {
    simpleSword: {
      name: "Simple Sword",
      strength: 2,
      wood: 200,
      ore: 200,
      leaf: 0,
      gem: 1,
      count: 0,
    },
    simpleShield: {
      name: "Simple Shield",
      health: 2,
      wood: 200,
      ore: 200,
      leaf: 1,
      gem: 0,
      count: 0,
    },
  };


  // Retain state for simpleSword and simpleShield
  const [simpleSword, setSimpleSword] = useState(
    JSON.parse(localStorage.getItem("simpleSword")) || itemList.simpleSword
  );
  const [simpleShield, setSimpleShield] = useState(
    JSON.parse(localStorage.getItem("simpleShield")) || itemList.simpleShield
  );

  

  // Define a function to handle crafting
  const handleCraftClick = (itemName, wood) => {
    const itemDetails = itemList[itemName]; // Access the details using the itemName
    
    if (
      woodCount >= itemDetails.wood &&
      oreCount >= itemDetails.ore &&
      leaf >= itemDetails.leaf &&
      gem >= itemDetails.gem
    ) {
      const newWoodCount = woodCount - itemDetails.wood;
      const newOreCount = oreCount - itemDetails.ore;
      const newLeafCount = leaf - itemDetails.leaf;
      const newGemCount = gem - itemDetails.gem;
      updateWoodCount(newWoodCount);
      updateOreCount(newOreCount);
      updateLeafCount(newLeafCount);
      updateGemCount(newGemCount);
      const message = `You have crafted a ${itemDetails.name}!`;
      alert(message);
    } else {
      alert("You do not have enough resources to craft!");
    }
  };

  // Render the CraftButton component for each item
  const CraftButton = ({ itemName}) => {

    return (
      <button
        className="w-1/4 h-1/4 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={() => handleCraftClick(itemName)}
      >
        <div className="flex-col justify-center">
          Craft {itemList[itemName].name}
        </div>
      </button>
    );
  };

  useEffect(() => {
    localStorage.setItem("woodCount", woodCount);
    localStorage.setItem("oreCount", oreCount);
    localStorage.setItem("leaf", leaf);
    localStorage.setItem("gem", gem);
  }, [woodCount, oreCount, leaf, gem]);

  return (
    <div>
      <ul>
        {Object.keys(itemList).map((itemName) => (
          <li key={itemName}>
            <div
              className={`bg-white p-4 text-left ${
                selectedItem === itemName ? "bg-black" : ""
              }`}
              onClick={() => setSelectedItem(itemName)}
            >
              <div className="text-2xl font-semibold">
                {itemList[itemName].name}
              </div>
              <div className="text-gray-600">
                Strength: {itemList[itemName].strength || 0}
              </div>
              <div className="text-gray-600">
                Health: {itemList[itemName].health || 0}
              </div>
              <div className="text-gray-600">
                Count: {itemList[itemName].count}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div className="p-4 text-left rounded-xl bg-amber-400">
          <div className="text-2xl font-semibold">
            Do you want to craft {itemList[selectedItem].name}?
          </div>
          <div className="text-2xl font-semibold">
            Cost: {itemList[selectedItem].wood || 0} wood, {itemList[selectedItem].ore || 0} ore, {itemList[selectedItem].gem || 0} gem, {itemList[selectedItem].leaf || 0} leaf
          </div>
          <CraftButton itemName={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default Items;
