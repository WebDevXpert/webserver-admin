import { useSession, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GeneralLayout = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);
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
        // }, [session, router]);
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout');
        await router.replace('/login');
    };

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <p>Please login again to renew your session.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            <main>{children}</main>
        </>
    );
};

export default GeneralLayout;
