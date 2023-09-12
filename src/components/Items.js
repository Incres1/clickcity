import React from "react";


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
      const [clothShield, setClothShield] = useState(
        JSON.parse(localStorage.getItem("clothShield")) || initialClothShield
      );





      useEffect(() => {
        const storedSimpleSword = JSON.parse(localStorage.getItem("simpleSword")) || initialSimpleSword;
        const storedClothShield = JSON.parse(localStorage.getItem("clothShield")) || initialClothShield;
    
        setSimpleSword(storedSimpleSword);
        setClothShield(storedClothShield);
      }, []);

    return (
        <div>
            Items
        </div>
    )
};

export default Items;