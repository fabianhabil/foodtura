import { Grid } from '@mui/material';
import Head from '@/components/atoms/Head';
import Image from 'next/image';
import Link from 'next/link';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const landingPageSEO: HeadProps = {
        title: 'Foodtura - Open Table Restaurant',
        description:
            'Introducing the dining experience with Foodtura. Make online reservations, read restaurant reviews from diners, and and live access in realtime. Find and book the best restaurants you want to visit. Order Now.',
        ogImage: '/images/og/og_landingpage.png',
        override: true
    };

    return (
        <>
            <Head {...landingPageSEO} />
            <Grid container direction="column" sx={{ minHeight: '100vh' }} alignItems="center" justifyContent="center">
                <Grid item>
                    <Image
                        alt="logo"
                        src="/icon/foodtura-2.png"
                        width="0"
                        height="0"
                        sizes="100%"
                        style={{ width: 'auto', height: '100%', maxHeight: '300px' }}
                    />
                </Grid>
                <Grid item>
                    <Link href="/restaurant">Restaurant Page</Link>
                </Grid>
                <Grid item>
                    <Link href="/dashboard">Dashboard Page</Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
