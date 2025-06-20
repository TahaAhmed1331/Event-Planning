import Typography from './Typography';
import Chips from './Chips';
import RatingStar from './RatingStar';
import Tag from './Tag';

const GlassCard = ({
  //for dashbaord card
  Dashboard,
  icon,
  label,
  value,
  delay,
  customClassesDashboard,
  // for review card
  ReviewCard,
  id,
  name,
  description,
  rating,
  img,
  customClassesReview,
  //for projects card
  projectCard,
  refernceImage,
  projectTitle,
  userName,
  budget,
  eventDate,
  noOfPeople,
  eventType,
}) => {
  // bg-gradient-to-r from-[#ffd75f2f] via-[#ff6b8133] to-[#703bf748]

  return (
    <>
      {Dashboard && (
        <div
          className={`w-1/3 h-fit flex flex-col border-1 border-lightBorder
           justify-start item-center rounded-2xl p-2 pb-6 bg-black/12 
     text-white backdrop-blur-3xl bg-opacity-20 relative overflow-hidden
  cursor-pointer ${customClassesDashboard}`}
          style={{
            animationName: 'hoverslow',
            animationDuration: '6s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: delay,
          }}
        >
          <div>{icon}</div>

          <div className='flex flex-col items-center gap-4'>
            <Typography
              variant='BigNumber'
              className='text-shadow-lg'
            >
              {value}
            </Typography>
            <Typography
              variant='title'
              className='text-shadow-lg'
            >
              {label}
            </Typography>
          </div>
        </div>
      )}
      {ReviewCard && (
        <div
          className={`border min-h-48 max-h-auto bg-white/20 backdrop-blur-3xl
             border-lightBgShade rounded-tl-[50px] rounded-br-[50px] p-4 ${customClassesReview}`}
          key={id}
        >
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 overflow-hidden rounded-full '>
              <img
                src={img}
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <Typography variant='lg'>{name}</Typography>
              <RatingStar rating={rating} />
            </div>
          </div>
          <Typography
            variant='paragraph'
            className='!text-[#1f1f1fe7] !leading-6 mt-2 text-start'
          >
            {description}
          </Typography>
        </div>
      )}
      {projectCard && (
        <div
          className='w-full overflow-hidden border p-2 bg-white/20 backdrop-blur-3xl
             border-lightBgShade shadow-lg rounded-2xl'
        >
          <div className='flex flex-col md:flex-row'>
            {/* Left Side - Reference Image */}
            <div className='w-full md:w-2/5 rounded-2xl overflow-hidden h-[250px] md:h-auto'>
              <img
                src={refernceImage || '/placeholder.svg'}
                alt={projectTitle}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Right Side - Project Information */}
            <div className='w-full md:w-3/5 p-6 flex flex-col justify-between'>
              <div className='space-y-4'>
                {/* Project Title and User */}
                <div>
                  <h3 className='text-xl font-bold text-black mb-1'>
                    {projectTitle}
                  </h3>
                  <p className='text-black/80'>By: {userName}</p>
                </div>

                {/* Project Details - 2x2 Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div className='space-y-1'>
                    <p className='text-xs text-black/60 uppercase tracking-wider'>
                      Event Date
                    </p>
                    <p className='text-sm text-black/90 font-semibold'>
                      {eventDate}
                    </p>
                  </div>

                  <div className='space-y-1'>
                    <p className='text-xs text-black/60 uppercase tracking-wider'>
                      Event Type
                    </p>
                    <p className='text-sm text-black/90 font-semibold'>
                      {eventType}
                    </p>
                  </div>

                  <div className='space-y-1'>
                    <p className='text-xs text-black/60 uppercase tracking-wider'>
                      Number of People
                    </p>
                    <p className='text-sm text-black/90 font-semibold'>
                      {noOfPeople}
                    </p>
                  </div>

                  {description && (
                    <div className='space-y-1'>
                      <p className='text-xs text-black/60 uppercase tracking-wider'>
                        Description
                      </p>
                      <p className='text-sm text-black/90 line-clamp-2 '>
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Chips Section */}
              <div className='flex flex-wrap gap-2 mt-6'>
                <Tag text={`Budget: ₹ ${budget}`} />
                <Tag text={`Guests: ${noOfPeople}`} />
                <Tag text={`Type: ${eventType}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlassCard;
