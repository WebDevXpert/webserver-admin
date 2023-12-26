import { getSession } from 'next-auth/react';

const SessionPage = () => {
    return <p>Session expired. Please log in again.</p>;
};

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
        props: {},
    };
}

export default SessionPage;
