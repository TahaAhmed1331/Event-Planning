import { useRef } from 'react';
import Header from '../components/Header';
import Typography from '../components/Typography';
import { Moon, UsersRound, CircleDollarSign } from 'lucide-react';
import Chips from '../components/Chips';
import { projectCards } from '../constants/Project';
import ProjectCards from '../components/Project/ProjectCards';

const Projects = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Projects'
      />
      <div className=' p-1 mt-10 flex gap-5 flex-col items-center justify-center '>
        {projectCards.map((project, index) => (
          <ProjectCards
            ProjectPageCard={true}
            refernceImage={project.referenceImage}
            projectTitle={project.eventTitle}
            userName={project.userName}
            eventDate={project.eventDate}
            eventType={project.eventType}
            noOfPeople={project.numberOfGuests}
            description={project.description}
            budget={project.budgetRange}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
