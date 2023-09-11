import React from 'react';

const ColumnButton = ({ text, onClick }) => {
  return (
    <button
      className="border-gray-500 border-2 rounded-xl p-4 text-center transition duration-500 hover:bg-gray-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ColumnButton;
