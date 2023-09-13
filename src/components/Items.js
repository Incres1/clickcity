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
  };

  // Retrieve items from localStorage or use the default values
  const [listOfItems, setListOfItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("listOfItems"));
    return savedItems || itemList;
  });

  const [simpleSword, setSimpleSword] = useState(() => {
    const savedSimpleSword = JSON.parse(localStorage.getItem("simpleSword"));
    return savedSimpleSword || itemList.simpleSword;
  });

  const [simpleShield, setSimpleShield] = useState(() => {
    const savedSimpleShield = JSON.parse(localStorage.getItem("simpleShield"));
    return savedSimpleShield || itemList.simpleShield;
  });

  const updateSimpleSword = (item) => {
    setSimpleSword(item);
    localStorage.setItem("simpleSword", JSON.stringify(item));
  };

  const updateSimpleShield = (item) => {
    setSimpleShield(item);
    localStorage.setItem("simpleShield", JSON.stringify(item));
  };

  const updateItemList = (list) => {
    setListOfItems(list);
    localStorage.setItem("listOfItems", JSON.stringify(list));
  };


  // Function to update item count and save it to localStorage
  const updateItem = (item) => {
    console.log(item);
    const updatedItemList = { ...listOfItems };
    console.log(updatedItemList);
    const updatedItem = { ...item };
    updatedItem.count += 1;
    updatedItemList[item.name] = updatedItem;
    setListOfItems(updatedItemList);
    localStorage.setItem("listOfItems", JSON.stringify(updatedItemList));
  };

  useEffect(() => {
    localStorage.setItem("listOfItems", JSON.stringify(listOfItems));
  }, [listOfItems]);

  return {
    itemList,
    listOfItems,
    updateItem,
  };
};

export default Items;
