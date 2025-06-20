import { Fullscreen, Minimize } from 'lucide-react';
import Button from '../Button';

const CardImagesSlider = ({ img, setFullPreview, fullPreview }) => {
  return (
    <div className='w-full relative h-full aspect-[1/2] bg-red-50 rounded-3xl overflow-hidden flex justify-center items-center'>
      <img
        src={img}
        className={`max-w-full max-h-full transform transition-transform duration-300 object-contain ${
          fullPreview ? 'scale-100' : 'scale-150 '
        }`}
      />

      <Button
        text={fullPreview ? 'Minimize' : 'Full Preview'}
        variant='primary'
        classname='!rounded-full  absolute top-5 right-10 '
        icon={fullPreview ? <Minimize /> : <Fullscreen />}
        onClick={() => {
          setFullPreview(!fullPreview);
          console.log(fullPreview);
        }}
      />
    </div>
  );
};

export default CardImagesSlider;
