import React, {useState, useEffect} from "react";
import Materials from "./Materials";
import Items from "./Items";

const Craft = () => {
    const { woodCount, oreCount, leaf, gem, updateWoodCount, updateOreCount, updateLeafCount, updateGemCount } = Materials();
    const { itemList } = Items();

    const [simpleSword, setSimpleSword] = useState(
        JSON.parse(localStorage.getItem("simpleSword")) || itemList.simpleSword
    );
    const [simpleShield, setSimpleShield] = useState(
        JSON.parse(localStorage.getItem("simpleShield")) || itemList.simpleShield
    );
    


    return (
        <div>
            yo
        </div>
    )
};

export default Craft;

