import React from 'react';

const Chip = ({
  children,
  icon,
  className = '',
  variant = 'default',
  tag = 'span',
}) => {
  const baseStyles = 'inline-flex items-center gap-1 rounded-full text-sm font-medium';

  let variantStyles = '';
  switch (variant) {
    case 'project':
      variantStyles = 'px-4 py-1 bg-blue-400 text-black';
      break;
    case 'user':
      variantStyles = 'px-2 py-1 bg-green-500 text-white';
      break;
    case 'default':
    default:
      variantStyles = 'px-4 py-2 bg-gray-200 text-black';
      break;
  }

  const Tag = tag;

  return (
    <Tag className={`${baseStyles} ${variantStyles} ${className}`}>
      {icon && icon}{children}
    </Tag>
  );
};

export default Chip;
