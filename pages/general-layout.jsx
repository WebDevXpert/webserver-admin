import { useSession, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
        return <p>Loading...</p>;
    }

    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
