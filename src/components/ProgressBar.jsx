import React, { useEffect } from "react";

const ProgressBar = ({ experience, experienceToNextLevel, gainExperience }) => {
  // Calculate the progress percentage
  const progressPercentage = (experience / experienceToNextLevel) * 100;
  const progressBarHeight = `${progressPercentage}%`; // Use this to set the height

  useEffect(() => {
    // Check if the character has leveled up
    if (experience >= experienceToNextLevel) {
      // Reset the character's experience and update their level
      gainExperience(0);
      // You can handle level-up logic here as well
    }
  }, [experience, experienceToNextLevel, gainExperience]);

  return (
    <div className="h-full bg-gray-300 rounded-lg text-center text-xs text-black relative">
      <div
        className="w-full bg-blue-500 rounded-lg absolute bottom-0 left-0"
        style={{ height: progressBarHeight }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-bold">Experience: {experience} / {experienceToNextLevel} </p>
      </div>
    </div>
  );
};

export default ProgressBar;
