import React from 'react';
import Typography from '../Typography';

const Cardd = ({ icon, title, amount ,bgColor }) => {
  return (
    <div className='w-min flex flex-col items-center justify-center py-4 px-7 
    h-auto rounded-2xl border-lightBorder border backdrop-blur-lg bg-white/10'>
      
      <div className={` h-[90px] w-[90px] border-2 border-white rounded-full flex items-center justify-center ${bgColor}`}>
        {icon}
      </div>
      
      <Typography variant='title'>{title}</Typography>
      <Typography variant='BigNumber'>{amount}</Typography>
    </div>
  );
};

export default Cardd;
