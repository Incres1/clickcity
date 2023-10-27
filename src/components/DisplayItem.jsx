import React from "react";

const DisplayItem = ({ item }) => {
  return (
    <div className="border p-4 my-2">
      <h3>{item.name}</h3>
      <p>Count: {item.count}</p>
    </div>
  );
};

export default DisplayItem;
