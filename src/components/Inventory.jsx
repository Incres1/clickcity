import React from "react";
import DisplayItem from "./DisplayItem"; // Import your DisplayItem component

const Inventory = ({ listOfItems, updateItem }) => {
  return (
    <div className="container mx-auto p-4">
      <h1>Inventory</h1>
      {Object.values(listOfItems).map((item) => (
        <DisplayItem key={item.name} item={item} updateItem={updateItem} />
      ))}
    </div>
  );
};

export default Inventory;
