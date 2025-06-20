import React, { useEffect, useState } from 'react';
import Typography from './Typography';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({
  headingText,
  headingTextClassName,
  conatinerClassName,
  buttons,
  scrollContainerRef,
  link,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef?.current;
    if (!el) {
      console.warn('No scroll container in Header!');
      return;
    }

    const handleScroll = () => {
      const isScrolled = el.scrollTop > 10;
      setScrolled(isScrolled);
      console.log('Scrolled state: ', isScrolled);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef?.current]);

  return (
    <div
      className={`py-3 ${conatinerClassName} sticky z-[99] transition-all duration-100  top-0 ${
        scrolled && 'bg-white rounded-3xl shadow-md -mx-6 px-6'
      }`}
    >
      <Typography
        variant='lightHeading'
        className={` ${headingTextClassName} border-b-[1.5px] ${
          scrolled
            ? 'text-BlackText text-shadow-none border-none !font-semibold'
            : 'text-textHeading text-shadow-lg border-b-lightBorder'
        } pb-4  flex flex-row items-center !justify-between ${`${
          !buttons && 'py-3'
        }`}`}
      >
        {headingText}
        {buttons && (
          <>
            {buttons.map((button, idx) => {
              return button.link ? (
                <Link
                  key={idx}
                  to={button.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-0 m-0 box-border -mt-2'
                >
                  <Button
                    key={idx}
                    classname='!text-sm capitalize !my-0'
                    text={button.label}
                    variant={button.variant}
                    onClick={button.onClick}
                  />
                </Link>
              ) : (
                <Button
                  key={idx}
                  classname='!text-sm capitalize !my-0'
                  text={button.label}
                  variant={button.variant}
                  onClick={button.onClick}
                />
              );
            })}
          </>
        )}
      </Typography>
    </div>
  );
};

export default Header;
