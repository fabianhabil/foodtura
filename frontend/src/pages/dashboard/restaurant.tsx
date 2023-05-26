import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';

const Home = () => {
    return <>page restaurant</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <DashboardLayout>{page}</DashboardLayout>
        </>
    );
};

export default Home;
