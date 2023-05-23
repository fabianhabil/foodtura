import StoreHome from '@/components/templates/Store/Home/Home';
import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';

const Home = () => {
    return (
        <>
            <StoreHome />
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <StoreLayout>{page}</StoreLayout>
        </>
    );
};

export default Home;
