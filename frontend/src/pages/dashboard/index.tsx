import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';

const Home = () => {
    return <>di sini gak ada apa2, cek validasi dan animasi loading</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <DashboardLayout>{page}</DashboardLayout>
        </>
    );
};

export default Home;
