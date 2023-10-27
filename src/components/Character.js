import React from "react";
import useCharacter from "./useCharacter";

const Character = () => {
    const character = useCharacter();
  
    // You can access character attributes like character.strength, character.gold, etc.
    // Implement the eligible for skill points and gain experience functions here
  
    return (
        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Character Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Level: {character.level[0]}</p>
              <p>Experience: {character.experience[0]}</p>
              <p>Experience to Next Level: {character.experienceToNextLevel[0]}</p>
              <p>Skill Points: {character.skillPoints[0]}</p>
            </div>
            <div>
              <p className="font-semibold">Strength: {character.strength[0]}</p>
              <p>Dexterity: {character.dexterity[0]}</p>
              <p>Health: {character.health[0]}</p>
              <p>Intelligence: {character.intelligence[0]}</p>
              <p>Luckiness: {character.luckiness[0]}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Resources:</p>
            <p>Gold: {character.gold[0]}</p>
          </div>
        </div>
      );
    };
    
  
  export default Character;