import React from "react";
import Materials from "./Materials";
import ProgressBar from "./ProgressBar";
import ClickButton from "./ClickButton";
import UpgradeButton from "./UpgradeButton";
import Buildings from "./Buildings";
import BuyBuildingList from "./BuyBuildingList";
import ResourceGain from "./ResourceGain";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import useCharacter from "./useCharacter"; // Import the useCharacter hook
import generateRandomNumber from "./GenerateRandom";

const LayoutOne = () => {
  const [intervalId, setIntervalId] = useState(null);
  const character = useCharacter(); // Use the useCharacter hook

  const { handleResourceGain } = ResourceGain();
  const { useWood, useOre, useRareMaterials, useMaterialCosts } = Materials();
  const { woodCount, woodIncrement, updateWoodCount, updateWoodIncrement } =
    useWood();

  const { oreCount, oreIncrement, updateOreCount, updateOreIncrement } =
    useOre();

  const { leaf, gem, updateLeafCount, updateGemCount } = useRareMaterials();

  const { axeCost, pickaxeCost, updateAxeCost, updatePickaxeCost } =
    useMaterialCosts();

  const {
    updateBuilding,
    updateBuildingList,
    updateBuildingsLevel,
    buildingsLevel,
    listOfBuildings,
    getIncrement,
    eligibleForIncrement,
  } = Buildings();

  // TOAST CONTAINER

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

  // TIMER
  useEffect(() => {
    // Start the timer when the component mounts
    if (eligibleForIncrement()) {
      const id = setInterval(() => {
        handleResourceGain(
          updateLeafCount(1),
          leaf,
          "Leaf",
          character.gainExperience(1),
          showToastMessage,
          listOfBuildings.lumbermill.count *
            listOfBuildings.lumbermill.woodIncrement,
          updateWoodCount(useWood.woodIncrement),
          woodCount
        );

        handleResourceGain(
          updateGemCount(1),
          gem,
          "Gem",
          character.gainExperience(1),
          showToastMessage,
          listOfBuildings.mine.count * listOfBuildings.mine.oreIncrement,
          updateOreCount(oreIncrement),
          oreCount
        );
      }, 1000 / buildingsLevel);

      // Save the interval ID in the state
      setIntervalId(id);

      // Clean up the interval when the component unmounts
      return () => clearInterval(id);
    }
  }, [woodCount, oreCount]);

  // GAME

  return (
    <div className="grid h-screen grid-rows-2 grid-cols-2 gap-4">
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
          gainExperience={character.gainExperience}
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
          gainExperience={character.gainExperience}
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
          experience={character.experience} // Pass character's experience
          experienceToNextLevel={character.experienceToNextLevel} // Pass character's experienceToNextLevel
          gainExperience={character.gainExperience} // Pass the gainExperience function
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
