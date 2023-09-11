import React, { useState, useEffect } from 'react';

const ClickButton = ({ text, onClick, storageKey }) => {
  // Initialize the count state with the value stored in localStorage or 0 if not found
  const [count, setCount] = useState(
    parseInt(localStorage.getItem(storageKey)) || 0
  );

  // Function to increment the count when the button is clicked
  const handleButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    // Store the updated count in localStorage using the unique storage key
    localStorage.setItem(storageKey, newCount.toString());

    // Call the parent onClick function if provided
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    // Update the count state when the component mounts
    const savedCount = parseInt(localStorage.getItem(storageKey));
    if (!isNaN(savedCount)) {
      setCount(savedCount);
    }
  }, [storageKey]);

  return (
    <button
      className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
      onClick={handleButtonClick}
    >
      <div className="flex-col justify-center">
        {text}<br />
        {count}
      </div>
    </button>
  );
};

export default ClickButton;
