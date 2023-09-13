import React, { useState} from "react";

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
  };

  const updateItemCount = (item, newCount) => {
    itemList[item].count = newCount;
    localStorage.setItem(item, newCount);
    setListOfItems(itemList);
    localStorage.setItem("listOfItems", JSON.stringify(itemList));
  };

  // Retain state for simpleSword and simpleShield
  const [simpleSword, setSimpleSword] = useState(
    JSON.parse(localStorage.getItem("simpleSword")) || itemList.simpleSword
  );
  const [simpleShield, setSimpleShield] = useState(
    JSON.parse(localStorage.getItem("simpleShield")) || itemList.simpleShield
  );

  const [listOfItems, setListOfItems] = useState(
    JSON.parse(localStorage.getItem("listOfItems")) || itemList
  );

  

  return {
    itemList,
    updateItemCount
  }
};

export default Items;
