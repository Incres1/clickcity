import React from "react";
import Items from "./Items";
import CraftButton from "./CraftButton";

const CraftItemList = ({ itemList, updateItem, oreCount, woodCount, updateOreCount, updateWoodCount }) => {
  // Declare a state variable for itemList using Items() function

  return (
    <div className="grid gap-4">
      {Object.keys(itemList).map((itemName) => {
        const item = itemList[itemName];

        return (
          <div key={itemName} className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-semibold">{item.name}</div>
            <div className="text-gray-600">Strength: {item.strength || 0}</div>
            <div className="text-gray-600">Health: {item.health || 0}</div>
            <div className="text-gray-600">You have {item.count || 0} {item.name}</div>
            <div className="text-gray-600">
              <CraftButton
                item={item}
                itemList={itemList}
                oreCount={oreCount}
                woodCount={woodCount}
                updateOreCount={updateOreCount}
                updateWoodCount={updateWoodCount}
                updateItem={updateItem}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CraftItemList;
