import React from "react";
import Materials from "./Materials";
import Character from "./Character";
import { GiWoodPile } from "react-icons/gi";
import { GiMinerals } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import { FaGem } from "react-icons/fa";

const LayoutTwo = () => {
  // MATERIALS
  const { woodCount, oreCount, leaf, gem } = Materials();
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
  } = Character();

  // CARD FOR DISPLAYING MATERIALS
  const Card = ({ text, type, icon }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        {icon}
        <div className="mt-2 text-xl font-semibold">{type}</div>
        <div className="text-gray-600">{text}</div>
      </div>
    );
  };

  // CARD FOR DISPLAYING STATS
  const StatCard = ({ text, type }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="text-2xl font-semibold">{text}</div>
        <div className="text-gray-600">{type}</div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Card text={woodCount} type="Wood" icon={<GiWoodPile size={80} />} />
        <Card text={oreCount} type="Ore" icon={<GiMinerals size={80} />} />
        <Card text={leaf} type="Leaf" icon={<BiSolidLeaf size={80} />} />
        <Card text={gem} type="Gem" icon={<FaGem size={80} />} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard text={strength} type="Strength" />
        <StatCard text={dexterity} type="Dexterity" />
        <StatCard text={health} type="Health" />
        <StatCard text={intelligence} type="Intelligence" />
        <StatCard text={luckiness} type="Luckiness" />
        <StatCard text={gold} type="Gold" />
        <StatCard text={level} type="Level" />
        <StatCard text={experience} type="Experience" />
        <StatCard text={experienceToNextLevel} type="Experience required to level up" />
        <StatCard text={skillPoints} type="Skill Points" />
      </div>
    </div>
  );
};

export default LayoutTwo;
