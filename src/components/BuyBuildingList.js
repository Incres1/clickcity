import BuyBuildingButton from "./BuyBuildingButton";
const BuyBuildingList = ({ buildings, updateBuilding, oreCount, woodCount, updateOreCount, updateWoodCount}) => {
  return (
    <div className="flex flex-wrap -mx-4">
        {Object.keys(buildings).map((buildingName) => {
            const building = buildings[buildingName];
            return (
                <div key={buildingName} className="w-1/3 px-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <div className="text-2xl font-semibold">{building.name}</div>
                        <div className="text-gray-600">Costs {building.wood || 0} Wood & {building.ore} Ore</div>
                        <div className="text-gray-600">You currently have {building.count} </div>
                        <div className="text-gray-600">
                            <BuyBuildingButton
                                building={building}
                                updateBuilding={updateBuilding}
                                oreCount={oreCount}
                                woodCount={woodCount}
                                updateOreCount={updateOreCount}
                                updateWoodCount={updateWoodCount}
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