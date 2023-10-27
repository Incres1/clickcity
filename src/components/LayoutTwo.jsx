import React from "react";
import Materials from "./Materials";
import Character from "./Character";
import Items from "./Items";
import { GiWoodPile } from "react-icons/gi";
import { GiMinerals } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import { FaGem } from "react-icons/fa";
import { useState } from "react";
import ListOfItems from "./ListOfItems";
import Inventory from "./Inventory";

const LayoutTwo = () => {
  // MATERIALS
  const {
    listOfItems,
    updateItem,
    healthFromItems,
    strengthFromItems,
    luckFromitems,
  } = Items();
  const {
    woodCount,
    oreCount,
    leaf,
    gem,
    updateWoodCount,
    updateOreCount,
    updateGemCount,
    updateLeafCount,
  } = Materials();
  const {
    strength,
    dexterity,
    health,
    intelligence,
    luckiness,
    gold,
    level,
    experience,
    experienceToNextLevel,
    skillPoints,
    updateGold,
    skillAllocation,
  } = Character();

  // CARD FOR DISPLAYING MATERIALS
  const Card = ({ text, type, icon }) => {
    useState(text || 0);
    const updatedText = text;
    return (
      <div className="max-content">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div>{icon}</div>

          <div className="mt-2 text-xl font-semibold">{type}</div>
          <div className="text-gray-600">{updatedText}</div>
        </div>
      </div>
    );
  };

  // CARD FOR DISPLAYING SKILLS
  const StatCard = ({ text, type, skill, statsFromItems }) => {
    useState(skill || 0);
    const actualskill = skill;

    const handleLevelSkillAllocation = () => {
      skillAllocation(actualskill);
    };

    return (
      <div className="max-content">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-2xl font-semibold">
            {text} (+{statsFromItems})
          </div>
          <div className="text-gray-600">{type}</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLevelSkillAllocation}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  //CARD FOR DISPLAYING OTHER CHARACTER DETAILS
  const LevelCard = ({ text, type }) => {
    return (
      <div className="max-content flex-wrap">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-2xl font-semibold">{text}</div>
          <div className="text-gray-600">{type}</div>
        </div>
      </div>
    );
  };

  return (
    /* MATERIALS */

    <div className="grid h-screen grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Card text={woodCount} type="Wood" icon={<GiWoodPile size={80} />} />
        <Card text={oreCount} type="Ore" icon={<GiMinerals size={80} />} />
        <Card text={leaf} type="Leaf" icon={<BiSolidLeaf size={80} />} />
        <Card text={gem} type="Gem" icon={<FaGem size={80} />} />
      </div>

      {/* CHARACTER */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          text={strength}
          type="Strength"
          skill={"strength"}
          statsFromItems={strengthFromItems}
        />
        <StatCard text={dexterity} type="Dexterity" skill={"dexterity"} />
        <StatCard
          text={health}
          type="Health"
          skill={"health"}
          statsFromItems={healthFromItems}
        />
        <StatCard
          text={intelligence}
          type="Intelligence"
          skill={"intelligence"}
        />
        <StatCard
          text={luckiness}
          type="Luckiness"
          skill={"luckiness"}
          statsFromItems={luckFromitems}
        />
        <LevelCard text={gold} type="Gold" />
        <LevelCard text={level} type="Level" />
        <LevelCard text={experience} type="Experience" />
        <LevelCard
          text={experienceToNextLevel}
          type="Experience required to level up"
        />
        <LevelCard text={skillPoints} type="Skill Points" />
      </div>
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
              leafCount={leaf}
              gemCount={gem}
              updateGemCount={updateGemCount}
              updateLeafCount={updateLeafCount}
              updateOreCount={updateOreCount}
              updateWoodCount={updateWoodCount}
            />
          </div>
        </div>
      </div>

      {/* EQUIPPING */}
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-2xl font-semibold">Your Inventory:</div>
          <Inventory
            listOfItems={listOfItems}
            updateItem={updateItem}
            gold={gold}
            updateGold={updateGold}
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutTwo;
