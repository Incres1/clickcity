import { useEffect, useState } from "react";

const Items = () => {
  // Define items as an object with keys as item names
  const itemList = {
    simpleSword: {
      name: "Simple Sword",
      strength: 2,
      count: 0,
      wood: 200,
      ore: 100,
      value: 5,
    },
    simpleShield: {
      name: "Simple Shield",
      health: 2,
      count: 0,
      wood: 200,
      ore: 100,
      value: 5,
    },
    luckyCharm: {
      name: "Lucky Charm",
      count: 0,
      luck: 2,
      gem: 50,
      leaf: 50,
      value: 100,
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

  const updateItem = (itemName, count) => {
    const updatedList = { ...listOfItems };
    switch (itemName.name) {
      case "Simple Sword":
        updatedList.simpleSword.count += count;
        updateItemList(updatedList);
        break;
      case "Simple Shield":
        updatedList.simpleShield.count += count;
        updateItemList(updatedList);
        break;
      case "Lucky Charm":
        updatedList.luckyCharm.count += count;
        updateItemList(updatedList);
        break;
      default:
        break;
    }    
  };
  const getStats = () => {
    let strengthFromItems = 0;
    let healthFromItems = 0;
    let luckFromitems = 0;
    for (const key in listOfItems) {
      if (listOfItems[key].count > 0) {
        if (listOfItems[key].strength) {
        strengthFromItems += listOfItems[key].strength * listOfItems[key].count;
        }
        if (listOfItems[key].health) {
          healthFromItems += listOfItems[key].health * listOfItems[key].count;
        }
        if (listOfItems[key].luck) {
          luckFromitems += listOfItems[key].luck * listOfItems[key].count;
        }
        
      }
    }
    return { healthFromItems, strengthFromItems, luckFromitems };
  };

  const { healthFromItems, strengthFromItems, luckFromitems } = getStats();
  

  useEffect(() => {
    localStorage.setItem("listOfItems", JSON.stringify(listOfItems));
    localStorage.setItem("simpleSword", JSON.stringify(listOfItems.simpleSword));
    localStorage.setItem("simpleShield", JSON.stringify(listOfItems.simpleShield));
  }, [listOfItems, listOfItems.simpleSword, listOfItems.simpleShield]);

  return {
    listOfItems,
    updateItem,
    healthFromItems,
    strengthFromItems,
    luckFromitems,
  };
};

export default Items;
