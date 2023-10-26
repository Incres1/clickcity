import { useState, useEffect, useCallback } from "react";

const Character = () => {

    //STATS
    const [strength, setStrength] = useState(
        parseInt(localStorage.getItem("strength")) || 1
    );
    const [dexterity, setDexterity] = useState(
        parseInt(localStorage.getItem("dexterity")) || 1
    );
    const [health, setHealth] = useState(
        parseInt(localStorage.getItem("health")) || 1
    );
    const [intelligence, setIntelligence] = useState(
        parseInt(localStorage.getItem("intelligence")) || 1
    );
    const [luckiness, setLuckiness] = useState(
        parseInt(localStorage.getItem("luckiness")) || 1
    );

    const [gold, setGold] = useState(
        parseInt(localStorage.getItem("gold")) || 0
    );
    const [level, setLevel] = useState(
        parseInt(localStorage.getItem("level")) || 1
    );
    const [experience, setExperience] = useState(
        parseInt(localStorage.getItem("experience")) || 0
    );
    const [experienceToNextLevel, setExperienceToNextLevel] = useState(
        parseInt(localStorage.getItem("experienceToNextLevel")) || 1
    );

    const [skillPoints, setSkillPoints] = useState(
        parseInt(localStorage.getItem("skillPoints")) || 0
    );


    // Update functions for stats

    const updateStrength = (newCount) => {
        setStrength(newCount);
        localStorage.setItem("strength", newCount);
    };

    const updateDexterity = (newCount) => {
        setDexterity(newCount);
        localStorage.setItem("dexterity", newCount);
    };

    const updateHealth = (newCount) => {
        setHealth(newCount);
        localStorage.setItem("health", newCount);
    };

    const updateIntelligence = (newCount) => {
        setIntelligence(newCount);
        localStorage.setItem("intelligence", newCount);
    };

    const updateLuckiness = (newCount) => {
        setLuckiness(newCount);
        localStorage.setItem("luckiness", newCount);
    };

    const updateGold = (newCount) => {
        setGold(newCount);
        localStorage.setItem("gold", newCount);
    };

    const updateLevel = (newCount) => {
        setLevel(newCount);
        localStorage.setItem("level", newCount);
    };

    const updateExperience = (newCount) => {
        setExperience(newCount);
        localStorage.setItem("experience", newCount);
    };

    const updateExperienceToNextLevel = (newCount) => {
        setExperienceToNextLevel(newCount);
        localStorage.setItem("experienceToNextLevel", newCount);
    };

    const updateSkillPoints = (newCount) => {
        setSkillPoints(newCount);
        localStorage.setItem("skillPoints", newCount);
    };

    //ELIGIBLE FOR SKILL POINTS
    const skillAllocation = (skill) => {
        
        if (skillPoints > 0) {
            if (skill === "strength") {
                const newStrength = strength + 1;
                updateStrength(newStrength);
                const newSkillPoints = skillPoints - 1;
                updateSkillPoints(newSkillPoints);
            }
            if (skill === "dexterity") {
                const newDexterity = dexterity + 1;
                updateDexterity(newDexterity);
                const newSkillPoints = skillPoints - 1;
                updateSkillPoints(newSkillPoints);
            }
            if (skill === "health") {
                const newHealth = health + 1;
                updateHealth(newHealth);
                const newSkillPoints = skillPoints - 1;
                updateSkillPoints(newSkillPoints);
            }
            if (skill === "intelligence") {
                const newIntelligence = intelligence + 1;
                updateIntelligence(newIntelligence);
                const newSkillPoints = skillPoints - 1;
                updateSkillPoints(newSkillPoints);
            }
            if (skill === "luckiness") {
                const newLuckiness = luckiness + 1;
                updateLuckiness(newLuckiness);
                const newSkillPoints = skillPoints - 1;
                updateSkillPoints(newSkillPoints);
            }
        }
    };

    const gainExperience = useCallback((newCount) => {
        setExperience((prevExperience) => {
          const newExperience = prevExperience + newCount;
          localStorage.setItem("experience", newExperience);
          if (newExperience >= experienceToNextLevel) {
            setLevel((prevLevel) => prevLevel + 1);
            setExperience(0);
            setSkillPoints((prevSkillPoints) => prevSkillPoints + 1);
            setExperienceToNextLevel(
              (prevExperienceToNextLevel) => prevExperienceToNextLevel * 2
            );
          }
          return newExperience;
        });
      }, [experienceToNextLevel]);

    useEffect(() => {
        localStorage.setItem("strength", strength);
        localStorage.setItem("dexterity", dexterity);
        localStorage.setItem("health", health);
        localStorage.setItem("intelligence", intelligence);
        localStorage.setItem("luckiness", luckiness);
        localStorage.setItem("gold", gold);
        localStorage.setItem("level", level);
        localStorage.setItem("experience", experience);
        localStorage.setItem("experienceToNextLevel", experienceToNextLevel);
        localStorage.setItem("skillPoints", skillPoints);
    }, [strength, dexterity, health, intelligence, luckiness, gold, level, experience, experienceToNextLevel, skillPoints]);



    return {
        strength,
        dexterity,
        health,
        intelligence,
        luckiness,
        gold,
        level,
        experience,
        experienceToNextLevel,
        skillPoints,
        updateStrength,
        updateDexterity,
        updateHealth,
        updateIntelligence,
        updateLuckiness,
        updateGold,
        updateLevel,
        updateExperience,
        updateExperienceToNextLevel,
        updateSkillPoints,
        gainExperience,
        skillAllocation,
    }
}



export default Character;