import React, { useEffect, useState } from 'react';
import Typography from './Typography';
import { sidebarItems } from '../constants/Layout';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ className }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    setIsActive(`${window.location.pathname}`);
  }, []);

  return (
    <div
      className={`w-[20%] bg-white/30 backdrop-blur-lg rounded-3xl p-2 shadow-lg border border-lightBorder ${className}`}
    >
      <div>
        <img
          src='/assets/applogo.png'
          alt='App Logo'
          className='w-15 h-15'
        />
        <div className=' p-1 flex flex-col pt-5 justify-start items-start'>
          <div className='flex flex-col justify-start w-full items-start gap-1'>
            {sidebarItems.map((item, id) => {
              return (
                <div
                  key={id}
                  className={`${
                    isActive === item.path && 'bg-Box'
                  }   flex flex-row  cursor-pointer hover:bg-Box duration-100 justify-between w-full items-center  px-3 py-2 rounded-lg`}
                  onClick={() => {
                    navigate(item.path);
                    setIsActive(item.path);
                  }}
                >
                  <Typography
                    variant='normal'
                    className='text-textHeading text-shadow-md'
                  >
                    {item.lable}
                  </Typography>
                  <span className='text-textHeading'>{item.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
