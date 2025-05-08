import React from 'react';

const Typography = ({
  children,
  className = '',
  variant = 'normal',
  tag = 'p',
}) => {
  let baseStyles = 'p-1  font-sans';
  let variantStyles = '';

  switch (variant) {
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
    case 'normal':
    default:
      variantStyles = 'leading-6 text-base font-normal ';
      break;
  }

  const Tag = tag;

  return (
    <Tag className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;
