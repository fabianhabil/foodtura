import { Grid } from '@mui/material';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Grid
                container
                direction='column'
                sx={{ minHeight: '100vh' }}
                alignItems='center'
                justifyContent='center'
            >
                <Grid item>
                    <h2>Landing Page belum jadi</h2>
                </Grid>
                <Grid item>
                    <Link href='/restaurant'>Restaurant Page</Link>
                </Grid>
                <Grid item>
                    <Link href='/admin'>Admin Page</Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
