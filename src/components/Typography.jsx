import React from 'react';

const Typography = ({ text, className = '', variant = 'normal', tag = 'p' }) => {
  let baseStyles = 'p-1';
  let variantStyles = '';

  switch (variant) {
    case 'heading':
      variantStyles = 'text-3xl font-bold text-textHeading';
      break;
    case 'subheading':
      variantStyles = 'text-2xl font-semibold text-textHeading';
      break;
    case 'title':
      variantStyles = 'text-xl font-medium text-textHeading';
      break;
    case 'belowtitle':
      variantStyles = 'text-lg font-medium text-textHeading';
      break;
    case 'paragraph':
      variantStyles = 'text-sm font-normal text-textPara';
      break;
    case 'normal':
    default:
      variantStyles = 'text-base font-normal text-textHeading';
      break;
  }

  const Tag = tag;

  return (
    <Tag className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </Tag>
  );
};

export default Typography;
