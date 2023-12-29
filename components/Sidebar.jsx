import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { RiLoginBoxFill } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { useRouter } from 'next/router';

const Sidebar = ({ children }) => {
  // const { data: session } = useSession();

  // const logoutHandler = () => {
  //   signOut();
  // };

  // // Function to check if the user is authenticated
  // const isAuthenticated = () => {
  //   return session?.status === "authenticated";
  // };

  // // Wrapper for links that checks authentication
  // const AuthenticatedLink = ({ href, children }) => {
  //   if (isAuthenticated()) {
  //     return <Link href={href}>{children}</Link>;
  //   } else {
  //     return null;
  //   }
  // };
  const router = useRouter()
  const isSignupRoute = router.pathname === '/';

  return (
    <div div className='flex dark:bg-dark dark:text-white' >
      {
        isSignupRoute ? null :
          <div className='sticky top-0 w-30 h-screen p-4 pb-10 bg-white dark:bg-dark dark:text-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center dark:bg-dark dark:text-white text-center'>

              <div className='bg-purple-800 text-white p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
                <Link href="/">
                  <RxSketchLogo size={35} />
                </Link>
              </div>

              <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
              {/* <AuthenticatedLink href='/'> */}
              <Link href="/home">
                <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white text-center'>
                  <RxDashboard size={35} className='w-full' />
                  <h1 className='text-sm mt-1'>Home</h1>
                </div>
              </Link>
              {/* </AuthenticatedLink> */}
              {/* <AuthenticatedLink href='/OnboardForm'> */}
              <Link href="/OnboardForm">
                <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
                  <FaWpforms size={40} className='w-full' />
                  <h1 className='text-sm mt-1'>Site Onboard</h1>
                </div>
              </Link>
              {/* </AuthenticatedLink> */}
              {/* <AuthenticatedLink href='/BillingForm'> */}
              <Link href="/BillingForm">
                <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
                  <RiBillLine size={35} className='w-full' />
                  <h1 className='text-sm mt-1'>Bill Input</h1>
                </div>
              </Link>
              {/* </AuthenticatedLink> */}
              {/* {isAuthenticated() ? ( */}
              {/* <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white' onClick={logoutHandler}>
                <AiOutlineLogin size={35} className='w-full' />
                <h1 className='text-sm mt-1'>Logout</h1>
              </div> */}
              {/* ) : ( */}
              {/* <Link href='/login'>
                <div className='bg-gray-100  cursor-pointer my-4 p-3 rounded-lg inline-block dark:bg-dark dark:text-white'>
                  <RiLoginBoxFill size={35} className='w-full' />
                  <h1 className='text-xs'>Login</h1>
                </div>
              </Link> */}
              {/* )} */}
            </div>
          </div>
      }
      <main className='ml-20 w-full'>{children}</main>
    </div >

  );
};

export default Sidebar;
