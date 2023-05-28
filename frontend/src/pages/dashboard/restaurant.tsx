import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import Restaurant from '@/components/templates/Dashboard/Restaurant/Restaurant';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const restaurantDashboardSEO: HeadProps = {
        title: 'Restaurant - Dashboard',
        description:
            'Log in using your account and go straight to the Foodtura dashboard page. You can customize people, and view your account, and profile settings. See more.',
        ogImage: '/images/og/og_dashboard_restaurant_page.png',
        override: true
    };

    return (
        <>
            <Head {...restaurantDashboardSEO} />
            <Restaurant />
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <DashboardLayout>{page}</DashboardLayout>
        </>
    );
};

export default Home;
