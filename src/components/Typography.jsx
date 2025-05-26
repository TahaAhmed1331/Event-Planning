import React from 'react';

const Typography = ({
  children,
  icon,
  className = '',
  variant = 'normal',
  tag = 'p',
  onClick,
}) => {
  let baseStyles = 'p-1  font-sans flex justify-normal gap-1 items-center';
  let variantStyles = '';

  switch (variant) {
    case 'BigNumber':
      variantStyles = 'text-4xl font-bold ';
      break;
    case 'lightHeading':
      variantStyles = 'text-4xl font-normal ';
      break;
    case 'heading':
      variantStyles = 'text-3xl font-bold ';
      break;
    case 'subheading':
      variantStyles = 'text-2xl font-semibold ';
      break;
    case 'title':
      variantStyles = 'text-xl font-medium ';
      break;
    case 'belowtitle':
      variantStyles = 'text-lg font-medium ';
      break;
    case 'paragraph':
      variantStyles = 'leading-7 text-sm font-normal text-textPara';
      break;
    case 'Style1':
      variantStyles =
        'text-2xl font-extrabold text-white [text-shadow:0_1px_0_#000,0_2px_0_#000,0_3px_0_#000,0_4px_0_#000,0_5px_0_#000,0_6px_0_#000,0_7px_0_#000,1px_10px_15px_rgba(0,0,0,0.4)]';
    case 'xs':
      variantStyles = 'leading-7 text-xs font-normal';
      break;
    case 'normal':
    default:
      variantStyles = 'leading-6 text-base font-normal ';
      break;
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Typography;
