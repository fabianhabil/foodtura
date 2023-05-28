import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import Officer from '@/components/templates/Dashboard/Officer/Officer';
import Head from '@/components/atoms/Head';
import { getHost } from '@/helper/getHost';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const OfficerPageSEO: HeadProps = {
        title: 'Officer - Dashboard',
        description:
            'Officer - Foodtura. Enable your workforce to access business data about your restaurant online, anywhere, mobilize.',
        ogImage: '/images/og/og_dashboard_officer_page.png',
        override: true
    };

    return (
        <>
            <Head {...OfficerPageSEO} />
            <Officer />
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
