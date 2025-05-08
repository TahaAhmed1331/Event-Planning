import React from 'react';
import Header from '../components/Header';
import Typography from '../components/Typography';
import Calender from '../components/Dashboard/Calender';

const Home = () => {
  const markedDates = {
    '2025-05-08': { project: 'Website Redesign' },
    '2025-05-15': { project: 'App Launch' },
    '2025-05-20': { project: 'Marketing Review' },
  };

  return (
    <div className='bg-white/30 backdrop-blur-lg p-6 shadow-md border border-lightBorder w-full h-full rounded-3xl'>
      <Header
        headingText='Dashboard'
        buttons={[
          {
            label: 'add view',
            variant: 'primary',
            onClick: () => {
              console.log('hey');
            },
          },
        ]}
      />
      <div className=' h-[70vh] flex flex-row justify-between items-start  p-1'>
        <div className='w-[62%]'>
          <div
            className='h-44 rounded-2xl relative flex flex-row justify-between w-full p-1      
        border-lightBorder border backdrop-blur-lg bg-white/10'
          >
            <div className='w-[70%] flex px-5 gap-3 flex-col '>
              <Typography variant='title'>Want some extra money?</Typography>
              <Typography variant='normal'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                natus aspernatur esse, atque tempora fuga aliquam quidem
                pariatur quos quasi ullam.
              </Typography>
            </div>
            <div className='w-48 h-48 scale-120 absolute  -top-1/7 right-0 animate-bounce-slow '>
              <img
                src='./assets/hero-banner-image.png'
                alt='home-banner-img'
                className='w-full h-full object-cover'
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className='w-[35%] h-full rounded-2xl p-1 overflow-hidden'>
          <Calender markedDates={markedDates} />
        </div>
      </div>
    </div>
  );
};

export default Home;
