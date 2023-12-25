import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaWpforms } from 'react-icons/fa';
import { RiBillLine } from 'react-icons/ri';

const Sidebar = ({ children }) => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className='flex dark:bg-dark dark:text-white'>
      <div className='sticky top-0 w-30 h-screen p-4 pb-10 bg-white dark:bg-dark dark:text-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center dark:bg-dark dark:text-white text-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RxSketchLogo size={35} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/home'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white text-center'>
              <RxDashboard size={35} className='w-full' />
              <h1 className='text-xs'>Home</h1>
            </div>
          </Link>
          <Link href='/OnboardForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <FaWpforms size={40} className='w-full' />
              <h1 className='text-xs'>Site Onboard</h1>
            </div>
          </Link>
          <Link href='/BillingForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RiBillLine size={35} className='w-full' />
              <h1 className='text-xs'>Bill Input</h1>
            </div>
          </Link>
          {session ? (
            <button
              onClick={handleSignOut}
              className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'
            >
              <RiLoginBoxFill size={35} className='w-full' />
              <h1 className='text-xs'>Sign Out</h1>
            </button>
          ) : (
            <Link href='/'>
              <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
                <RiLoginBoxFill size={35} className='w-full' />
                <h1 className='text-xs'>Login</h1>
              </div>
            </Link>
          )}
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
