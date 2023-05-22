import Menu from '@/components/templates/Store/Menu/Menu';
import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';

const Home = () => {
    return (
        <>
            <Menu />
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
