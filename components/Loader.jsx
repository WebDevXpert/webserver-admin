import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return showLoader ? (
        <div className="flex items-center justify-center h-full">
            <div role="status" className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <span className="sr-only">Loading...</span>
        </div>
    ) : null;
};

export default Loader;
