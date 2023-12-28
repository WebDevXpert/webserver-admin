// Header.js
import React from 'react';
import { useSession } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='flex justify-between px-4 pt-4 dark:bg-medium dark:text-white py-3 '>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      {session ? (
        <div className='flex flex-1 items-center justify-end'>
          <span className='mr-4'>Welcome, {session.user.email}</span>
          <ThemeToggle />
        </div>
      ) : (
        <div className='flex flex-1 items-center justify-end'>
          <ThemeToggle />
        </div>
      )}
    </div>
  );
};

export default Header;
