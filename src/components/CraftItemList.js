import React from "react";
import Items from "./Items";
import CraftButton from "./CraftButton";

const CraftItemList = ({ itemList, oreCount, woodCount, updateOreCount, updateWoodCount }) => {
  // Declare a state variable for itemList using useState
  const [itemListState] = React.useState(itemList);

  return (
    <div className="grid gap-4">
      {Object.keys(itemListState).map((itemName) => {
        const item = itemListState[itemName];

        return (
          <div key={itemName} className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-semibold">{item.name} (click to craft)</div>
            <div className="text-gray-600">
              <CraftButton
                item={item}
                oreCount={oreCount}
                woodCount={woodCount}
                updateOreCount={updateOreCount}
                updateWoodCount={updateWoodCount}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CraftItemList;
