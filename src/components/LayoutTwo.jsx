import React from "react";
import Materials from "./Materials";
import Character from "./Character";
import useCharacter from "./useCharacter";
import Items from "./Items";
import { GiWoodPile } from "react-icons/gi";
import { GiMinerals } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import { FaGem } from "react-icons/fa";
import { useState } from "react";
import ListOfItems from "./ListOfItems";

const LayoutTwo = () => {
  // MATERIALS
  const { listOfItems, updateItem, healthFromItems, strengthFromItems } =
    Items();
  const { woodCount, oreCount, leaf, gem, updateWoodCount, updateOreCount } =
    Materials();
  const character = useCharacter();

  // CARD FOR DISPLAYING MATERIALS
  const Card = ({ text, type, icon }) => {
    useState(text || 0);
    const updatedText = text;
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        {icon}
        <div className="mt-2 text-xl font-semibold">{type}</div>
        <div className="text-gray-600">{updatedText}</div>
      </div>
    );
  };

  return (
    /* MATERIALS */
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Card text={woodCount} type="Wood" icon={<GiWoodPile size={80} />} />
        <Card text={oreCount} type="Ore" icon={<GiMinerals size={80} />} />
        <Card text={leaf} type="Leaf" icon={<BiSolidLeaf size={80} />} />
        <Card text={gem} type="Gem" icon={<FaGem size={80} />} />
      </div>

      {/* CHARACTER */}
      <Character />
      {/* CRAFTING */}
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-2xl font-semibold">Crafting</div>
          <div className="text-gray-600">
            <ListOfItems
              itemList={listOfItems}
              updateItem={updateItem}
              oreCount={oreCount}
              woodCount={woodCount}
              updateOreCount={updateOreCount}
              updateWoodCount={updateWoodCount}
            />
          </div>
        </div>
      </div>

      {/* EQUIPPING */}
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-2xl font-semibold">Equipping</div>
          <div className="text-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTwo;
