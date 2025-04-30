import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import { AlignHorizontalDistributeCenter, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className='w-full h-screen bg-theme-gradient flex flex-row p-6 justify-evenly items-center'>
      <div className='w-[50%] h-full  flex flex-col justify-start items-center p-2'>
        <div className='w-full '>
          <div className='py-2 text-textHeading w-fit px-4 font-light text-lg border border-textPara rounded-full'>
            Crexito
          </div>
        </div>
        <div className='w-[65%] py-2 gap-6 flex-col flex justify-start items-center'>
          <h1 className='text-3xl capitalize font-normal text-textHeading'>
            Login to our account
          </h1>
          <Inputfield
            label={'Email'}
            placeholder={'enter your email'}
            type={'email'}
          />
          <Inputfield
            type={!showPassword ? 'password' : 'text'}
            label={'Password'}
            placeholder={'enter your password'}
            forgetpass={true}
            icon={showPassword ? <Eye /> : <EyeOff />}
            onClick={() => setShowPassword(!showPassword)}
          />

          <Dropdown
            label='Role'
            placeholder='Chose your role'
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            value={selected}
            onChange={(option) => setSelected(option)}
          />

          <Button
            text={'Submit'}
            variant={'capsule'}
            onClick={() => console.log('clicked')}
          ></Button>

          <Button
            onClick={() => console.log('clicked')}
            classname='bg-lightBgShade'
            text='Google'
            variant='capsule'
            icon={<AlignHorizontalDistributeCenter />}
          ></Button>
        </div>
      </div>
      <div className='w-[35%] rounded-4xl relative h-full'>
        <div className='w-full h-full rounded-4xl overflow-hidden'>
          <img
            src='/assets/sideImg.jpg'
            alt=''
            className='w-full h-full object-cover inverted-radius'
          />
        </div>
        <div className='absolute rounded-full w-25 h-25 flex justify-center items-center -top-5 -right-5 bg-gradient-to-r from-[#23A89B] via-[#22AA9D] to-[#1BB7A8] '>
          <div
            className='w-[75%] h-[75%] overflow-hidden rounded-full'
            style={{
              animation: 'scalePulse 6s ease-in-out infinite',
              animationDelay: '2s',
            }}
          >
            <img
              src='https://images.unsplash.com/photo-1643066870930-801553cf9d24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='w-full h-full object-cover '
            />
          </div>
        </div>
        <div className='absolute rounded-full w-25 h-25 flex justify-center items-center  bottom-40 -left-12 bg-gradient-to-b from-[#33AAB4] to-[#479BC3] '>
          <div
            className='w-[75%] h-[75%]  overflow-hidden rounded-full'
            style={{
              animation: 'scalePulse 6s ease-in-out infinite',
            }}
          >
            <img
              src='https://images.unsplash.com/photo-1624763149686-1893acf73092?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='absolute rounded-full w-52 h-52 flex justify-center items-center  -bottom-6 right-24 bg-gradient-to-r from-[#636CE3] via-[#6567E5] to-[#685EEB] '>
          <div
            className='w-[75%] h-[75%] overflow-hidden rounded-full'
            style={{
              animation: 'scalePulse 6s ease-in-out infinite',
              animationDelay: '1s',
            }}
          >
            <img
              src='https://images.pexels.com/photos/14716280/pexels-photo-14716280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='w-full h-full object-cover '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
