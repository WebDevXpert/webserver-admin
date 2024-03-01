import React from 'react';
import { useDarkMode } from '@/context/DarkmodeContext';

const Layout = ({ children }) => {
    const { darkMode } = useDarkMode();

    const darkModeEnabled = session?.user?.darkMode;


    const layoutClasses = darkModeEnabled
        ? "flex h-full bg-gray"
        : "flex h-full light-gray";

    const containerClasses = darkModeEnabled
        ? "m-auto bg-white rounded-md w-3/5 h-4/7 grid lg:grid-cols-2"
        : "m-auto light-gray rounded-md w-3/5 h-4/7 grid lg:grid-cols-2";

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
