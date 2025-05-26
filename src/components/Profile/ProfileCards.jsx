import RatingStar from '../RatingStar';
import Typography from '../Typography';

const ProfileCards = ({
  // for profileRecentProfile card
  RecentProjectCard,
  recentClientName,
  recentEventDate,
  recentProjectTitle,
  recentProjectInformation,
  recentProjectVideo,
  recentProjectRating,
}) => {
  return (
    <>
      {RecentProjectCard && (
        <div
          className='w-full px-4 py-2 overflow-hidden border  bg-white/20 
             border-lightBgShade backdrop-blur-xl shadow-lg rounded-2xl'
        >
          <div className='flex justify-between border-b-2 border-black/20 pb-2 items-end'>
            <Typography
              variant='title'
              className='text-BlackText'
            >
              {recentClientName}
              <RatingStar
                rating={recentProjectRating}
                className='gap-2 my-2'
              />
            </Typography>
            <Typography
              variant='normal'
              className='text-BlackText font-semibold'
            >
              {recentEventDate}
            </Typography>
          </div>

          <div className='flex pt-4 justify-between gap-10 h-auto mt-1 w-full items-start'>
            <div className='w-[46%] h-[44vh]  items-start flex justify-start flex-col gap-4'>
              <Typography
                variant='subheading'
                className='text-BlackText'
              >
                Information Gathered
              </Typography>
              <Typography
                variant='title'
                className='text-BlackText'
              >
                {recentProjectTitle}
              </Typography>
              <Typography
                variant='paragraph'
                className='!text-black/80 text-start'
              >
                {recentProjectInformation}
              </Typography>
            </div>
            <div className='border rounded-full h-[44vh] border-black/20 '>
              {/* extra line between div */}
            </div>
            <div className='w-[46%] h-[44vh]  flex flex-col gap-4 items-start justify-start '>
              <Typography
                variant='subheading'
                className='text-BlackText'
              >
                Final Result
              </Typography>
              <div className='h-full w-[88%] overflow-hidden rounded-2xl'>
                <video
                  className='w-full h-full object-cover block'
                  controls
                >
                  <source
                    src={recentProjectVideo}
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCards;
