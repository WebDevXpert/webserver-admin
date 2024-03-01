import { useSession, getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const GeneralLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const checkAuth = async () => {
        const userSession = await getSession();
        if (!userSession && !['/login', '/register'].includes(router.pathname)) {
            router.push('/login');
        }
    };
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