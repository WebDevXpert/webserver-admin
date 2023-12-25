import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Header = () => {

  return (
    <div className='flex justify-between px-4 pt-4 dark:bg-medium dark:text-white py-3'>
      <h2>Dashboard</h2>
      <div className='flex flex-1 justify-end'>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
