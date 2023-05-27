import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Category - Foodtura</title>
            </Head>
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
