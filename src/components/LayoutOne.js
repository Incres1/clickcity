import React, {useState, useEffect} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LayoutOne = ({ children }) => {
  // Define initial values for Wood and Metal counts & increments
  const [woodCount, setWoodCount] = useState(
    parseInt(localStorage.getItem("woodCount")) || 40
  );
  const [metalCount, setMetalCount] = useState(
    parseInt(localStorage.getItem("metalCount")) || 40
  );

  const [woodIncrement, setWoodIncrement] = useState(
    parseInt(localStorage.getItem("woodIncrement")) || 1
  );
  const [metalIncrement, setMetalIncrement] = useState(
    parseInt(localStorage.getItem("metalIncrement")) || 1
  );


  //COSTS

  const [axeCost, setAxeCost] = useState(
    parseInt(localStorage.getItem("axeCost")) || 40
  );

  const [pickaxeCost, setPickaxeCost] = useState(
    parseInt(localStorage.getItem("pickaxeCost")) || 40
  );

  


  //UPDATES
  const updateWoodCount = (newCount) => {
    setWoodCount(newCount);
    localStorage.setItem("woodCount", newCount);
  };

  const updateMetalCount = (newCount) => {
    setMetalCount(newCount);
    localStorage.setItem("metalCount", newCount);
  };

  const updateWoodIncrement = (newCount) => {
    setWoodIncrement(newCount);
    localStorage.setItem("woodIncrement", newCount);
  };

  const updateMetalIncrement = (newCount) => {
    setMetalIncrement(newCount);
    localStorage.setItem("metalIncrement", newCount);
  };

  const updateAxeCost = (newCount) => {
    setAxeCost(newCount);
    localStorage.setItem("axeCost", newCount);
  };

  const updatePickaxeCost = (newCount) => {
    setPickaxeCost(newCount);
    localStorage.setItem("pickaxeCost", newCount);
  };


  useEffect(() => {
    // Update the local storage when resourceCounts change
    localStorage.setItem("woodCount", woodCount);
    localStorage.setItem("metalCount", metalCount);
  }, [woodCount, metalCount]);




  //UPGRADE BUTTON
  const UpgradeButton = ({ text, cost, initialValue, updateCount, updateIncrement, increment, updateCost, toast }) => {
    const [count, setCount] = useState(initialValue || 0);

    
  
    const handleButtonClick = () => {
      if (count >= cost) {
        const newCount = count - cost;
        const newIncrement = increment + 1;
        const newCost = cost * 2;
        updateCost(newCost);
        updateIncrement(newIncrement);
        setCount(newCount);
        updateCount(newCount);
        const message = `You have upgraded your ${text}!`;
        toast(message);
      } else {
        alert("Not enough resources!");
      }
      
    };
    return (
      <button
        className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          Upgrade {text}
          <br />
          Cost: {cost}
          <br />
          You have: {count}
        </div>
      </button>

    );
  };


  //CLICK BUTTON

  const ClickButton = ({ text, onClick, initialValue, updateCount, increment }) => {
    const [count, setCount] = useState(initialValue || 0);
    
    const handleButtonClick = () => {
      const newCount = count + increment;
      setCount(newCount);
      if (onClick) {
        onClick();
      }
      updateCount(newCount);
    };
  
  
    return (
      <button
        className="w-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
        onClick={handleButtonClick}
      >
        <div className="flex-col justify-center">
          {text}<br />
          {count} <br />
          Level: {increment}
        </div>
      </button>
    );
  };



  //TOAST CONTAINER

  const showToastMessage = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
    });
};

  //GAME

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-1/2 space-x-4">
        {/* Pass initial values as props */}
        <ClickButton text="Wood" initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} />
        <ClickButton text="Metal" initialValue={metalCount} updateCount={updateMetalCount} increment={metalIncrement} />
      </div>
      <div className="flex h-1/2 space-x-4">
        {/* Pass the cost as a number (not a string) */}
        <UpgradeButton text="Axe" cost={axeCost} initialValue={woodCount} updateCount={updateWoodCount} increment={woodIncrement} updateIncrement={updateWoodIncrement} updateCost={updateAxeCost} toast={showToastMessage} />
        <UpgradeButton text="Pickaxe" cost={pickaxeCost} initialValue={metalCount} updateCount={updateMetalCount} increment={metalIncrement} updateIncrement={updateMetalIncrement} updateCost={updatePickaxeCost} toast={showToastMessage}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LayoutOne;
