import Typography from './Typography';

const ProgressBar = ({ label, total, obtain }) => {
  const progressGraph = [
    { percentage: 20, color: '#F73030' },
    { percentage: 40, color: '#F7E771' },
    { percentage: 60, color: '#F73030' },
    { percentage: 80, color: '#00BD61' },
    { percentage: 100, color: '#238B94' },
  ];
  const percentage = (obtain / total) * 100;
  const matchedColor =
    progressGraph.find((bar) => percentage <= bar.percentage)?.color ||
    '#238B94'; // fallback color

  return (
    <div>
      <span className='flex justify-between -mb-2'>
        <Typography
          variant='sm'
          className='text-BlackText capitalize !font-semibold '
        >
          {label}
        </Typography>
        <Typography
          variant='xs'
          className='text-BlackText text-shadow-lg font-semibold'
        >
          {`${(obtain / total) * 100}%`}
        </Typography>
      </span>
      <div className='w-full bg-white/10 backdrop-blur-lg p-[0.2rem] rounded-[50px] border-lightBorder border'>
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: matchedColor,
          }}
          className='py-2 bg-green-300 rounded-[50px]'
        ></div>
      </div>
      <span className='flex justify-center  relative -mt-2'>
        <Typography
          variant='xs'
          className='text-BlackText font-semibold'
        >
          {`${obtain} / ${total}`}
        </Typography>
      </span>
    </div>
  );
};

export default ProgressBar;
