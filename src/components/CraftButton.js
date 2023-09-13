import React from "react";
import Materials from "./Materials";
import Items from "./Items";

const CraftButton = ({itemList, oreCount, woodCount, updateOreCount, updateWoodCount}) => {


    const handleButtonClick = () => {
        if (oreCount >= itemList.simpleSword.ore && woodCount >= itemList.simpleSword.wood) {
            const newOreCount = oreCount - itemList.simpleSword.ore;
            const newWoodCount = woodCount - itemList.simpleSword.wood;
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