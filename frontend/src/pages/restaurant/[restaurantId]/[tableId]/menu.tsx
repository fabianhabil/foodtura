import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';

const Home = () => {
    return <>ini page menu, udah masuk restaurant id dan table id</>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <>
            <StoreLayout>{page}</StoreLayout>
        </>
    );
};

export default Home;
