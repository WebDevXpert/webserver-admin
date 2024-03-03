import { useSession, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const GeneralLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const checkAuth = async () => {
        const userSession = await getSession();
        // if (!userSession && !['/login', '/register'].includes(router.pathname)) {
        if (!userSession) {
            router.push('/login');
        }
    };
    useEffect(() => {
        checkAuth();
    }, [session, router]);

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
