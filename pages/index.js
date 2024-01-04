import { getSession, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            // router.push('/login');
            router.push(apiUrl || process.env.NEXT_PUBLIC_PRODUCTION_URL);
            console.log("apiUrl", apiUrl)
        }
    }, [session, router]);

    if (!session) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>Webservers</title>
                <meta name='description' content='panel to get different onboard sites and forms' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='bg-gray-100 min-h-screen dark:bg-dark dark:text-white'>
                <TopCards />
                <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4 dark:bg-dark dark:text-white'>
                    <BarChart />
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const sessionPromise = getSession(context);

    return sessionPromise
        .then((session) => {
            if (!session) {
                return {
                    redirect: {
                        destination: '/login',
                        permanent: false,
                    },
                };
            }

            return {
                props: {
                    session,
                },
            };
        })
        .catch(() => ({
            props: {
                session: null,
            },
        }));
}
