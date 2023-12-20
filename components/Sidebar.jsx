import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex dark:bg-dark dark:text-white'>
      <div className='fixed w-20 h-screen p-4 bg-white dark:bg-dark dark:text-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center dark:bg-dark dark:text-white'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/RegistrationForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/LoginForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/OnboardForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='/BillingForm'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
