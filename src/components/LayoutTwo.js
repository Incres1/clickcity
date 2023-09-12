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
      <div className="flex justify-center border-gray-500 border-2 rounded-xl p-4 text-center">
        <div className="flex-col justify-center">
          <div className="flex-none justify-center">
          {icon}
          </div>
          <div className="flex-none justify-center">
          {type}
          </div>
          <div className="flex-none justify-center">
          {text}
          </div>
        </div>
      </div>
    )};

  return (
    <div className="flex space-x-4">
    <Card text="Wood" type={woodCount} icon={<GiWoodPile size={80}/>} />
    <Card text="Ore" type={oreCount} icon={<GiMinerals size={80}/>} />
    <Card text="Leaf" type={leaf} icon={<BiSolidLeaf size={80}/>} />
    <Card text="Gem" type={gem} icon={<FaGem size={80}/>} />
    </div>
);
};

export default LayoutTwo;