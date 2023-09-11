import React from "react";
import ClickButton from "./ClickButton";

const LayoutOne = ({ children }) => {
    return (
        <div className="space-x-4 flex">
            <ClickButton text="Wood" storageKey="woodCount" />
            <ClickButton text="Metal" storageKey="metalCount" />
        

        </div>
    );
    };

export default LayoutOne;