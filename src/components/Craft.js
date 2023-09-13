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
    
    

    const craftItem = (item) => {
        
        if (item.name === "Simple Sword") {
            
            if (woodCount >= item.wood && oreCount >= item.ore) {
                console.log(item);
                updateWoodCount(woodCount - item.wood);
                updateOreCount(oreCount - item.ore);
                itemList.simpleSword.count += 1;
            }
        }
        
    };

    useEffect(() => {
        localStorage.setItem("simpleSword", JSON.stringify(simpleSword));
        localStorage.setItem("simpleShield", JSON.stringify(simpleShield));
        localStorage.setItem("woodCount", JSON.stringify(woodCount));
        localStorage.setItem("oreCount", JSON.stringify(oreCount));
    }, [simpleSword, simpleShield, woodCount, oreCount]);



    return (
        <div>
            <h2>Craft</h2>
            <div className="craft">
                <div className="craft-item">
                    <h3>{itemList.simpleSword.name}</h3>
                    <p>Strength: {itemList.simpleSword.strength}</p>
                    <p>Count: {itemList.simpleSword.count}</p>
                    <p>Wood Cost: {itemList.simpleSword.woodCost}</p>
                    <p>Ore Cost: {itemList.simpleSword.oreCost}</p>
                    <button onClick={() => craftItem(itemList.simpleSword)}>Craft</button>
                </div>
                </div>
        </div>
    )
};

export default Craft;

