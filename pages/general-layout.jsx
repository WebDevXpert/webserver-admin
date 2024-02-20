import { useSession, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GeneralLayout = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const userSession = await getSession();
            // if (!userSession && !['/login', '/register'].includes(router.pathname)) {
            if (!userSession) {
                router.replace('/login');
            } else if (userSession) {
                const expiresAt = new Date(userSession.expires * 1000);
                const now = new Date();
                const timeUntilExpiration = expiresAt - now;

                // Show popup 2 minutes before session expiration
                if (timeUntilExpiration > 0 && timeUntilExpiration <= 2 * 60 * 1000) {
                    setShowPopup(true);
                }

                // Expire session after 5 minutes
                if (timeUntilExpiration <= 0) {
                    await router.replace('/login');
                }

                // // Show popup 5 minutes before session expiration
                // if (timeUntilExpiration > 0 && timeUntilExpiration <= 5 * 60 * 1000) {
                //     setShowPopup(true);
                // }

                // // Expire session after 9 hours
                // if (timeUntilExpiration <= 0) {
                //     await router.replace('/login');
                // }
            }
        };

        checkAuth();
    }, [session, router]);

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
