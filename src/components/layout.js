// src/components/Layout.js
import React, {useState, useEffect} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GiWoodPile} from 'react-icons/gi';
import {GiMinerals} from 'react-icons/gi';

import ColumnButton from './ColumnButton';


//LAYOUT ONE

const LayoutOne = ({ children }) => {
  // Define initial values for Wood and ore counts & increments
  const [woodCount, setWoodCount] = useState(
    parseInt(localStorage.getItem("woodCount")) || 40
  );
  const [oreCount, setOreCount] = useState(
    parseInt(localStorage.getItem("oreCount")) || 40
  );

  const [woodIncrement, setWoodIncrement] = useState(
    parseInt(localStorage.getItem("woodIncrement")) || 1
  );
  const [oreIncrement, setoreIncrement] = useState(
    parseInt(localStorage.getItem("oreIncrement")) || 1
  );

  //RARE MATERIALS

  const [leaf, setLeaf] = useState(
    parseInt(localStorage.getItem("leaf")) || 0
  );
  const [gem, setGem] = useState(
    parseInt(localStorage.getItem("gem")) || 0
  );




  //RANDOM NUMBER GENERATOR
  const generateRandomNumber = (threshold) => {
    var randomNumber = Math.floor(Math.random() * threshold) + 1;
    return randomNumber;
  };


  //COSTS

  const [axeCost, setAxeCost] = useState(
    parseInt(localStorage.getItem("axeCost")) || 40
  );

  const [pickaxeCost, setPickaxeCost] = useState(
    parseInt(localStorage.getItem("pickaxeCost")) || 40
  );

  

  
  //UPDATES
  const updateWoodCount = (newCount) => {
    setWoodCount(newCount);
    localStorage.setItem("woodCount", newCount);
  };

  const updateOreCount = (newCount) => {
    setOreCount(newCount);
    localStorage.setItem("oreCount", newCount);
  };

  const updateLeafCount = (newCount) => {
    setLeaf(newCount);
    localStorage.setItem("leaf", newCount);
  };

  const updateGemCount = (newCount) => {
    setGem(newCount);
    localStorage.setItem("gem", newCount);
  };

  const updateWoodIncrement = (newCount) => {
    setWoodIncrement(newCount);
    localStorage.setItem("woodIncrement", newCount);
  };

  const updateoreIncrement = (newCount) => {
    setoreIncrement(newCount);
    localStorage.setItem("oreIncrement", newCount);
  };

  const updateAxeCost = (newCount) => {
    setAxeCost(newCount);
    localStorage.setItem("axeCost", newCount);
  };

  const updatePickaxeCost = (newCount) => {
    setPickaxeCost(newCount);
    localStorage.setItem("pickaxeCost", newCount);
  };


  useEffect(() => {
    // Update the local storage when resourceCounts change
    localStorage.setItem("woodCount", woodCount);
    localStorage.setItem("oreCount", oreCount);
  }, [woodCount, oreCount]);




  //UPGRADE BUTTON
  const UpgradeButton = ({ text, cost, initialValue, updateCount, updateIncrement, increment, updateCost, toast }) => {
    const [count, setCount] = useState(initialValue || 0);

    
  
    const handleButtonClick = () => {
      if (count >= cost) {
        const newCount = count - cost;
        const newIncrement = increment + 1;
        const newCost = cost * 2;
        updateCost(newCost);
        updateIncrement(newIncrement);
        setCount(newCount);
        updateCount(newCount);
        const message = `You have upgraded your ${text}!`;
        toast(message);
      } else {
        alert("Not enough resources!");
      }
      
    };
    return (
      <button
        className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          Upgrade {text}
          <br />
          Cost: {cost}
          <br />
          You have: {count}
        </div>
      </button>

    );
  };


  //CLICK BUTTON

  const ClickButton = ({ text, onClick, initialValue, updateCount, increment, randomItem, toast, updateRareMaterials, rareMaterial, rareMaterialType }) => {
    const [count, setCount] = useState(initialValue || 0);
    
    const handleButtonClick = () => {
      const randomNumber = randomItem(100);
      console.log(randomNumber);
      if (randomNumber > 95) {
        updateRareMaterials(rareMaterial + 1);
        const message = `You have received a ${rareMaterialType}!`;
        toast(message);
      }

        
      const newCount = count + increment;
      setCount(newCount);
      if (onClick) {
        onClick();
      }
      updateCount(newCount);
    };
  
  
    return (
      <button
        className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          {text}<br />
          {count} <br />
          Level: {increment} <br />
        </div>
      </button>
    );
  };



  //TOAST CONTAINER

  const showToastMessage = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        
    });
};

  //GAME

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-1/2 space-x-4">
        {/* Pass initial values as props */}
        <ClickButton text="Wood" initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateLeafCount} rareMaterial={leaf} rareMaterialType="Leaf" />
        <ClickButton text="Ore" initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateGemCount} rareMaterial={gem} rareMaterialType="Gem" />
      </div>
      <div className="flex h-1/2 space-x-4">
        {/* Pass the cost as a number (not a string) */}
        <UpgradeButton text="Axe" cost={axeCost} initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} updateIncrement={updateWoodIncrement} updateCost={updateAxeCost} toast={showToastMessage} />
        <UpgradeButton text="Pickaxe" cost={pickaxeCost} initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} updateIncrement={updateoreIncrement} updateCost={updatePickaxeCost} toast={showToastMessage}/>
      </div>
      <ToastContainer />
    </div>
  );
};


//LAYOUT TWO

const LayoutTwo = ({ children }) => {
  

  return (
      <div className="flex">
      Two
      </div>
  );
  };





const Layout = ({ children }) => {
    const [selectedContent, setSelectedContent] = useState('');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
      };
      return (
        <div className="flex">
          {/* Left Side Column */}
          <div className="w-1/4 h-screen bg-gray-200 p-4 space-y-4">
            {/* Add your left-side content here */}
            <div className="grid space-y-4">
              <ColumnButton
                text="Forest"
                onClick={() => handleButtonClick(<LayoutOne />)}
              />
              <ColumnButton
                text="Inventory"
                onClick={() => handleButtonClick(<LayoutTwo />)}
              />
              {/* Add more buttons as needed */}
            </div>
          </div>
          {/* Right Side Content */}
          <div className="w-3/4 p-4 h-screen">
            <div>{selectedContent}</div>
            {/* Display the selected content */}
            
          </div>
        </div>
      );
    };
    
    export default Layout;
    
    
    
    