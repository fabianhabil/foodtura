import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            restaurant id, ini masih home dari restaurant <br />
            <Link href='/restaurant/restaurantid/tableid'>
                <p>contoh mockup table masuk table id</p>
            </Link>
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
