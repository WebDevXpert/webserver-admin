import { useSession, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const GeneralLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const checkAuth = async () => {
        const userSession = await getSession();

        if (!userSession && !['/login', '/register'].includes(router.pathname)) {
            router.push('/login'); // Redirect to login if not logged in and trying to access other pages
        } else if (userSession && ['/login', '/register'].includes(router.pathname)) {
            router.push('/'); // Redirect to home if logged in and trying to access login or register pages
        }
    };

    useEffect(() => {
        checkAuth();
    }, [session, router]);

    useEffect(() => {
        if (status === 'loading') return; // Wait for session to load before checking auth

        const allowedPaths = ['/login', '/register', '/', '/bu', '/BillingForm', '/OnboardForm']; // Define allowed paths
        if (!allowedPaths.includes(router.pathname)) {
            router.push('/'); // Redirect to home if trying to access non-allowed path
        }
    }, [session, status, router]);

    if (status === 'loading') {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Loader />
            </div>
        );
    }

    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
