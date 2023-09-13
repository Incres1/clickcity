import React, { useState, useEffect } from "react";
import Materials from "./Materials";

const Items = () => {
  const { woodCount, oreCount, leaf, gem, updateWoodCount,
    updateOreCount,updateLeafCount,
    updateGemCount, } = Materials();


  const initialSimpleSword = {
    name: "Simple Sword",
    strength: 2,
    wood: 200,
    ore: 200,
    leaf: 0,
    gem: 1,
    count: 0,
  };

  const initialSimpleShield = {
    name: "Simple Shield",
    health: 2,
    wood: 200,
    ore: 200,
    leaf: 1,
    gem: 0,
    count: 0,
  };

  const itemList = [initialSimpleShield, initialSimpleSword];

  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item
  };

  const [simpleSword, setSimpleSword] = useState(
    JSON.parse(localStorage.getItem("simpleSword")) || initialSimpleSword
  );
  const [simpleShield, setSimpleShield] = useState(
    JSON.parse(localStorage.getItem("simpleShield")) || initialSimpleShield
  );

  useEffect(() => {
    const storedSimpleSword =
      JSON.parse(localStorage.getItem("simpleSword")) || initialSimpleSword;
    const storedSimpleShield =
      JSON.parse(localStorage.getItem("simpleShield")) || initialSimpleShield;

    setSimpleSword(storedSimpleSword);
    setSimpleShield(storedSimpleShield);
  }, []);

  


  const CraftButton = ({item}) => {

    const handleCraftClick = () => {
      if (woodCount >= item.wood && oreCount >= item.ore && leaf >= item.leaf && gem >= item.gem) {
        const newWoodCount = woodCount - item.wood;
        const newOreCount = oreCount - item.ore;
        const newLeafCount = leaf - item.leaf;
        const newGemCount = gem - item.gem;
        updateWoodCount(newWoodCount);
        updateOreCount(newOreCount);
        updateLeafCount(newLeafCount);
        updateGemCount(newGemCount);
        const message = `You have crafted a ${item.name}!`;
        alert(message);
      } else {
        alert("You do not have enough resources to craft!");
      }
    };

    return (
      <button
        className="w-1/4 h-1/4 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleCraftClick}
      >
        <div className="flex-col justify-center">
          Craft {item.name}
          </div>
      </button>
    );
  };






  useEffect(() => {
    localStorage.setItem("simpleSword", JSON.stringify(simpleSword));
    localStorage.setItem("simpleShield", JSON.stringify(simpleShield));
    localStorage.setItem("woodCount", woodCount);
    localStorage.setItem("oreCount", oreCount);
    localStorage.setItem("leaf", leaf);
    localStorage.setItem("gem", gem);
  }, [simpleSword, simpleShield, woodCount, oreCount, leaf, gem]);

    

  return (
    <div>
      <ul>
        {itemList.map((item) => (
          <li key={item.name}>
            <div
              className={`bg-white p-4 text-left ${
                selectedItem === item ? "bg-black" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              <div className="text-2xl font-semibold">{item.name}</div>
              <div className="text-gray-600">Strength: {item.strength || 0}</div>
              <div className="text-gray-600">Health: {item.health || 0}</div>

              <div className="text-gray-600">Count: {item.count}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Display selected item details */}
      {selectedItem && (
        <div className="p-4 text-left rounded-xl bg-amber-400">
          <div className="text-2xl font-semibold">
            Do you want to craft {selectedItem.name}?
            </div>
            <div className="text-2xl font-semibold">
            Cost: {selectedItem.wood || 0} wood, {selectedItem.ore || 0} ore, {selectedItem.gem || 0} gem, {selectedItem.leaf || 0} leaf
            </div>
            <CraftButton item={selectedItem}/>
          {/* Display other details of the selected item */}
          {/* Add buttons or actions for the selected item */}
        </div>
      )}
    </div>
  );
};

export default Items;
