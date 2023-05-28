import Register from '@/components/templates/Dashboard/Register/Register';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const registerPageSEO: HeadProps = {
        title: 'Register - Foodtura',
        description:
            'Register your account and instantly make reservations for your favorite restaurants. Note: if you are a Customer, you do not need to create an account to make a reservation at a restaurant (unless there is a prepayment), if you do not already have a Foodtura account, you will need to create one to manage your restaurant reservations. If you already have an account, it will appear directly in the My Reservations section.',
        ogImage: '/images/og/og_registerpage.png',
        override: true
    };

    return (
        <>
            <Head {...registerPageSEO} />
            <Register />
        </>
    );
};

export default Home;
