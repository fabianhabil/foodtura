import StoreLayout from '@/components/templates/Store/StoreLayout/StoreLayout';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';

const Home = () => {
    const { color } = useContext(StoreContext)!;

    return (
        <>
            <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ minHeight: '50vh' }}>
                <Grid item>
                    <Typography
                        sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: color.secondary }}
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
