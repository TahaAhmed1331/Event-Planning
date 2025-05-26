import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from './ChartTooltip';
import Typography from '../Typography';

const themeColors = ['#FF6F61', '#703bf7', '#ffd85f', '#e0e38b']; // coral pink, purple, yellow, etc.

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return (
    <path
      d={getPath(x, y, width, height)}
      stroke='none'
      fill={fill}
    />
  );
};

const ProfileAnalyticsChart = ({
  completedJobs,
  proposalsSent,
  lockedProjects,
  responsesReceived,
}) => {
  const data = [
    { name: 'Completed', value: completedJobs },
    { name: 'Proposals', value: proposalsSent },
    { name: 'Locked', value: lockedProjects },
    { name: 'Responses', value: responsesReceived },
  ];

  return (
    <div className='bg-white/20 p-5 backdrop-blur-3xl border-1 border-lightBgShade overflow-hidden rounded-3xl'>
      <Typography
        variant='subheading'
        className='text-center text-BlackText'
      >
        Performance Analytics Overview
      </Typography>

      <ResponsiveContainer
        width='100%'
        className='!h-60'
      >
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray='3 3'
            // stroke='rgba(255,255,255,0.2)'
            stroke='#30303070'
          />
          <XAxis
            dataKey='name'
            stroke='BlackText'
            tick={{ fill: 'BlackText', fontSize: 13 }}
            axisLine={{ stroke: 'transparent' }}
            tickLine={{ stroke: 'BlackText' }}
          />
          <YAxis
            stroke='BlackText'
            tick={{ fill: 'BlackText', fontSize: 13 }}
            axisLine={{ stroke: 'transparent' }}
            tickLine={{ stroke: 'BlackText' }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Bar
            dataKey='value'
            shape={<TriangleBar />}
            label={{
              position: 'top',
              fill: 'BlackText',
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={themeColors[index % themeColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfileAnalyticsChart;
