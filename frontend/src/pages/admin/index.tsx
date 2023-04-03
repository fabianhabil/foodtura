import AdminLayout from '@/components/templates/Admin/AdminLayout/AdminLayout';

const Home = () => {
    return <>test admin layout</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <AdminLayout>{page}</AdminLayout>
        </>
    );
};

export default Home;
