import Header from '../components/Header';
import Typography from '../components/Typography';
import Calender from '../components/Calender';
import ProgressBar from '../components/ProgressBar';
import {
  dashboardActivity,
  ProgressBar_Dashboard,
  projectData,
  reviews,
} from '../constants/home';
import GlassCard from '../components/DashboardCard';
import Button from '../components/Button';
import { markedDates } from '../constants/home';
import { useRef } from 'react';
import Crousal from '../components/Coursal';

const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Dashboard'
        buttons={[
          {
            label: 'add view',
            variant: 'primary',
          },
        ]}
      />

      <div className=' h-auto flex flex-row justify-between items-start p-1'>
        <div className='w-[65%] flex flex-col gap-20'>
          <div
            className='h-auto rounded-2xl relative flex flex-row justify-between w-full p-1      
        border-lightBorder border backdrop-blur-lg bg-white/10'
          >
            <div className='w-[70%] flex px-5 gap-3 flex-col '>
              <Typography variant='title'>Want some extra money?</Typography>
              <Typography variant='normal'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                natus aspernatur esse, atque tempora fuga aliquam quidem
                pariatur quos quasi ullam.
              </Typography>
              <Button
                text='Manage Proposal'
                variant='primary'
                classname='w-fit'
              />
            </div>
            <div className='w-60 h-60  absolute -top-1/7 right-0 animate-bounce-slow '>
              <img
                src='./assets/hero-banner-image.png'
                alt='home-banner-img'
                className='w-full h-full object-cover'
              />
            </div>
            <div></div>
          </div>
          <div className='flex justify-between gap-6 items-center'>
            {dashboardActivity.map((item, idx) => {
              return (
                <GlassCard
                  key={idx}
                  Dashboard={true}
                  delay={idx == 1 ? '0s' : idx == 0 ? '2s' : '4s'}
                  id={item.id}
                  value={item.value}
                  label={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
        <div className='w-[32%] h-full rounded-2xl p-1 overflow-hidden'>
          <Calender markedDates={markedDates} />
          {ProgressBar_Dashboard.map((bar, idx) => {
            return (
              <ProgressBar
                key={idx}
                label={bar.label}
                total={bar.total}
                obtain={bar.obtain}
              />
            );
          })}
        </div>
      </div>
      <div className='w-full pt-12 flex justify-center items-center flex-col'>
        <Typography
          variant='lightHeading'
          className='font-semibold  text-shadow-lg text-textHeading'
        >
          Recent Review
        </Typography>

        <div className='w-full h-[60vh] overflow-hidden'>
          {
            <Crousal
              cards={reviews.map((item) => {
                return (
                  <GlassCard
                    ReviewCard={true}
                    img={item.avatar}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    rating={item.rating}
                  />
                );
              })}
            />
          }
        </div>
      </div>
      <div className='w-full pt-12 flex justify-center items-center flex-col'>
        <Typography
          variant='lightHeading'
          className='font-semibold text-shadow-lg text-textHeading'
        >
          Recent Project Cards
        </Typography>
        <div className='w-full h-[60vh]'>
          {
            <Crousal
              viewPerPage={1}
              cards={projectData.map((item) => {
                return (
                  <GlassCard
                    projectCard={true}
                    userName={item.userName}
                    refernceImage={item.refernceImage}
                    budget={item.budget}
                    projectTitle={item.projectTitle}
                    eventDate={item.eventDate}
                    noOfPeople={item.noOfPeople}
                    eventType={item.eventType}
                  />
                );
              })}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
