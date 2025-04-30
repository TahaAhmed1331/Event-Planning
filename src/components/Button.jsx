import React from 'react';

const Button = ({ text, classname, variant, icon, onClick }) => {
  let baseStyles = 'py-3 px-6 my-1 w-full font-semibold';
  let variantStyles = '';

  switch (variant) {
    case 'capsule':
      variantStyles = 'bg-Yellow  text-secondary rounded-[50px]';
      break;
    case 'primary':
      variantStyles = 'bg-primary text-textHeading rounded-lg';
      break;
    case 'secondary':
      variantStyles = 'bg-whiteShade rounded-lg text-secondary';
      break;
    default:
      variantStyles = '';
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${classname} ${
        icon && 'flex flex-row justify-center item-center gap-3'
      } cursor-pointer`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
