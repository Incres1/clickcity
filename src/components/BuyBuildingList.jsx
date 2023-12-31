import BuyBuildingButton from "./BuyBuildingButton";
const BuyBuildingList = ({
  buildings,
  updateBuilding,
  oreCount,
  woodCount,
  updateOreCount,
  updateWoodCount,
  toast,
}) => {
  return (
    <div className="flex justify-center -mx-4">
      {Object.keys(buildings).map((buildingName) => {
        const building = buildings[buildingName];
        return (
          <div key={buildingName} className="px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-2xl font-semibold">{building.name}</div>
              <div className="text-gray-600">
                Costs {building.wood || 0} Wood & {building.ore} Ore
              </div>
              <div className="text-gray-600">
                You currently have {building.count}{" "}
              </div>
              <div className="text-gray-600">
                <BuyBuildingButton
                  building={building}
                  updateBuilding={updateBuilding}
                  oreCount={oreCount}
                  woodCount={woodCount}
                  updateOreCount={updateOreCount}
                  updateWoodCount={updateWoodCount}
                  toast={toast}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BuyBuildingList;
