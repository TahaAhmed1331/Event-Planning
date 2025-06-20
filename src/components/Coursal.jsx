import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Utility to split array into chunks of 3
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Crousal = ({ cards, viewPerPage }) => {
  const groupedSlides = chunkArray(cards, viewPerPage ? viewPerPage : 3); // Split into chunks of 3

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={35}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {groupedSlides.map((group, index) => (
        <SwiperSlide key={index}>
          <div className='w-full flex gap-6 max-h-full'>
            {group.map((card, idx) => (
              <div
                key={idx}
                className={`${
                  viewPerPage ? 'w-full' : 'w-1/3'
                } overflow-hidden rounded-3xl`}
              >
                {card}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Crousal;
