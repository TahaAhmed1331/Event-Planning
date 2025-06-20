import React, { useEffect, useState } from 'react';
import Typography from './Typography';
import { sidebarItems } from '../constants/Layout';
import { useNavigate } from 'react-router-dom';
import Back from '../../public/assets/svg/MyIcon';
import { toast } from 'react-toastify';

const Sidebar = ({ className }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    setIsActive(`${window.location.pathname}`);
  }, []);

  const LogOut = (path) => {
    localStorage.removeItem('currentUser');
    toast.success('Logout successful');
    path === '/logout' && navigate('/login');
  };

  return (
    <div
      className={`w-[20%] bg-white/30 backdrop-blur-lg h-full rounded-3xl p-2 shadow-lg border border-lightBorder ${className}`}
    >
      <div className=' p-1 flex flex-col pt-5 justify-between h-full items-start'>
        <div className='flex flex-col justify-start w-full items-start gap-3'>
          <div className=' bg-gradient-to-tr from-[#071937] to-[#414E66] items-center flex justify-center px-3 py-2 w-fit mx-auto rounded-full overflow-hidden'>
            <Back />
          </div>

          {sidebarItems.slice(0, 5).map((item, id) => {
            return (
              <div
                key={id}
                className={`${
                  isActive === item.path && 'bg-[#5112ff59]'
                }   flex flex-row  cursor-pointer hover:bg-[#5112ff59]
                  duration-100 justify-start gap-8 w-full items-center  px-3 py-2 rounded-lg`}
                onClick={() => {
                  navigate(item.path);
                  setIsActive(item.path);
                }}
              >
                <span className='text-textHeading'>{item.icon}</span>
                <Typography
                  variant='normal'
                  className='text-textHeading text-shadow-md'
                >
                  {item.lable}
                </Typography>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col justify-start w-full items-start gap-3'>
          {sidebarItems.slice(-3).map((item, id) => {
            return (
              <div
                key={id}
                className={`${
                  isActive === item.path && 'bg-[#5112ff59]'
                }   flex flex-row  cursor-pointer hover:bg-[#5112ff59]
                  duration-100 justify-start gap-8 w-full items-center  px-3 py-2 rounded-lg`}
                onClick={() => {
                  navigate(item.path);
                  setIsActive(item.path);
                  item.path === '/logout' && LogOut(item.path);
                }}
              >
                <span className='text-textHeading'>{item.icon}</span>
                <Typography
                  variant='normal'
                  className='text-textHeading text-shadow-md'
                >
                  {item.lable}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
