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


  // Retain state for simpleSword and simpleShield
  const [simpleSword, setSimpleSword] = useState(
    JSON.parse(localStorage.getItem("simpleSword")) || itemList.simpleSword
  );
  const [simpleShield, setSimpleShield] = useState(
    JSON.parse(localStorage.getItem("simpleShield")) || itemList.simpleShield
  );

  

  return {
    itemList,
  }
};

export default Items;
