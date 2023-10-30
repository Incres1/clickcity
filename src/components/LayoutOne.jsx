import React from "react";
import Materials from "./Materials";
import Character from "./Character";
import ProgressBar from "./ProgressBar";
import ClickButton from "./ClickButton";
import UpgradeButton from "./UpgradeButton";
import Buildings from "./Buildings";
import BuyBuildingList from "./BuyBuildingList";
import ResourceGain from "./ResourceGain";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

const LayoutOne = () => {
  const [intervalId, setIntervalId] = useState(null);
  const { handleResourceGain } = ResourceGain();
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
  const { gainExperience, experience, experienceToNextLevel } = Character();

  const {
    updateBuilding,
    updateBuildingList,
    updateBuildingsLevel,
    buildingsLevel,
    listOfBuildings,
    getIncrement,
    eligibleForIncrement,
  } = Buildings();

  //TOAST CONTAINER

  const showToastMessage = (message, type) => {
    if (type === "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    } else if (type === "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };

  //TIMER
  useEffect(() => {
    localStorage.setItem("experience", experience);
    // Start the timer when the component mounts
    if (eligibleForIncrement()) {
      const id = setInterval(() => {
        // This function will be called every second
        localStorage.setItem("experience", experience);
        handleResourceGain(
          updateLeafCount,
          leaf,
          "Leaf",
          gainExperience,
          showToastMessage,
          listOfBuildings.lumbermill.count *
            listOfBuildings.lumbermill.woodIncrement,
          updateWoodCount,
          woodCount
        );

        handleResourceGain(
          updateGemCount,
          gem,
          "Gem",
          gainExperience,
          showToastMessage,
          listOfBuildings.mine.count * listOfBuildings.mine.oreIncrement,
          updateOreCount,
          oreCount
        );
        localStorage.setItem("woodCount", woodCount);
        localStorage.setItem("oreCount", oreCount);
        localStorage.setItem("leaf", leaf);
        localStorage.setItem("gem", gem);
        // Call your desired function here
        // For example: myFunctionToCallEverySecond();
      }, 1000 / buildingsLevel);

      // Save the interval ID in the state
      setIntervalId(id);

      // Clean up the interval when the component unmounts
      return () => clearInterval(id);
    }
  }, [woodCount, oreCount, leaf, gem]);

  //GAME

  return (
    <div className="grid h-screen gap-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Pass initial values as props */}
        <ClickButton
          text="Wood"
          initialValue={woodCount}
          updateCount={updateWoodCount}
          increment={woodIncrement}
          randomItem={generateRandomNumber}
          toast={showToastMessage}
          updateRareMaterials={updateLeafCount}
          rareMaterial={leaf}
          rareMaterialType="Leaf"
          gainExperience={gainExperience}
        />
        <ClickButton
          text="Ore"
          initialValue={oreCount}
          updateCount={updateOreCount}
          increment={oreIncrement}
          randomItem={generateRandomNumber}
          toast={showToastMessage}
          updateRareMaterials={updateGemCount}
          rareMaterial={gem}
          rareMaterialType="Gem"
          gainExperience={gainExperience}
        />

        {/* Pass the cost as a number (not a string) */}
        <UpgradeButton
          text="Axe"
          cost={axeCost}
          initialValue={woodCount}
          updateCount={updateWoodCount}
          increment={woodIncrement}
          updateIncrement={updateWoodIncrement}
          updateCost={updateAxeCost}
          toast={showToastMessage}
        />
        <UpgradeButton
          text="Pickaxe"
          cost={pickaxeCost}
          initialValue={oreCount}
          updateCount={updateOreCount}
          increment={oreIncrement}
          updateIncrement={updateOreIncrement}
          updateCost={updatePickaxeCost}
          toast={showToastMessage}
        />
      </div>
      <div className="grid grid-cols-5 grid-rows-1">
        <ProgressBar
          experience={experience} // Pass character's experience
          experienceToNextLevel={experienceToNextLevel} // Pass character's experienceToNextLevel
          gainExperience={gainExperience} // Pass the gainExperience function
        />
      </div>
      <div>
        <BuyBuildingList
          buildings={listOfBuildings}
          updateBuilding={updateBuilding}
          oreCount={oreCount}
          woodCount={woodCount}
          updateOreCount={updateOreCount}
          updateWoodCount={updateWoodCount}
          toast={showToastMessage}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default LayoutOne;
