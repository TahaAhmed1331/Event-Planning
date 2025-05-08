import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='bg-white/30 backdrop-blur-lg p-6 shadow-md border border-white/30 w-full h-full rounded-3xl'>
      <Header headingText='Projects' />
    </div>
  );
};

export default Home;
