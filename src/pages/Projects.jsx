import React from 'react';
import Header from '../components/Header';
import Typography from '../components/Typography';
import { Moon, UsersRound ,CircleDollarSign } from 'lucide-react';
import Chips from '../components/Chips';
// import Project from '../constants/Project';
import { projectCards } from '../constants/Project';
// import pic from '../public\assets\project page img.png'


const Home = () => {
  return (

    <div className='bg-white/30 backdrop-blur-lg p-6 shadow-md border border-white/30 w-full h-full rounded-3xl overflow-y-auto hide-scrollbar '>
      
      <Header headingText='Projects' />

      <div className=' p-1 mt-10 flex flex-col items-center justify-center '>



        {projectCards.map((project, index) => (
        <div key={index} className=' shadow-md border border-lightBorder rounded-3xl p-2 w-[70%] mb-6 '>
          
          <div className='flex items-center gap-12'>
            <img src={project.referenceImage} alt={project.eventTitle} className='h-48 w-72 object-cover rounded-3xl hover:scale-95 duration-1000 ease-in-out' />

            <div className='bg-yellow-900 flex flex-col items-center p-4 rounded-2xl'>
              <Typography variant='Style1'>{project.eventTitle}</Typography>
              <Typography variant='normal'>{project.userName}</Typography>

              <div className='flex gap-4'>
                <Typography variant='sm' icon={<UsersRound size={20} color="#dfdddd" strokeWidth={1.5} />}>{project.eventType}</Typography>
                <Typography variant='sm' icon={<Moon size={20} color="#dfdddd" strokeWidth={1.5} />}>{project.timeOfDay}</Typography>
              </div>

              <Typography variant='sm'>{project.location}</Typography>

              <div className='flex gap-5 mt-2'>
                <Chips variant='project'>
                  <Typography variant='normal' icon={<CircleDollarSign />}>{project.budgetRange}</Typography>
                </Chips>
                <Chips variant='project'>
                  <Typography>{project.numberOfGuests} People</Typography>
                </Chips>
              </div>
            </div>
          </div>
        </div>
       ))};








      </div>


    </div>

  );
};

export default Home;
