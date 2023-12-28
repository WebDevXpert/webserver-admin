import React from 'react';
import { useSession } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='flex justify-between px-4 pt-4 dark:bg-medium dark:text-white py-3'>
      <h2>Dashboard</h2>
      <div className='flex flex-1 items-center justify-end'>
        {session ? (
          <>
            <span className='mr-4'>Welcome, {session.user.name || session.user.email}</span>
            <ThemeToggle />
          </>
        ) : (
          <ThemeToggle />
        )}
      </div>
    </div>
  );
};

export default Header;