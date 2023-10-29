import React from "react";

const DisplayItem = ({ item, updateItem, gold, updateGold }) => {
  const handleSell = () => {
    if (item.count > 0) {
      updateItem(item, -1);
      gold += item.value;
      updateGold(gold);
    }
  };
  const handleSellAll = () => {
    if (item.count > 0) {
      gold += item.value * item.count;
      updateItem(item, -item.count);

      updateGold(gold);
    }
  };
  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mt-2">
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight">{item.name}</h5>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold">{item.value} gold</span>
          <span class="text-sm font-medium text-gray-500">
            {" "}
            You own: {item.count}
          </span>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleSell}
              class="text-white bg-blue-700 hover:bg-blue-800 transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sell
            </button>
            <button
              onClick={handleSellAll}
              class="text-white bg-blue-700 hover:bg-blue-800 transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sell All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
