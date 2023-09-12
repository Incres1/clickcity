import React from "react";
import Materials from "./Materials";
import {GiWoodPile} from 'react-icons/gi';
import {GiMinerals} from 'react-icons/gi';
import {BiSolidLeaf} from 'react-icons/bi';
import {FaGem} from 'react-icons/fa';


const LayoutTwo = () => {
  //MATERIALS
  const {
    woodCount,
    oreCount,
    leaf,
    gem,
  } = Materials();

  //CARD FOR DISPLAY

  const Card = ({ text, type, icon }) => {

    return (
      <div className="flex border-gray-500 border-2 rounded-xl p-4 text-center">
        <div className="flex-col justify-center">
          <div className="flex justify-center">
          {icon}
          </div>
          {type}
        </div>
      </div>
    )};

  return (
    <div className="flex">
    <Card text="Wood" type={woodCount} icon={<GiWoodPile />} />
    <Card text="Ore" type={oreCount} icon={<GiMinerals />} />
    <Card text="Leaf" type={leaf} icon={<BiSolidLeaf />} />
    <Card text="Gem" type={gem} icon={<FaGem />} />
    </div>
);
};

export default LayoutTwo;