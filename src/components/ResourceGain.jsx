import Materials from "./Materials";
const ResourceGain = () => {
  const { generateRandomNumber } = Materials();
  /* const [count, setCount] = useState(initialValue || 0);
    useEffect(() => {
        // Check if initialValue is different from the current count in state
        if (initialValue !== count) {
            setCount(initialValue);
        }
    }, [initialValue, count]);
 */
  const handleResourceGain = (
    updateRareMaterials,
    rareMaterialCount,
    rareMaterialType,
    gainExperience,
    toast,
    increment,
    updateCount,
    count
  ) => {
    const randomNumber = generateRandomNumber(100);
    //Check if eligible for rare material
    if (randomNumber > 95) {
      updateRareMaterials(rareMaterialCount + 1);
      const message = `You have received a ${rareMaterialType}!`;
      toast(message, "success");
    }
    //check if eligible for experience
    if (randomNumber < 10) {
      gainExperience(1);
      const message = `You have gained 1 experience!`;
      toast(message, "success");
    }
    const newCount = count + increment;
    updateCount(newCount);
  };

  return {
    handleResourceGain,
  };
};
export default ResourceGain;
