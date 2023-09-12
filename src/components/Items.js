import React, {useState, useEffect} from "react";


const Items = () => {

    const initialSimpleSword = {
        name: "Simple Sword",
        strength: 2,
        wood: 200,
        ore: 200,
        gem: 1,
        count: 0,
    };

    const initialSimpleShield = {
        name: "Simple Shield",
        health: 2,
        wood: 200,
        ore: 200,
        leaf: 1,
        count: 0,
    };

    const itemList = [initialSimpleShield, initialSimpleSword];

    const [simpleSword, setSimpleSword] = useState(
        JSON.parse(localStorage.getItem("simpleSword")) || initialSimpleSword
      );
      const [simpleShield, setSimpleShield] = useState(
        JSON.parse(localStorage.getItem("simpleShield")) || initialSimpleShield
      );





      useEffect(() => {
        const storedSimpleSword = JSON.parse(localStorage.getItem("simpleSword")) || initialSimpleSword;
        const storedSimpleShield = JSON.parse(localStorage.getItem("simpleShield")) || initialSimpleShield;
    
        setSimpleSword(storedSimpleSword);
        setSimpleShield(storedSimpleShield);
      }, []);

    return (
        <div>
            <ul>
                {itemList.map((item) => (
                    <li key={item.name}>
                        <div className="bg-white p-4 text-left">
                            <div className="text-2xl font-semibold">{item.name}</div>
                            <div className="text-gray-600">Strength: {item.strength || 0}</div>
                            <div className="text-gray-600">Health: {item.health || 0}</div>
                            <div className="text-gray-600">Wood: {item.wood || 0}</div>
                            <div className="text-gray-600">Ore: {item.ore || 0}</div>
                            <div className="text-gray-600">Gem: {item.gem || 0}</div>
                            <div className="text-gray-600">Leaf: {item.leaf || 0}</div>
                            <div className="text-gray-600">Count: {item.count}</div>
                        </div>
                    </li>))}
            </ul>
        </div>
    )
        
    
};

export default Items;