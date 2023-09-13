import React, { useEffect, useState } from "react";

const Items = () => {
  // Define items as an object with keys as item names
  const itemList = {
    simpleSword: {
      name: "Simple Sword",
      strength: 2,
      count: 0,
      wood: 200,
      ore: 100,
    },
    simpleShield: {
      name: "Simple Shield",
      health: 2,
      count: 0,
      wood: 200,
      ore: 100,
    },
    // Add more items here
  };

  // Retrieve items from localStorage or use the default values
  const [listOfItems, setListOfItems] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem("listOfItems"));
    return savedList || itemList;
  });

  const updateItemList = (list) => {
    setListOfItems(list);
    localStorage.setItem("listOfItems", JSON.stringify(list));
  };

  const updateItem = (itemName) => {
    const updatedList = { ...listOfItems };
    switch (itemName.name) {
      case "Simple Sword":
        updatedList.simpleSword.count += 1;
        updateItemList(updatedList);
        break;
      case "Simple Shield":
        updatedList.simpleShield.count += 1;
        updateItemList(updatedList);
        break;
      default:
        break;
    }
    /* updatedList[itemName].count += 1; */
    
  };

  useEffect(() => {
    localStorage.setItem("listOfItems", JSON.stringify(listOfItems));
    localStorage.setItem("simpleSword", JSON.stringify(listOfItems.simpleSword));
    localStorage.setItem("simpleShield", JSON.stringify(listOfItems.simpleShield));
  }, [listOfItems, listOfItems.simpleSword, listOfItems.simpleShield]);

  return {
    listOfItems,
    updateItem,
  };
};

export default Items;
