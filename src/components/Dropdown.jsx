import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Dropdown = ({
  label,
  placeholder,
  options = [],
  value,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className='w-full relative cursor-pointer'
      // ref={dropdownRef}
    >
      <label className='text-textPara text-sm px-4'>{label}</label>
      <div
        onClick={toggleDropdown}
        className='w-full py-[0.6rem] px-4 my-1 rounded-full backdrop-blur-3xl bg-[#f5f3f1] text-sm text-gray-700 cursor-pointer flex items-center justify-between'
      >
        <span className='capitalize'>{value ? value.label : placeholder}</span>
        <span
          className={`transition-transform duration-300 text-gray-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className='absolute w-full mt-1 bg-white rounded-md shadow-md z-10 max-h-60 overflow-y-auto'>
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 hover:bg-focusBlue cursor-pointer text-sm ${
                idx === 0 ? '' : 'border-t-textPara border-t'
              }`}
            >
              {console.log(idx)}
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && (
        <span className='text-[0.7rem] text-red-600 mt-1 absolute right-0 top-0'>
          {error}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
