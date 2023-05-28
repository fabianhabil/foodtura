import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import FoodMenu from '@/components/templates/Dashboard/Food/FoodMenu/FoodMenu';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const menuFoodPageSEO: HeadProps = {
        title: 'Food - ',
        description: 'Menu - Foodtura. View and order menus at your desired restaurant directly on Foodtura.',
        ogImage: '/images/og/og_dashboard_menu_page.png',
        override: true
    };

    return (
        <>
            <Head {...menuFoodPageSEO} />
            <FoodMenu />
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
