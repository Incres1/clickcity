import React, {useEffect, useState} from "react";
import Materials from "./Materials";
import Character from "./Character";
import ProgressBar from "./ProgressBar";
import ClickButton from "./ClickButton";
import UpgradeButton from "./UpgradeButton";
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
          <div className="grid grid-cols-5 grid-rows-1">
          <ProgressBar
            experience={experience} // Pass character's experience
            experienceToNextLevel={experienceToNextLevel} // Pass character's experienceToNextLevel
            gainExperience={gainExperience} // Pass the gainExperience function
              />
          </div>
          <div>
            hej
          </div>
          
          
          

        <ToastContainer />
      </div>
    );
    };
    

export default LayoutOne;