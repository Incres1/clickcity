import React from "react";

const DisplayItem = ({
  item,
  updateItem,
  gold,
  updateGold,
  equipItem,
  unequipItem,
}) => {
  const handleSell = () => {
    if (
      (item.count > 0 && !item.equipped) ||
      (item.count > 1 && item.equipped)
    ) {
      updateItem(item, -1);
      gold += item.value;
      updateGold(gold);
    }
  };
  const handleSellAll = () => {
    if (item.count > 0) {
      const totalValue = item.value * (item.count - (item.equipped ? 1 : 0));
      gold += totalValue;
      updateItem(item, -(item.count - (item.equipped ? 1 : 0)));
      updateGold(gold);
    }
  };

  const handleEquipItem = () => {
    equipItem(item);
  };
  const handleUnequipItem = () => {
    unequipItem(item);
  };
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mt-2">
      <div className="px-5 pb-5">
        <div className="flex">
          <h5 className="text-xl font-semibold tracking-tight">{item.name}</h5>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold">{item.value} gold</span>
          <span class="text-sm font-medium text-gray-500">
            {" "}
            You own: {item.count}
          </span>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() =>
                item.equipped ? handleUnequipItem() : handleEquipItem()
              }
              className="text-white bg-blue-700 hover-bg-blue-800 transition duration-300 font-medium rounded-lg text-sm py-2.5 text-center w-20 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {item.equipped ? "Unequip" : "Equip"}
            </button>
            <button
              onClick={handleSell}
              class="text-white bg-blue-700 hover:bg-blue-800 transition duration-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sell
            </button>
            <button
              onClick={handleSellAll}
              class="text-white bg-blue-700 hover:bg-blue-800 transition duration-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
