import { useState, useEffect } from "react";

//CLICK BUTTON
  
const ClickButton = ({ text, initialValue, updateCount, increment, randomItem, toast, updateRareMaterials, rareMaterial, rareMaterialType, gainExperience }) => {
    const [count, setCount] = useState(initialValue || 0);

    useEffect(() => {
        // Check if initialValue is different from the current count in state
        if (initialValue !== count) {
            setCount(initialValue);
        }
    }, [initialValue, count]);

    const handleButtonClick = () => {
      const randomNumber = randomItem(100);
      //Check if eligible for rare material
      if (randomNumber > 95) {
        updateRareMaterials(rareMaterial + 1);
        const message = `You have received a ${rareMaterialType}!`;
        toast(message, "success");
      } 
      //check if eligible for experience
      if (randomNumber < 70) {
        gainExperience(1);
        const message = `You have gained 1 experience!`;
        toast(message, "success");
      }
      const newCount = count + increment;
      setCount(newCount);
      updateCount(newCount);
    };


  
  
    return (
      <button
        className=" border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          <p className="text-3xl font-bold">Get {text}</p>
          <p className="text-xl">You have: {count} {text}</p>
          <p className="text-lg font-bold">Level: {increment}</p>
        </div>
      </button>
    );
  };
export default ClickButton;