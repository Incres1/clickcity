import React, { useEffect, useState} from "react";

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


  const updateItem = (item) => {
    switch (item) {
      case "simpleSword":
        setSimpleSword(item);
        setListOfItems(itemList);
        
        break;
      case "simpleShield":
        setSimpleShield(item);
        setListOfItems(itemList);
        break;
      default:
        break;
    }
    
  };

  useEffect(() => {
    localStorage.setItem("listOfItems", JSON.stringify(itemList));
    localStorage.setItem("simpleSword", JSON.stringify(simpleSword));
    localStorage.setItem("simpleShield", JSON.stringify(simpleShield));
  }, [listOfItems, simpleSword, simpleShield]);


  

  return {
    itemList,
    updateItem,
  }
};

export default Items;
