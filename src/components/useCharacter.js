import { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        // Attempt to parse the stored value
        const parsedValue = JSON.parse(storedValue);

        // If the parsed value is an array, use the first element as the value
        return Array.isArray(parsedValue) ? parsedValue[0] : parsedValue;
      } catch (error) {
        console.error(`Error parsing stored value for key ${key}: ${error}`);
      }
    }
    return initialValue;
  });

  const setStoredValue = (newValue) => {
    // Check if the value is already an array
    if (Array.isArray(value)) {
      value[0] = newValue;
      setValue([...value]); // Trigger re-render
    } else {
      setValue(newValue);
    }

    // Ensure the stored value is always stored as an array
    localStorage.setItem(key, JSON.stringify(Array.isArray(value) ? value : [value]));
  };

  return [value, setStoredValue];
};

const useCharacterStats = () => {
  const initialState = {
    strength: 1,
    dexterity: 1,
    health: 1,
    intelligence: 1,
    luckiness: 1,
  };

  const stats = {
    strength: useLocalStorage("strength", initialState.strength),
    dexterity: useLocalStorage("dexterity", initialState.dexterity),
    health: useLocalStorage("health", initialState.health),
    intelligence: useLocalStorage("intelligence", initialState.intelligence),
    luckiness: useLocalStorage("luckiness", initialState.luckiness),
  };

  return stats;
};

const useCharacterResources = () => {
  const initialState = {
    gold: 0,
  };

  const resources = {
    gold: useLocalStorage("gold", initialState.gold),
  };

  return resources;
};

const useCharacterLevelInfo = () => {
  const initialState = {
    level: 1,
    experience: 0,
    experienceToNextLevel: 1,
    skillPoints: 0,
  };

  const levelInfo = {
    level: useLocalStorage("level", initialState.level),
    experience: useLocalStorage("experience", initialState.experience),
    experienceToNextLevel: useLocalStorage("experienceToNextLevel", initialState.experienceToNextLevel),
    skillPoints: useLocalStorage("skillPoints", initialState.skillPoints),
  };

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
        levelInfo.experienceToNextLevel[1](
          levelInfo.experienceToNextLevel[0] * 2
        );
      } else {
        levelInfo.experience[1](newExperience);
      }
    });
  }, []);

  useEffect(() => {
    // Centralized local storage handling
    for (const [key, value] of Object.entries({
      ...stats,
      ...resources,
      ...levelInfo,
    })) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  return {
    ...stats,
    ...resources,
    ...levelInfo,
    skillAllocation,
    gainExperience,
  };
};

export default useCharacter;
