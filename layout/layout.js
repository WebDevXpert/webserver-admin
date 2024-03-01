import React from 'react';
import { useDarkMode } from '@/context/DarkmodeContext';

const Layout = ({ children }) => {
    const { darkMode } = useDarkMode();

<<<<<<< HEAD
    const darkModeEnabled = session?.user?.darkMode;


    const layoutClasses = darkModeEnabled
        ? "flex h-full bg-gray"
        : "flex h-full light-gray";

    const containerClasses = darkModeEnabled
        ? "m-auto bg-white rounded-md w-3/5 h-4/7 grid lg:grid-cols-2"
        : "m-auto light-gray rounded-md w-3/5 h-4/7 grid lg:grid-cols-2";
=======
    const layoutClasses = darkMode
        ? "flex h-full bg-gray-900 text-white"
        : "flex h-full bg-gray-100 text-gray-900";

    const containerClasses = darkMode
        ? "m-auto bg-gray-800 text-white rounded-md w-3/5 h-4/7 grid lg:grid-cols-2"
        : "m-auto bg-gray-200 text-gray-900 rounded-md w-3/5 h-4/7 grid lg:grid-cols-2";
>>>>>>> 5c9367b6f0e638fecc739458144fc9fbdee6a77d

    return (
        <div className={layoutClasses}>
            <div className={containerClasses}>
                <div className="flex flex-col justify-evenly">
                    <div className="text-center py-15">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
