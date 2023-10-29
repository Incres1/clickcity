const LevelCard = ({ text, type }) => {
  return (
    <div className="max-content flex-wrap">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="text-2xl font-semibold">{text}</div>
        <div className="text-gray-600">{type}</div>
      </div>
    </div>
  );
};
export default LevelCard;
