import Header from '@/components/Header'
import React from 'react'

const GeneralLayout = ({ children }) => {
    return (
        <body>
            <Header />
            {children}
        </body>
    )
}

export default GeneralLayout
