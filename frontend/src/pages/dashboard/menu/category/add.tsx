import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import AddFoodCategory from '@/components/templates/Dashboard/FoodCategory/AddFoodCategory/AddFoodCategory';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const menuCatogeryPageSEO: HeadProps = {
        title: 'Category - Dashboard',
        description: 'Menu - Foodtura. View and order menus at your desired restaurant directly on Foodtura.',
        ogImage: '/images/og/og_dashboard_menu_page.png',
        override: true
    };

    return (
        <>
            <Head {...menuCatogeryPageSEO} />
            <AddFoodCategory />
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
