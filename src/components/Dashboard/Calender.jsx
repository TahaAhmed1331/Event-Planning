import React, { useState } from 'react';
import dayjs from 'dayjs';
import Button from '../Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ markedDates }) => {
  const [viewedMonth, setViewedMonth] = useState(dayjs());

  const daysInMonth = viewedMonth.daysInMonth();
  const startDay = viewedMonth.startOf('month').day();

  const daysArray = [];
  for (let i = 0; i < startDay; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const handlePrevMonth = () => {
    setViewedMonth((prev) => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setViewedMonth((prev) => prev.add(1, 'month'));
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className='flex justify-between items-center  border-lightBorder border
        backdrop-blur-lg bg-white/40 h-full rounded-lg w-full max-w-md px-4 mb-2'
      >
        <Button
          onClick={handlePrevMonth}
          variant={'primary'}
          icon={<ChevronLeft />}
          classname='!p-1 !rounded-full'
        />

        <div className='text-lg font-semibold text-gray-800'>
          {viewedMonth.format('MMMM YYYY')}
        </div>
        <Button
          onClick={handleNextMonth}
          variant={'primary'}
          icon={<ChevronRight />}
          classname='!p-1 !rounded-full'
        ></Button>
      </div>

      <div
        className='grid grid-cols-7 gap-2 p-4 border-lightBorder border
        backdrop-blur-lg bg-white/40 h-full rounded-lg w-full max-w-md'
      >
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className='text-center font-bold text-gray-700'
          >
            {day}
          </div>
        ))}
        {daysArray.map((day, index) => {
          const date = day ? viewedMonth.date(day).format('YYYY-MM-DD') : null;
          const marked = markedDates[date];

          return (
            <div
              key={index}
              className='py-2 relative flex items-center justify-center'
            >
              {day ? (
                <div
                  className={`w-10 h-10 flex cursor-pointer items-center justify-center rounded-full 
                    ${
                      marked
                        ? 'fancy-gradient text-textHeading relative group'
                        : 'text-gray-500'
                    }`}
                >
                  {day}
                  {marked && (
                    <div className='absolute bottom-full mb-2 w-max bg-[linear-gradient(to_right,var(--color-primary),#9b7cf9)] text-white text-xs rounded-full px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition'>
                      {marked.project}
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
