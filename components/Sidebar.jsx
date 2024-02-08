import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowDropdown } from "react-icons/io";
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
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const [logoutButtonPosition, setLogoutButtonPosition] = useState('');


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

  useEffect(() => {
    const handleRouteChange = () => {
      closeDropdown();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setLogoutButtonPosition(showDropdown ? 'relative mt-8' : '');
  }, [showDropdown]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-dark dark:text-white'>
      <div className='flex-grow flex flex-col sm:flex-row'>
        <div className='w-full sm:w-48 bg-white dark:bg-dark dark:text-white border-r border-gray-200 dark:border-gray-600 overflow-y-auto'>
          <div className='p-4'>
            <div className='flex items-center justify-center mb-8'>
              <div className='bg-purple-800 text-white p-3 rounded-full'>
                <RxSketchLogo size={35} />
              </div>
            </div>
            <div className='space-y-4'>
              <AuthenticatedLink href='/'>
                <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'>
                  <RxDashboard size={20} />
                  <span className='ml-2'>Home</span>
                </div>
              </AuthenticatedLink>


              {isAuthenticated() && (
                <div className='relative' ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className='flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'
                  >
                    <div className='flex items-center'>
                      {/* <FaWpforms size={20} /> */}
                      <span className='ml-2'>Dropdown </span>
                      <IoIosArrowDropdown size={20} className='ml-2' />

                    </div>
                  </button>
                  {showDropdown && (
                    <div className='absolute left-0 top-full w-full mt-2 py-2 bg-white dark:bg-dark dark:text-white rounded-lg shadow-md'>
                      <AuthenticatedLink href='/OnboardForm'>
                        <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'>
                          <FaWpforms size={20} />
                          <span className='ml-2'>Site Onboarding</span>
                        </div>
                      </AuthenticatedLink>
                      <AuthenticatedLink href='/BillingForm'>
                        <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'>
                          <RiBillLine size={20} />
                          <span className='ml-2'>Bill Input</span>
                        </div>
                      </AuthenticatedLink>
                      <AuthenticatedLink href='/bu'>
                        <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'>
                          <FaWpforms size={20} />
                          <span className='ml-2'>Onboarded List</span>
                        </div>
                      </AuthenticatedLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={`p-4 $ {logoutButtonPosition}`}>
            {isAuthenticated() && (
              <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg' onClick={logoutHandler}>
                <AiOutlineLogin size={20} />
                <span className='ml-2'>Logout</span>
              </div>
            )}
            {!isAuthenticated() && (
              <Link href='/login'>
                <div className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg'>
                  <RiLoginBoxFill size={20} />
                  <span className='ml-2'>Login</span>
                </div>
              </Link>
            )}
          </div>
        </div>
        <main className='flex-1'>{children}</main>
      </div>
    </div >
  );
};

export default Sidebar;
