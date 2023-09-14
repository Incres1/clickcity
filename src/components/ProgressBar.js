import React, { useEffect } from "react";

const ProgressBar = ({ experience, experienceToNextLevel, gainExperience }) => {
  // Calculate the progress percentage
  const progressPercentage = (experience / experienceToNextLevel) * 100;
  useEffect(() => {
    // Check if the character has leveled up
    if (experience >= experienceToNextLevel) {
      // Reset the character's experience and update their level
      gainExperience(0);
      // You can handle level-up logic here as well
    }
  }, [experience, experienceToNextLevel, gainExperience]);

  return (
    <div className="w-full h-12 bg-gray-300 rounded-lg text-center text-xs text-black relative">
      <div
        className="h-full bg-blue-500 rounded-lg absolute top-0 left-0"
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-bold">Experience: {experience} / {experienceToNextLevel} </p>
      </div>
    </div>
  );
};

export default ProgressBar;
