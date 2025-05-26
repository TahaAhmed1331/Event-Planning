import Chips from '../Chips';
import Typography from '../Typography';

const ProjectCards = ({
  ProjectPageCard,
  refernceImage,
  projectTitle,
  userName,
  eventDate,
  eventType,
  noOfPeople,
  description,
  budget,
}) => {
  return (
    <>
      {ProjectPageCard && (
        <div className='w-full cursor-pointer mx-auto p-3 rounded-2xl bg-white/30 backdrop-blur-2xl border border-lightBgShade shadow-xl hover:shadow-glow transition duration-300'>
          <div className='flex flex-row gap-4 items-start h-[35vh]'>
            {/* Left: Image */}
            <div className='w-[25%] h-full flex-shrink-0 overflow-hidden rounded-xl'>
              <img
                src={refernceImage || '/placeholder.svg'}
                alt={projectTitle}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Right: Info Section */}
            <div className='flex flex-col justify-between flex-1 h-full'>
              {/* Top Info */}
              <div className='flex flex-col gap-2 text-black'>
                <div>
                  <div className='!w-full flex justify-between'>
                    <Typography variant='title'>{projectTitle}</Typography>
                    <Typography variant='normal'>{eventDate}</Typography>
                  </div>
                  <Typography
                    variant='normal'
                    className='!text-BlackText font-semibold'
                  >
                    By: <span>{userName}</span>
                  </Typography>
                </div>

                {description && (
                  <div className='mt-2'>
                    <Typography
                      variant='normal'
                      className='uppercase text-black/70 font-semibold leading-0 '
                    >
                      Description
                    </Typography>
                    <Typography
                      variant='paragraph'
                      className='!text-[#181818e3]'
                    >
                      {description}
                    </Typography>
                  </div>
                )}
              </div>

              {/* Bottom: Chips */}
              <div className='mt-3 flex flex-wrap gap-2'>
                <Chips
                  label='Budget: ₹'
                  value={budget}
                  color='green'
                />
                <Chips
                  label='Guests: '
                  value={noOfPeople}
                  color='blue'
                />
                <Chips
                  label='Type: '
                  value={eventType}
                  color='yellow'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCards;
