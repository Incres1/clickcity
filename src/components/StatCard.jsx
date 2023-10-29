import React, { useState } from "react";
const StatCard = ({
  text,
  type,
  skill,
  statsFromItems,
  skillAllocation,
  skillPoints,
}) => {
  useState(skill || 0);
  const actualskill = skill;
  const skillValue = text + statsFromItems;
  const handleLevelSkillAllocation = () => {
    skillAllocation(actualskill);
  };

  return (
    <div className="max-content">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="text-2xl font-semibold">{skillValue || 0}</div>
        <div className="text-gray-600">{type}</div>
        {skillPoints > 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLevelSkillAllocation}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default StatCard;
