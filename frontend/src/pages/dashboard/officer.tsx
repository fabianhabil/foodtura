import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';

const Home = () => {
    return <>page officer</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <DashboardLayout>{page}</DashboardLayout>
        </>
    );
};

export default Home;
