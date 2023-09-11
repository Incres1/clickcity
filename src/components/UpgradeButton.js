import React, {useEffect} from "react";

const UpgradeButton = ({ text, onClick, cost, onUpgrade, resources, storageKey }) => {

    var count = parseInt(localStorage.getItem(storageKey)) || 0;
    var canUpgrade = count > parseInt(cost);
    const handleUpgrade = () => {
        if (canUpgrade) {
          count = count - parseInt(cost);
        } else {
          alert("Cannot upgrade now. Check your resources or woodCount.");
        }
      };
    
      useEffect(() => {
        // Update the canUpgrade variable when woodCount changes
        const woodCountFromStorage =
          parseInt(localStorage.getItem("woodCount")) || 0;
        if (woodCountFromStorage > 50 && cost <= woodCountFromStorage) {
          canUpgrade = true;
        } else {
          canUpgrade = false;
        }
      }, [cost]);
  return (
    <button
      className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
      onClick={handleUpgrade}
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
