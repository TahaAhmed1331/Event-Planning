import React, { useState } from 'react';

const ChipsInput = ({ label, chips, setChips, placeholder, containerClassName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddChip = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !chips.includes(trimmed)) {
      setChips([...chips, trimmed]);
      setInputValue('');
    }
  };

  const handleRemoveChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddChip();
    }
  };

  return (
    <div className="w-full">
      {label && <label className="text-sm px-2 text-textPara">{label}</label>}
      <div className={`flex flex-wrap items-center gap-2 px-2 py-2 border border-gray-300 rounded-xl bg-[#f5f3f1] ${containerClassName}`}>
        {chips.map((chip, idx) => (
          <div
            key={idx}
            className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full flex items-center gap-2 w-fit"
          >
            {chip}
            <button
              type="button"
              className="text-red-500 hover:bg-red-200 duration-75 rounded-full p-1
               w-4 h-4 flex justify-center cursor-pointer items-center font-bold text-xs"
              onClick={() => handleRemoveChip(chip)}
            >
              ✕
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow bg-transparent outline-none w-full text-sm px-1 py-1"
          placeholder={placeholder || 'Add a tag'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default ChipsInput;
