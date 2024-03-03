import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return showLoader ? (
        <div className="flex items-center justify-center h-full">
            <div role="status" className="animate-spin-sun">
                <svg
                    aria-hidden="true"
                    className="inline w-16 h-16 text-blue-500 dark:text-yellow-300 fill-green-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M50 5C50 3.34315 48.6569 2 47 2C45.3431 2 44 3.34315 44 5C44 6.65685 45.3431 8 47 8C48.6569 8 50 6.65685 50 5Z" fill="currentColor" />
                    <path d="M50 96C50 97.6569 48.6569 99 47 99C45.3431 99 44 97.6569 44 96C44 94.3431 45.3431 93 47 93C48.6569 93 50 94.3431 50 96Z" fill="currentColor" />
                    <path d="M96 50C97.6569 50 99 48.6569 99 47C99 45.3431 97.6569 44 96 44C94.3431 44 93 45.3431 93 47C93 48.6569 94.3431 50 96 50Z" fill="currentColor" />
                    <path d="M5 50C6.65685 50 8 48.6569 8 47C8 45.3431 6.65685 44 5 44C3.34315 44 2 45.3431 2 47C2 48.6569 3.34315 50 5 50Z" fill="currentColor" />
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : null;
};

export default Loader;