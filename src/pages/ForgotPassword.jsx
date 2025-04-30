import React from 'react';
import Inputfield from '../components/Inputfield';
import Button from '../components/Button';

const ForgotPassword = () => {
  return (
    <div className='w-full h-screen bg-theme-gradient flex flex-col p-6 justify-evenly items-center'>
      <div className='w-full '>
        <div className='py-2 text-textHeading w-fit px-4 font-light text-lg border border-textPara rounded-full'>
          Crexito
        </div>
      </div>
      <div className='w-full h-full  flex flex-col justify-center items-center p-2'>
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
    </div>
  );
};

export default ForgotPassword;
