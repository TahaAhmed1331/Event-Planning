import { useRef } from 'react';
import Header from '../components/Header';

const Settings = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Settings'
      />
    </div>
  );
};

export default Settings;
