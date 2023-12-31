
const BuyBuildingButton = ({building, updateBuilding, oreCount, woodCount, updateWoodCount, updateOreCount, toast }) => {



    const buyBuildingClick = () => {
        if (woodCount >= building.wood && oreCount >= building.ore) {
            const newWoodCount = woodCount - building.wood;
            const newOreCount = oreCount - building.ore;
            updateBuilding(building);
            updateWoodCount(newWoodCount);
            updateOreCount(newOreCount);
            const message = "You have bough a " + building.name;
            toast(message, "success");

        } else {
            console.log(building);
            console.log('error');
        }
    };


 

    return (
        <button className="w-1/2 h-1/2 border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300" onClick={buyBuildingClick}>
            <div className="flex-col text-center">
                Buy Building
            </div>
        </button>
    );
};

export default BuyBuildingButton;



