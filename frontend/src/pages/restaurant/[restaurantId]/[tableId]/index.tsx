import LoadingIcon from '@/components/atoms/LoadingIcon/LoadingIcon';
import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import PathRouteList from '@/helper/pathRouteList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from '@/components/atoms/Head';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const router = useRouter();
    const pathRouteList = PathRouteList();

    const tablePageSEO: HeadProps = {
        title: 'Table - Foodtura',
        description:
            'Table - Foodtura. View and Book your table for restaurants in Foodtura restaurants. See restaurant menus, reviews, ratings, phone numbers, addresses, hours, photos and maps.',
        ogImage: '/images/og/og_rsvppage.png',
        override: true
    };

    useEffect(() => {
        let mounted = true;

        if (mounted && pathRouteList[1] !== '[restaurantId]') {
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
            <Head {...tablePageSEO} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LoadingIcon />
            </div>
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
