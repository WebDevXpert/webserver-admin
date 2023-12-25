import Header from '@/components/Header';
import React from 'react';

const GeneralLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
