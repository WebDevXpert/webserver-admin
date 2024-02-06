import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { RiLoginBoxFill } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { toast } from 'react-toastify';

const Sidebar = ({ children }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const { data: session } = useSession();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const logoutHandler = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/login');
      toast.success("User logged out");
      router.push(apiUrl);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const isAuthenticated = () => {
    return session !== null;
  };

  const AuthenticatedLink = ({ href, children }) => {
    if (isAuthenticated()) {
      return <Link href={href}>{children}</Link>;
    } else {
      return null;
    }
  };

  return (
    <div className='flex dark:bg-dark dark:text-white'>
      <div className='sticky top-0 w-30 min-h-screen p-4 pb-10 bg-white dark:bg-dark dark:text-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center dark:bg-dark dark:text-white text-center'>
          <div className='bg-purple-800 text-white p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
            <RxSketchLogo size={35} />
          </div>

          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

          <AuthenticatedLink href='/'>
            <div className='bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white text-center'>
              <RxDashboard size={35} className='w-full' />
              <h1 className='text-sm mt-1'>Home</h1>
            </div>
          </AuthenticatedLink>
          <AuthenticatedLink href='/BillingForm'>
            <div className='bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white text-center'>
              <RiBillLine size={35} className='w-full' />
              <h1 className='text-sm mt-1'>Bill Input</h1>
            </div>
          </AuthenticatedLink>
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white text-center w-full'
            >
              <FaWpforms size={40} className='w-full' />
              <h1 className='text-sm mt-1'>Site Administration</h1>
            </button>
            {showDropdown && (
              <div className='absolute top-14 left-0 w-full bg-white dark:bg-dark dark:text-white rounded-lg shadow-md'>
                <Link href='/OnboardForm'>
                  <div className='p-3 hover:bg-gray-100 dark:hover:bg-dark'>
                    <FaWpforms size={40} className='w-full' />
                    <h1 className='text-sm mt-1'>Site Onboarding</h1>
                  </div>
                </Link>
                <Link href='/bu'>
                  <div className='p-3 hover:bg-gray-100 dark:hover:bg-dark'>
                    <FaWpforms size={40} className='w-full' />
                    <h1 className='text-sm mt-1'>Onboarded List</h1>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {isAuthenticated() ? (
            <>
              <div className='bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white' onClick={logoutHandler}>
                <AiOutlineLogin size={35} className='w-full' />
                <h1 className='text-sm mt-1'>Logout</h1>
              </div>
            </>
          ) : (
            <Link href='/login'>
              <div className='bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
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
