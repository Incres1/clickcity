import React from "react";
import DisplayItem from "./DisplayItem";

const Inventory = ({ listOfItems, updateItem, gold, updateGold }) => {
  return (
    <div className="container mx-auto p-4">
      {Object.values(listOfItems).map((item) => {
        if (item.count > 0) {
          return (
            <DisplayItem
              item={item}
              updateItem={updateItem}
              gold={gold}
              updateGold={updateGold}
            />
          );
        }
        return null; // Optional: You can return null for items with count <= 0
      })}
    </div>
  );
};

export default Inventory;
