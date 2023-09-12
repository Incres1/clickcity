import React, { useState, useEffect } from "react";

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


    const gainExperience = (newCount) => {
        const newExperience = experience + newCount;
        updateExperience(newExperience);
        if (newExperience >= experienceToNextLevel) {
            const newLevel = level + 1;
            updateExperience(0);
            updateLevel(newLevel);
            const newSkillPoints = skillPoints + 1;
            updateSkillPoints(newSkillPoints);
            const newExperienceToNextLevel = experienceToNextLevel * 2;
            updateExperienceToNextLevel(newExperienceToNextLevel);
        }
    };



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
    }
}



export default Character;