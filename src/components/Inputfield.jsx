import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inputfield = ({
  icon: Icon,
  name,
  onClick,
  onChange,
  label,
  type,
  placeholder,
  value,
  error,
  forgetpass,
  containerClassName,
}) => {
  const Navigate = useNavigate();
  const textarea = type === 'textarea';

  return (
    <div className={`w-full relative cursor-pointer my-[0.1rem]`}>
      <label
        htmlFor={name}
        className='text-textPara text-sm px-4 '
      >
        {label}
      </label>
      <div className=' relative'>
        {textarea ? (
          <textarea
            name={name}
            id={name}
            rows={1}
            placeholder={placeholder}
            className={`w-full px-8 py-6 min-h-[40vh] resize-none text-sm rounded-3xl focus:bg-focusBlue 
            outline-none backdrop-blur-3xl bg-[#f5f3f1] border-none ${containerClassName}`}
            value={value}
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
              onChange?.(e);
            }}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={`w-full py-[0.6rem] focus:bg-focusBlue outline-none 
            placeholder:capitalize px-4 border-none rounded-full 
            backdrop-blur-3xl bg-[#f5f3f1] text-sm ${containerClassName}`}
            value={value}
            onChange={onChange}
          />
        )}

        {Icon && (
          <div
            onClick={onClick}
            className='absolute top-1/2 right-4 p-1 transform -translate-y-1/2 text-gray-500 scale-90'
          >
            {Icon}
          </div>
        )}
      </div>
      {error && (
        <span className='text-[0.7rem] text-red-600 mt-2 absolute top-0 right-0'>
          {error}
        </span>
      )}
      {forgetpass && (
        <span
          className='text-sm text-lightBgShade absolute cursor-pointer -bottom-6 right-0'
          onClick={() => Navigate('/forgot-password')}
        >
          <p>forgot password?</p>
        </span>
      )}
    </div>
  );
};

export default Inputfield;
