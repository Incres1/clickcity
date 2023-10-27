import { useState, useEffect } from "react";

const Materials = () => {
const useWood = () => {
  const [woodCount, setWoodCount] = useState(
    parseInt(localStorage.getItem("woodCount")) || 40000
  );

  const [woodIncrement, setWoodIncrement] = useState(
    parseInt(localStorage.getItem("woodIncrement")) || 1
  );

  const updateWoodCount = (newCount) => {
    setWoodCount(newCount);
    localStorage.setItem("woodCount", newCount);
  };

  const updateWoodIncrement = (newCount) => {
    setWoodIncrement(newCount);
    localStorage.setItem("woodIncrement", newCount);
  };

  useEffect(() => {
    localStorage.setItem("woodCount", woodCount);
  }, [woodCount]);

  return { woodCount, woodIncrement, updateWoodCount, updateWoodIncrement };
};

const useOre = () => {
  const [oreCount, setOreCount] = useState(
    parseInt(localStorage.getItem("oreCount")) || 40000
  );

  const [oreIncrement, setOreIncrement] = useState(
    parseInt(localStorage.getItem("oreIncrement")) || 1
  );

  const updateOreCount = (newCount) => {
    setOreCount(newCount);
    localStorage.setItem("oreCount", newCount);
  };

  const updateOreIncrement = (newCount) => {
    setOreIncrement(newCount);
    localStorage.setItem("oreIncrement", newCount);
  };

  useEffect(() => {
    localStorage.setItem("oreCount", oreCount);
  }, [oreCount]);

  return { oreCount, oreIncrement, updateOreCount, updateOreIncrement };
};

const useRareMaterials = () => {
  const [leaf, setLeaf] = useState(
    parseInt(localStorage.getItem("leaf")) || 400
  );

  const [gem, setGem] = useState(parseInt(localStorage.getItem("gem")) || 400);

  const updateLeafCount = (newCount) => {
    setLeaf(newCount);
    localStorage.setItem("leaf", newCount);
  };

  const updateGemCount = (newCount) => {
    setGem(newCount);
    localStorage.setItem("gem", newCount);
  };

  useEffect(() => {
    localStorage.setItem("leaf", leaf);
    localStorage.setItem("gem", gem);
  }, [leaf, gem]);

  return { leaf, gem, updateLeafCount, updateGemCount };
};

const useMaterialCosts = () => {
  const [axeCost, setAxeCost] = useState(
    parseInt(localStorage.getItem("axeCost")) || 40
  );

  const [pickaxeCost, setPickaxeCost] = useState(
    parseInt(localStorage.getItem("pickaxeCost")) || 40
  );

  const updateAxeCost = (newCount) => {
    setAxeCost(newCount);
    localStorage.setItem("axeCost", newCount);
  };

  const updatePickaxeCost = (newCount) => {
    setPickaxeCost(newCount);
    localStorage.setItem("pickaxeCost", newCount);
  };

  useEffect(() => {
    localStorage.setItem("axeCost", axeCost);
    localStorage.setItem("pickaxeCost", pickaxeCost);
  }, [axeCost, pickaxeCost]);

  return { axeCost, pickaxeCost, updateAxeCost, updatePickaxeCost };
};

return {
  useWood,
  useOre,
  useRareMaterials,
  useMaterialCosts,
}
}
export default Materials;
