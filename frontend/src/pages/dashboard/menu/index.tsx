import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import Menu from '@/components/templates/Dashboard/Menu/Menu';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const menuPageSEO: HeadProps = {
        title: 'Menu - Dashboard',
        description: 'Menu - Foodtura. View and order menus at your desired restaurant directly on Foodtura.',
        ogImage: '/images/og/og_dashboard_menu_page.png',
        override: true
    };

    return (
        <>
            <Head {...menuPageSEO} />
            <Menu />
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
