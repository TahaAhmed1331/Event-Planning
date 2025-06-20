import { useRef, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { projectCards } from '../constants/Project';
import Coursal from '../components/Coursal';
import CardImagesSlider from '../components/Project/CardImagesSlider';
import Typography from '../components/Typography';
import Tag from '../components/Tag';

const ProjectInfo = () => {
  const scrollRef = useRef(null);
  const [fullPreview, setFullPreview] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    eventTitle,
    userName,
    eventType,
    shift,
    eventDuration,
    eventDate,
    location,
    referenceImage,
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
        headingText='Event Details'
        buttons={[
          {
            label: 'Send Proposal',
            variant: 'primary',
            link: `/project/sent-proposal/${id}`,
          },
        ]}
      />

      <div className='w-[85%] mx-auto h-auto flex flex-col justify-start items-center p-1'>
        <div
          className={`flex overflow-hidden w-full duration-300 
        ${fullPreview ? 'h-[80vh]' : ' h-[50vh]'}`}
        >
          <Coursal
            viewPerPage={1}
            cards={referenceImage.map((image, idx) => {
              return (
                <CardImagesSlider
                  fullPreview={fullPreview}
                  setFullPreview={setFullPreview}
                  key={idx}
                  img={image}
                ></CardImagesSlider>
              );
            })}
          />
        </div>
        <div className='w-full flex bg-white/20 flex-col border rounded-3xl p-4 border-lightBorder justify-normal'>
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
    </div>
  );
};

export default ProjectInfo;
