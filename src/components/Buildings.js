import { useEffect, useState } from "react";
const Buildings = () => {
  //SETUP BUILDINGS LEVEL
  const [buildingsLevel, setBuildingsLevel] = useState(
    parseInt(localStorage.getItem("buildingsLevel")) || 1
  );
  //SETUP BUILDING LIST
  const buildingList = {
    mine: {
      name: "Mine",
      wood: 500,
      ore: 1000,
      count: 0,
      oreIncrement: 1,
    },
    lumbermill: {
      name: "Lumbermill",
      wood: 1000,
      ore: 500,
      count: 0,
      woodIncrement: 1,
    },
  };

  //INITIAL BUILDING LIST
  const [listOfBuildings, setListOfBuildings] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem("listOfBuildings"));
    return savedList || buildingList;
  });

  //UPDATES
  const updateBuildingsLevel = (newCount) => {
    setBuildingsLevel(newCount);
    localStorage.setItem("buildingsLevel", newCount);
  };

  const updateBuildingList = (list) => {
    setListOfBuildings(list);
    localStorage.setItem("listOfBuildings", JSON.stringify(list));
  };

  const updateBuilding = (building) => {
    const updatedList = { ...listOfBuildings };
    switch (building.name) {
      case "Mine":
        updatedList.mine.count += 1;
        updateBuildingList(updatedList);
        break;
      case "Lumbermill":
        updatedList.lumbermill.count += 1;
        updateBuildingList(updatedList);
        break;
      default:
        break;
    }
  };

  //SWITCH STATE TO GET INCREMENT
  const getIncrement = (building) => {
    if (building.count > 0) {
      switch (building.name) {
        case "Mine":
          return building.oreIncrement;
        case "Lumbermill":
          return building.woodIncrement;
        default:
          break;
      }
    } else {
      return 0;
    }
  };

  //CHECK IF ELIGIBLE FOR INCREMENT
  const eligibleForIncrement = () => {
    let eligible = false;
    for (const key in listOfBuildings) {
      if (listOfBuildings[key].count > 0) {
        eligible = true;
      }
    }
    return eligible;
  };

  return {
    listOfBuildings,
    updateBuilding,
    getIncrement,
    eligibleForIncrement,
    buildingsLevel,
    updateBuildingsLevel,
  };
};

export default Buildings;
