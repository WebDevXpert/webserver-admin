import { useSession, getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const GeneralLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

<<<<<<< HEAD
    const checkAuth = async () => {
        const userSession = await getSession();
        if (!userSession && !['/login', '/register'].includes(router.pathname)) {
            router.push('/login');
        }
    };
=======
>>>>>>> 5c9367b6f0e638fecc739458144fc9fbdee6a77d
    useEffect(() => {
        const checkAuth = async () => {
            const userSession = await getSession();
            if (!userSession && !['/login', '/register'].includes(router.pathname)) {
                router.replace('/login');
            }
        };

        checkAuth();
    }, [session, router]);

    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;