import React from 'react';
import Inputfield from '../components/Inputfield';
import Button from '../components/Button';
import Back from '../../public/assets/svg/MyIcon';

const ForgotPassword = () => {
  return (
    <div className='w-full h-screen relative bg-theme-gradient p-2'>
      <div
        className='w-full h-full rounded- flex flex-row p-6 justify-evenly items-center
bg-white/15 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30'
      >
        <div className='w-[40%] py-2 gap-6 flex-col flex justify-start items-center'>
          <h1 className='text-3xl capitalize font-normal text-textHeading'>
            Login to our account
          </h1>
          <Inputfield
            label={'Email'}
            placeholder={'enter your email'}
            type={'email'}
          />
          <Button
            text={'Submit'}
            variant={'capsule'}
          ></Button>
        </div>
      </div>
      <div className='absolute top-10 left-10 py-2 text-textHeading w-fit px-4 font-light text-lg bg-textHeading rounded-full'>
        <Back />
      </div>
    </div>
  );
};

export default ForgotPassword;
