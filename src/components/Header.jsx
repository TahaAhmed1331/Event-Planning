import React from 'react';
import Typography from './Typography';
import Button from './Button';

const Header = ({
  headingText,
  headingTextClassName,
  conatinerClassName,
  buttons,
}) => {
  return (
    <div className={`py-3 ${conatinerClassName}`}>
      <Typography
        variant='lightHeading'
        className={`border-b-[1.5px] text-textHeading text-shadow-lg border-b-lightBorder flex flex-row items-center justify-between pb-5 ${headingTextClassName}`}
      >
        {headingText}
        {buttons && (
          <div>
            {buttons.map((button, idx) => {
              return (
                <Button
                  classname='!text-sm capitalize'
                  text={button.label}
                  variant={button.variant}
                  onClick={button.onClick}
                ></Button>
              );
            })}
          </div>
        )}
      </Typography>
    </div>
  );
};

export default Header;
