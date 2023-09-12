import React, {useState} from "react";
import Materials from "./Materials";
import Character from "./Character";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LayoutOne= () => {
  const {
    woodCount,
    oreCount,
    woodIncrement,
    oreIncrement,
    leaf,
    gem,
    generateRandomNumber,
    axeCost,
    pickaxeCost,
    updateWoodCount,
    updateOreCount,
    updateWoodIncrement,
    updateOreIncrement,
    updateLeafCount,
    updateGemCount,
    updateAxeCost,
    updatePickaxeCost,
  } = Materials();
  const {
    gainExperience,
  } = Character();
  

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
          toast(message, "success");
        } else {
          const message = `You do not have enough resources to upgrade!`;
          toast(message, "error");
        }
        
      };
      return (
        <button
          className="w-1/4 h-1/4 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
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
  
    const ClickButton = ({ text, onClick, initialValue, updateCount, increment, randomItem, toast, updateRareMaterials, rareMaterial, rareMaterialType, gainExperience }) => {
      const [count, setCount] = useState(initialValue || 0);
      
      const handleButtonClick = () => {
        const randomNumber = randomItem(100);
        //Check if eligible for rare material
        if (randomNumber > 95) {
          updateRareMaterials(rareMaterial + 1);
          const message = `You have received a ${rareMaterialType}!`;
          toast(message, "success");
        } 
        //check if eligible for experience
        if (randomNumber < 70) {
          gainExperience(1);
          const message = `You have gained 1 experience!`;
          toast(message, "success");
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
          className="w-1/4 h-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
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
  
    const showToastMessage = (message, type) => {
      if (type === "error") {
          toast.error(message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
              
          });
      }
      else if (type === "success") {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          
      });
      }
      
  };
  
    //GAME
  
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          {/* Pass initial values as props */}
          <ClickButton text="Wood" initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateLeafCount} rareMaterial={leaf} rareMaterialType="Leaf" gainExperience={gainExperience} />
          <ClickButton text="Ore" initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateGemCount} rareMaterial={gem} rareMaterialType="Gem" gainExperience={gainExperience}/>
        </div>
        <div className="flex space-x-4">
          {/* Pass the cost as a number (not a string) */}
          <UpgradeButton text="Axe" cost={axeCost} initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} updateIncrement={updateWoodIncrement} updateCost={updateAxeCost} toast={showToastMessage} />
          <UpgradeButton text="Pickaxe" cost={pickaxeCost} initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} updateIncrement={updateOreIncrement} updateCost={updatePickaxeCost} toast={showToastMessage}/>
        </div>
        <ToastContainer />
      </div>
    );
    };
    

export default LayoutOne;