import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { Grid, Typography } from '@mui/material';
import Head from '@/components/atoms/Head';
import { useContext } from 'react';

import type { HeadProps } from '@/types/head';

const Home = () => {
    const {
        storeInfo: { config }
    } = useContext(StoreContext)!;

    const restaurantPageSEO: HeadProps = {
        title: 'restaurant - Find Your restaurant',
        description:
            'Order food at your favorite restaurant on Foodtura, after scanning the QR Code on the table, relax and enjoy as the food reaches your hands.',
        ogImage: '/images/og/og_restaurantpage.png',
        override: true
    };

    return (
        <>
            <Head {...restaurantPageSEO} />
            <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: '50vh' }}>
                <Grid item>
                    <Typography
                        sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: config.secondaryColor }}
                    >
                        Welcome to Foodtura Platform, please scan QR Code on the table
                    </Typography>
                </Grid>
            </Grid>
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
