import React from 'react';

const Button = ({ text, classname, variant, icon, onClick }) => {
  let baseStyles =
    'py-3 px-6 my-1 text-base font-semibold hover:scale-[0.98] duration-200 hover:brightness-95';
  let variantStyles = '';

  switch (variant) {
    case 'capsule':
      variantStyles = 'lightGradientYellow text-secondary rounded-[50px]';
      break;
    case 'primary':
      variantStyles =
        'bg-[linear-gradient(to_right,var(--color-primary),#9b7cf9)] text-textHeading rounded-lg';
      break;
    case 'secondary':
      variantStyles =
        'bg-[linear-gradient(to_right,var(--color-whiteShade),#ffffff)] text-secondary rounded-lg';
      break;
    default:
      variantStyles = '';
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${classname} ${
        icon && 'flex flex-row justify-center items-center gap-3'
      } cursor-pointer`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
