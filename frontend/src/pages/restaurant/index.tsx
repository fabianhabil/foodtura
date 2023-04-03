import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            gak ada restaurant id, pergi sana
            <br />
            <Link href='/restaurant/restaurantid'>
                <p>click sini buat contoh restaurant id, tapi masih mockup</p>
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
