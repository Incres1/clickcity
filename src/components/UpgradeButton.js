import React, { useState, useEffect } from "react";

const UpgradeButton = ({ text, cost, storageKey }) => {
  const [count, setCount] = useState(() => {
    const savedCount = parseInt(localStorage.getItem(storageKey)) || 0;
    return savedCount;
  });

  const handleButtonClick = () => {
    if (count >= cost) {
      const newCount = count - cost;
      setCount(newCount);
      localStorage.setItem(storageKey, newCount.toString());
    } else {
      alert("Not enough resources!");
    }
  };

  useEffect(() => {
    // No need to re-fetch the savedCount here, useState initializer handles it
  }, []);

  return (
    <button
      className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
      onClick={handleButtonClick}
    >
      <div className="flex-col justify-center">
        {text}
        <br />
        Cost: {cost}
      </div>
    </button>
  );
};

export default UpgradeButton;
