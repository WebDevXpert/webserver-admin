import React from 'react';
import Header from '@/components/Header';

const GeneralLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
