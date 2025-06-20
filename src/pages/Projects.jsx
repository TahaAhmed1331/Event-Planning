import { useRef } from 'react';
import Header from '../components/Header';
import { projectCards } from '../constants/Project';
import ProjectCards from '../components/Project/ProjectCards';
import { Link } from 'react-router-dom';

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
          <Link
            to={`/project/${project.id}`}
            key={index}
            className='!w-full'
          >
            <ProjectCards
              ProjectPageCard={true}
              refernceImage={project.referenceImage[0]}
              projectTitle={project.eventTitle}
              userName={project.userName}
              eventDate={project.eventDate}
              eventType={project.eventType}
              noOfPeople={project.numberOfGuests}
              description={project.description}
              budget={project.budgetRange}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
