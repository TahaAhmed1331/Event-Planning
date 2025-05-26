import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div>
      <main className='theme-layout-gradient relative w-full flex flex-row justify-between gap-2 h-screen overflow-hidden p-2'>
        <div
          className='BallShadow_1 w-96 h-96 rounded-full transform opacity-80 z -translate-y-1/2 -translate-x-1/2 bg-gradient-to-br from-Accent to-Yellow  absolute top-[20%] left-[20%]'
          style={{ animation: 'ball_1_animation 20s infinite linear' }}
        />
        <div
          className='BallShadow_2 w-96 h-96 rounded-full opacity-80  bg-gradient-to-br from-middleGreen to-primary  absolute -bottom-5 right-40'
          style={{ animation: 'ball_2_animation 20s infinite linear' }}
        />

        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}
