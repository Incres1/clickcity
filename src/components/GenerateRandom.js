import React from "react";


    
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100);
        return newRandomNumber;
    };

    export default generateRandomNumber;
    