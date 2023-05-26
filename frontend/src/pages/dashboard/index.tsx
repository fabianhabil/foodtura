import DashboardLayout from '@/components/templates/Dashboard/DashboardLayout/DashboardLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard/restaurant');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
