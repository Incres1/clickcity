import React from "react";

const CraftButton = ({item, oreCount, woodCount, updateOreCount, updateWoodCount}) => {


    const handleButtonClick = () => {
        if (oreCount >= item.ore && woodCount >= item.wood) {
            const newOreCount = oreCount - item.ore;
            const newWoodCount = woodCount - item.wood;
            item.count += 1;
            updateOreCount(newOreCount);
            updateWoodCount(newWoodCount);
            console.log("bought");
        } else {
            console.log("error");
        }
    };
    return (
        <button className="w-1/4 h-1/4 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300" onClick={handleButtonClick}>
            <div className="flex-col justify-center">
                Craft
            </div>
        </button>
    );
};

export default CraftButton;