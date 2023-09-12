// src/components/Materials.js
import React, { useState, useEffect } from "react";

const Materials = () => {
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
  const [oreIncrement, setOreIncrement] = useState(
    parseInt(localStorage.getItem("oreIncrement")) || 1
  );

  // RARE MATERIALS
  const [leaf, setLeaf] = useState(
    parseInt(localStorage.getItem("leaf")) || 0
  );
  const [gem, setGem] = useState(
    parseInt(localStorage.getItem("gem")) || 0
  );

  // RANDOM NUMBER GENERATOR
  const generateRandomNumber = (threshold) => {
    var randomNumber = Math.floor(Math.random() * threshold) + 1;
    return randomNumber;
  };

  // COSTS
  const [axeCost, setAxeCost] = useState(
    parseInt(localStorage.getItem("axeCost")) || 40
  );

  const [pickaxeCost, setPickaxeCost] = useState(
    parseInt(localStorage.getItem("pickaxeCost")) || 40
  );

  // Update functions for materials
  const updateWoodCount = (newCount) => {
    setWoodCount(newCount);
    localStorage.setItem("woodCount", newCount);
  };

  const updateOreCount = (newCount) => {
    setOreCount(newCount);
    localStorage.setItem("oreCount", newCount);
  };

  const updateWoodIncrement = (newCount) => {
    setWoodIncrement(newCount);
    localStorage.setItem("woodIncrement", newCount);
  };

  const updateOreIncrement = (newCount) => {
    setOreIncrement(newCount);
    localStorage.setItem("oreIncrement", newCount);
  };

  const updateLeafCount = (newCount) => {
    setLeaf(newCount);
    localStorage.setItem("leaf", newCount);
  };

  const updateGemCount = (newCount) => {
    setGem(newCount);
    localStorage.setItem("gem", newCount);
  };

  // Update functions for costs
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

  return {
    woodCount,
    oreCount,
    woodIncrement,
    oreIncrement,
    leaf,
    gem,
    axeCost,
    pickaxeCost,
    generateRandomNumber,
    updateWoodCount,
    updateOreCount,
    updateWoodIncrement,
    updateOreIncrement,
    updateLeafCount,
    updateGemCount,
    updateAxeCost,
    updatePickaxeCost,
  };
};

export default Materials;
