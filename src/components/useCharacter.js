import { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

const useCharacterStats = () => {
  const statKeys = ["strength", "dexterity", "health", "intelligence", "luckiness"];
  const initialState = {
    strength: 1,
    dexterity: 1,
    health: 1,
    intelligence: 1,
    luckiness: 1,
  };

  const stats = Object.fromEntries(
    statKeys.map((key) => [key, useLocalStorage(key, initialState[key])])
  );

  return stats;
};

const useCharacterResources = () => {
  const resourceKeys = ["gold"];
  const initialState = {
    gold: 0,
  };

  const resources = Object.fromEntries(
    resourceKeys.map((key) => [key, useLocalStorage(key, initialState[key])])
  );

  return resources;
};

const useCharacterLevelInfo = () => {
  const levelKeys = ["level", "experience", "experienceToNextLevel", "skillPoints"];
  const initialState = {
    level: 1,
    experience: 0,
    experienceToNextLevel: 1,
    skillPoints: 0,
  };

  const levelInfo = Object.fromEntries(
    levelKeys.map((key) => [key, useLocalStorage(key, initialState[key])])
  );

  return levelInfo;
};

const useCharacter = () => {
  const stats = useCharacterStats();
  const resources = useCharacterResources();
  const levelInfo = useCharacterLevelInfo();

  const skillAllocation = (skill) => {
    if (levelInfo.skillPoints > 0) {
      switch (skill) {
        case "strength":
          stats.strength[1](stats.strength[0] + 1);
          levelInfo.skillPoints[1](levelInfo.skillPoints[0] - 1);
          break;
        case "dexterity":
          stats.dexterity[1](stats.dexterity[0] + 1);
          levelInfo.skillPoints[1](levelInfo.skillPoints[0] - 1);
          break;
        case "health":
          stats.health[1](stats.health[0] + 1);
          levelInfo.skillPoints[1](levelInfo.skillPoints[0] - 1);
          break;
        case "intelligence":
          stats.intelligence[1](stats.intelligence[0] + 1);
          levelInfo.skillPoints[1](levelInfo.skillPoints[0] - 1);
          break;
        case "luckiness":
          stats.luckiness[1](stats.luckiness[0] + 1);
          levelInfo.skillPoints[1](levelInfo.skillPoints[0] - 1);
          break;
        default:
          break;
      }
    }
  };

  const gainExperience = useCallback((newCount) => {
    levelInfo.experience[1]((prevExperience) => {
      const newExperience = prevExperience + newCount;
      if (newExperience >= levelInfo.experienceToNextLevel[0]) {
        levelInfo.level[1](levelInfo.level[0] + 1);
        levelInfo.experience[1](0);
        levelInfo.skillPoints[1](levelInfo.skillPoints[0] + 1);
        levelInfo.experienceToNextLevel[1](levelInfo.experienceToNextLevel[0] * 2);
      } else {
        levelInfo.experience[1](newExperience);
      }
    });
  });

  useEffect(() => {
    // Centralized local storage handling
    for (const [key, value] of Object.entries({ ...stats, ...resources, ...levelInfo })) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [stats, resources, levelInfo]);

  return {
    ...stats,
    ...resources,
    ...levelInfo,
    skillAllocation,
    gainExperience,
  };
};

export default useCharacter;
