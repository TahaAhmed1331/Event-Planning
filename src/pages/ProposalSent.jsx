import { useRef } from 'react';
import Header from '../components/Header';
import { projectCards } from '../constants/Project';
import { useParams } from 'react-router-dom';
import Typography from '../components/Typography';
import Tag from '../components/Tag';
import SentProposalForm from '../components/SentProposalForm';

const ProposalSent = () => {
  const scrollRef = useRef(null);
  const { id } = useParams();
  const {
    eventTitle,
    userName,
    eventType,
    shift,
    eventDuration,
    eventDate,
    location,
    numberOfGuests,
    budgetRange,
    description,
  } = projectCards.find((proj) => proj.id === id);
  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Sent Proposal'
      />
      <div className='w-[85%] mx-auto h-auto flex flex-col justify-start items-center p-1'>
        <div className='w-full flex flex-col border bg-white/20 rounded-3xl p-4 border-lightBorder justify-normal'>
          <div className=' w-full border-b py-2 border-[#11111141] px-6 flex justify-between items-start'>
            <div>
              {' '}
              <Typography variant='heading'>{eventTitle}</Typography>
              <Typography
                variant='lg'
                className='font-semibold'
              >
                By: <Tag text={userName} />
              </Typography>
            </div>
            <Typography
              variant='lg'
              className='font-semibold'
            >
              Event Date: <Tag text={eventDate} />
            </Typography>
          </div>
          <div className='w-[70%] capitalize py-2 px-6 flex flex-wrap mt-3 justify-between items-start'>
            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              Event Location: <Tag text={location} />
            </Typography>

            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              Event Shift: <Tag text={shift} />
            </Typography>

            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              Event Duration: <Tag text={eventDuration} />
            </Typography>

            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              Event Type: <Tag text={eventType} />
            </Typography>
            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              Budget: <Tag text={budgetRange} />
            </Typography>
            <Typography
              variant='lg'
              className='font-semibold w-1/2 whitespace-nowrap my-2'
            >
              People: <Tag text={numberOfGuests} />
            </Typography>
          </div>

          {description && (
            <div className='bg-lightBgShade rounded-3xl w-full py-2 px-6 flex flex-wrap mt-3 justify-between items-start'>
              <Typography
                variant='lg'
                className='font-semibold w-full my-2 '
              >
                Description
              </Typography>
              <Typography variant='sm'>{description}</Typography>
            </div>
          )}
        </div>
      </div>
      <div className='w-[85%] mx-auto h-auto flex flex-col justify-start items-center p-1'>
        <SentProposalForm />
      </div>
    </div>
  );
};

export default ProposalSent;
