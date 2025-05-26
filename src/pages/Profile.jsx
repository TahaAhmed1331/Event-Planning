import { useRef } from 'react';
import Header from '../components/Header';
import Typography from '../components/Typography';
import RatingStar from '../components/RatingStar';
import ProfileAnalyticsChart from '../components/Profile/ProfileAnalyticsChart';
import Tag from '../components/tag';
import { RecentProjectCardData, tagsData } from '../constants/profile';
import Crousal from '../components/Coursal';
import ProfileCards from '../components/Profile/ProfileCards';

const Profile = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Profile'
      />
      <div className='p-1 mx-auto flex flex-col gap-20'>
        <div className='h-40  rounded-3xl relative'>
          <div className='w-full h-full overflow-hidden rounded-3xl'>
            <img
              src='https://t4.ftcdn.net/jpg/06/91/19/21/360_F_691192190_4M1HgpRLj2tkbdonci9wBEIfjTYXlN5y.jpg'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute overflow-hidden border-6 border-white -bottom-[30%] left-10 w-40 h-40 rounded-full bg-orange-400'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-cCyevKoSn4AOP3Mmhykf-tuPuUMUty4VQ&s'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className=' rounded-3xl p-1 flex justify-between'>
          <div className=' bg-white/20 border-lightBgShade p-5 backdrop-blur-3xl border-1 w-[35%] gap-4 flex flex-col justify-normal rounded-3xl'>
            <Typography
              variant='title'
              className='text-BlackText'
            >
              Name
            </Typography>
            <Typography
              variant='xs'
              className='!leading-5 text-[0.9rem]  text-BlackText'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              nobis modi ullam quo explicabo error dicta, ea magni repudiandae
              placeat voluptatibus consequatur unde aliquid, culpa soluta quasi
              reiciendis eius minima!
            </Typography>
            <RatingStar
              className='gap-3'
              rating={3.3}
            />
            <div className='mt-3 flex flex-row flex-wrap gap-2'>
              {tagsData.map((item) => (
                <Tag text={item}></Tag>
              ))}
            </div>
          </div>
          <div className='p-1 w-[62%]'>
            <ProfileAnalyticsChart
              completedJobs={27}
              proposalsSent={45}
              lockedProjects={18}
              responsesReceived={36}
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center flex-col'>
          <Typography
            variant='lightHeading'
            className='font-semibold py-6 text-shadow-lg text-textHeading'
          >
            Recent Events Deliver
          </Typography>
          {
            <Crousal
              viewPerPage={1}
              cards={RecentProjectCardData.map((item, idx) => {
                return (
                  <ProfileCards
                    key={idx}
                    RecentProjectCard={true}
                    recentClientName={item.name}
                    recentEventDate={item.date}
                    recentProjectTitle={item.projectTitle}
                    recentProjectInformation={item.projectInformation}
                    recentProjectVideo={item.resultVideo}
                    recentProjectRating={item.rating}
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

export default Profile;
