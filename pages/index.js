import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loader from '@/components/Loader';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating data fetching with a delay of 3 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));
                setLoading(false); // Set loading to false after data fetching
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (status === 'loading') {
            return; // Return if session status is still loading
        }

        if (!session) {
            router.push("/login"); // Redirect to login page if session is not available
        }
    }, [session, status, router]);

    if (status === 'loading' || loading) {
        return <Loader />; // Display loader while session is loading or data fetching is in progress
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
                {loading ? (
                    <div className='flex items-center justify-center h-screen'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <TopCards />
                        <iframe

                            className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4 dark:bg-dark dark:text-white w-full lg:h-[70vh] h-[70vh] '
                            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/074182974757/dashboards/71905e22-ac09-42ea-a4ed-bc00e4d0e355?directory_alias=wmecarbonops">
                        </iframe>

                        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4 dark:bg-dark dark:text-white'>
                            <BarChart />
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

// Server-side function for session handling
export async function getServerSideProps(context) {
    const session = await getSession(context);

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
}
