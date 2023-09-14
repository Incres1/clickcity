
const Buildings = () => {
    const [intervalId, setIntervalId] = useState(null);

    const [buildingsLevel, setBuildingsLevel] = useState((
        parseInt(localStorage.getItem('buildingsLevel')) || 1
    ));

    const buildingList = {
        mine: {
            name: 'Mine',
            wood: 500,
            ore: 1000,
            count: 0,
            oreIncrement: 1,
    },
        lumbermill: {
            name: 'Lumbermill',
            wood: 1000,
            ore: 500,
            count: 0,
            woodIncrement: 1,
    }
    }
    const [listOfBuildings, setListOfBuildings] = useState(() => {
        const savedList = JSON.parse(localStorage.getItem('listOfBuildings'));
        return savedList || buildingList;
    });

    const updateBuildingsLevel = (newCount) => {
        setBuildingsLevel(newCount);
        localStorage.setItem('buildingsLevel', newCount);
    };

    const updateBuildingList = (list) => {
        setListOfBuildings(list);
        localStorage.setItem('listOfBuildings', JSON.stringify(list));
    };

    const updateBuilding = (building) => {
        const updatedList = { ...listOfBuildings };
        switch (building.name) {
            case 'Mine':
                updatedList.mine.count += 1;
                updateBuildingList(updatedList);
                break;
            case 'Lumbermill':
                updatedList.lumbermill.count += 1;
                updateBuildingList(updatedList);
                break;
            default:
                break;
        }
    };

    const getIncrement = (building) => {
        switch (building.name) {
            case 'Mine':
                return building.oreIncrement;
            case 'Lumbermill':
                return building.woodIncrement;
            default:
                break;
        }
    };

    const getTimer = (building) => {
        switch (building.name) {
            case 'Mine':
                return building.timer;
            case 'Lumbermill':
                return building.timer;
            default:
                break;
        }
    };

    return {
        listOfBuildings,
        updateBuilding,
        getIncrement,
        getTimer,
    };
};
    
