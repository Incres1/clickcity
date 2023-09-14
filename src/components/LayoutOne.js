import React, {useState} from "react";
import Materials from "./Materials";
import Character from "./Character";
import ProgressBar from "./ProgressBar";
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
    experience,
    experienceToNextLevel,
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
          className="border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
          onClick={handleButtonClick}
        >
          <div className="flex-col justify-center">
            <p className="text-3xl font-bold">Upgrade {text}</p>
            <p className="text-xl">Cost: {cost}</p>
            <p className="text-lg font-bold">You have: {count}</p>
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
          className=" border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
          onClick={handleButtonClick}
        >
          <div className="flex-col justify-center">
            <p className="text-3xl font-bold">Get {text}</p>
            <p className="text-xl">You have: {count} {text}</p>
            <p className="text-lg font-bold">Level: {increment}</p>
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
      <div className="grid h-screen grid-rows-2 grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
          {/* Pass initial values as props */}
          <ClickButton text="Wood" initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateLeafCount} rareMaterial={leaf} rareMaterialType="Leaf" gainExperience={gainExperience} />
          <ClickButton text="Ore" initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} randomItem={generateRandomNumber} toast={showToastMessage} updateRareMaterials={updateGemCount} rareMaterial={gem} rareMaterialType="Gem" gainExperience={gainExperience}/>


          {/* Pass the cost as a number (not a string) */}
          <UpgradeButton text="Axe" cost={axeCost} initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} updateIncrement={updateWoodIncrement} updateCost={updateAxeCost} toast={showToastMessage} />
          <UpgradeButton text="Pickaxe" cost={pickaxeCost} initialValue={oreCount} updateCount={updateOreCount} increment={oreIncrement} updateIncrement={updateOreIncrement} updateCost={updatePickaxeCost} toast={showToastMessage}/>


          </div>
          <ProgressBar
            experience={experience} // Pass character's experience
            experienceToNextLevel={experienceToNextLevel} // Pass character's experienceToNextLevel
            gainExperience={gainExperience} // Pass the gainExperience function
              />
          
          

        <ToastContainer />
      </div>
    );
    };
    

export default LayoutOne;