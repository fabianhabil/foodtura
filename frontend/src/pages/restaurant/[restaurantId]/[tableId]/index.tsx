import LoadingIcon from '@/components/atoms/LoadingIcon/LoadingIcon';
import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import PathRouteList from '@/helper/pathRouteList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();
    const pathRouteList = PathRouteList();

    useEffect(() => {
        let mounted = true;

        if (mounted && pathRouteList[1] !== '[restaurantId]') {
            console.log(
                `/restaurant/${pathRouteList[1]}/${pathRouteList[2]}/menu`
            );
            router.push({
                pathname: `/restaurant/${pathRouteList[1]}/${pathRouteList[2]}/menu`
            });
        }

        return () => {
            mounted = false;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return (
        <>
            <LoadingIcon />
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
