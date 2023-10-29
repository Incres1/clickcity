import Inventory from "./Inventory";
import Items from "./Items";
import Character from "./Character";
const LayoutThree = () => {
  const {
    listOfItems,
    updateItem,
    healthFromItems,
    strengthFromItems,
    luckFromitems,
    equipItem,
    unequipItem,
  } = Items();
  const {
    strength,
    dexterity,
    health,
    intelligence,
    luckiness,
    gold,
    updateGold,
  } = Character();
  return (
    <div className="border-gray-500">
      <div className="flex items-center">
        <div className="text-5xl font-bold">Gold: </div>
        <div className="text-4xl font-bold pt-2">{gold}</div>
      </div>

      <div className="flex">
        <Inventory
          listOfItems={listOfItems}
          updateItem={updateItem}
          gold={gold}
          updateGold={updateGold}
          equipItem={equipItem}
          unequipItem={unequipItem}
        />
      </div>
    </div>
  );
};

export default LayoutThree;
