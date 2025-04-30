import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <main className='bg-red-400'>
        <Outlet />
      </main>
    </div>
  );
}
