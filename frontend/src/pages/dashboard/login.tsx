import Login from '@/components/templates/Dashboard/Login/Login';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const loginPageSEO: HeadProps = {
        title: 'Login - Foodtura',
        description:
            'Log in using your account and instantly make a reservation for your favorite restaurant. Note: if you are a Customer you are not required to create an account to make reservations at the restaurant (unless there is a prepayment), if you do not already have a Foodtura account, you will need to create one to manage your restaurant reservations. If you already have an account, it will appear directly in the My Bookings section.',
        ogImage: '/images/og/og_loginpage.png',
        override: true
    };

    return (
        <>
            <Head {...loginPageSEO} />
            <Login />
        </>
    );
};

export default Home;
