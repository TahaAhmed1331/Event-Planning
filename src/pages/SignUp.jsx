import { useContext, useState } from 'react';
import Inputfield from '../components/Inputfield';
import Button from '../components/Button';
import { Eye, EyeOff } from 'lucide-react';
import Typography from '../components/Typography';
import Dropdown from '../components/Dropdown';
import Back from '../../public/assets/svg/MyIcon';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { ProtectedRoutes, PublicRoutes } from '../constants/routes';

const SignUp = () => {
  const {formData, setFormData, setUser } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();



const handleSignUp = () => {
  const newErrors = {};

  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.role) newErrors.role = 'Role is required';
  if (!formData.password) newErrors.password = 'Password is required';
  if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
  if (formData.password !== formData.confirmPassword)
    newErrors.confirmPassword = 'Passwords do not match';

  // If any errors, prevent submission
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // All good → proceed with sign up
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const newUser = {
    ...formData,
    id: Date.now().toString(),
    proposals: [],
  };

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    localStorage.setItem('currentUser', JSON.stringify(newUser)); 
  localStorage.setItem("tempUser", JSON.stringify(newUser)); 
  localStorage.setItem("canAccessDetailsPage", "true");
      navigate(PublicRoutes.DETAILS_INFORMATION);


};


  return (
    <div className='w-full h-screen relative bg-theme-gradient p-2'>
      <div
        className='w-full h-full rounded- flex flex-row p-6 justify-evenly items-center
bg-white/15 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30
'
      >
        <div className='w-[50%] h-full  flex flex-col justify-start items-center p-2'>
          <div className='w-[65%] py-2 gap-2 flex-col flex justify-start items-center'>
            <Typography
              variant={'heading'}
              className={'capitalize text-textHeading'}
            >
              Create an account
            </Typography>
            <Inputfield
             error={errors.name}
              label={'Name'}
              placeholder={'enter your name'}
              type={'text'}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Inputfield
             error={errors.email}
              label={'Email'}
              placeholder={'enter your email'}
              type={'email'}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Dropdown
             error={errors.role}
              label='Role'
              placeholder='Chose your role'
              options={['Event Planning Agency', 'Event Owner']}
              value={formData.role}
              onChange={(option) => setFormData({ ...formData, role: option })}
            />
            <Inputfield
             error={errors.password}
              label={'Password'}
              placeholder={'enter your password'}
              type={!showPassword ? 'password' : 'text'}
              icon={showPassword ? <Eye /> : <EyeOff />}
              onClick={() => setShowPassword(!showPassword)}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <Inputfield
             error={errors.confirmPassword}
              label={'Confirm Password'}
              placeholder={'re-enter your password'}
              type={!showRePassword ? 'password' : 'text'}
              icon={showRePassword ? <Eye /> : <EyeOff />}
              onClick={() => setShowRePassword(!showRePassword)}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <Button
              text={'Submit'}
              classname={'!w-full !mt-6'}
              variant={'capsule'}
              onClick={() => handleSignUp()}
            ></Button>
            <Typography
              variant='sm'
              className='text-white cursor-pointer'
              onClick={() => navigate('/login')}
            >
              already have an account?
            </Typography>
          </div>
        </div>
        <div className='w-[35%] rounded-4xl relative h-full'>
          <div className='w-full h-full rounded-4xl overflow-hidden'>
            <img
              src='/assets/sideImg.jpg'
              alt=''
              className='w-full h-full object-cover'
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
      <div className='absolute top-10 left-10 py-2 text-textHeading w-fit px-4 font-light text-lg bg-textHeading rounded-full'>
        <Back />
      </div>
    </div>
  );
};

export default SignUp;
