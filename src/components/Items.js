import React, {useState, useEffect} from "react";


const Items = () => {

    const initialSimpleSword = {
        name: "Simple Sword",
        strength: 2,
    };

    const initialSimpleShield = {
        name: "Simple Shield",
        health: 2,
    };

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
        </div>
    )
};

export default Items;