import React, { useState } from "react";
import CraftButton from "./CraftButton";

const ListOfItems = ({
  itemList,
  updateItem,
  oreCount,
  woodCount,
  leafCount,
  gemCount,
  updateOreCount,
  updateWoodCount,
  updateLeafCount,
  updateGemCount,
}) => {
  const [selectedItem, setSelectedItem] = useState(Object.keys(itemList)[0]);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h3>Select an Item:</h3>
          {Object.keys(itemList).map((itemName) => (
            <div
              key={itemName}
              onClick={() => handleItemClick(itemName)}
              className={`cursor-pointer p-2 rounded-xl transition duration-300 ${
                selectedItem === itemName ? "bg-green-400" : "bg-white"
              }`}
            >
              {itemList[itemName].name}
            </div>
          ))}
        </div>
        <div style={{ flex: 2 }}>
          <p>Strength: {itemList[selectedItem].strength || 0}</p>
          <p>Health: {itemList[selectedItem].health || 0}</p>
          <p>Luck: {itemList[selectedItem].luck || 0}</p>
          <p>
            Cost: {itemList[selectedItem].wood || 0} Wood &{" "}
            {itemList[selectedItem].ore || 0} Ore &{" "}
            {itemList[selectedItem].leaf || 0} Leaf &{" "}
            {itemList[selectedItem].gem || 0} Gem
          </p>
          <p>Value: {itemList[selectedItem].value || 0}</p>
          <p>You own: {itemList[selectedItem].count}</p>
          {/* Add more attributes here */}
          <CraftButton
            item={itemList[selectedItem]}
            itemList={itemList}
            oreCount={oreCount}
            woodCount={woodCount}
            gemCount={gemCount}
            leafCount={leafCount}
            updateGemCount={updateGemCount}
            updateLeafCount={updateLeafCount}
            updateOreCount={updateOreCount}
            updateWoodCount={updateWoodCount}
            updateItem={updateItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfItems;
