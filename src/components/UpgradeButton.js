import { useState, useEffect } from "react";

const UpgradeButton = ({ text, cost, initialValue, updateCount, updateIncrement, increment, updateCost, toast }) => {
    const [count, setCount] = useState(initialValue || 0);

    
    useEffect(() => {
        // Check if initialValue is different from the current count in state
        if (initialValue !== count) {
            setCount(initialValue);
        }
    }, [initialValue]);
    
  
    const handleButtonClick = () => {
      if (count >= cost) {
        const newCount = count - cost;
        const newIncrement = increment + 1;
        const newCost = cost * 2;
        setCount(newCount);
        updateCount(newCount);
        updateCost(newCost);
        updateIncrement(newIncrement);
        
        const message = `You have upgraded your ${text}!`;
        toast(message, "success");
      } else {
        const message = `You do not have enough resources to upgrade!`;
        toast(message, "error");
      }
      
    };
    return (
      <button
        className="border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          <p className="text-3xl font-bold">Upgrade {text}</p>
          <p className="text-xl">Cost: {cost}</p>
          <p className="text-lg font-bold">You have: {count}</p>
        </div>
      </button>

    );
  };
  
export default UpgradeButton;