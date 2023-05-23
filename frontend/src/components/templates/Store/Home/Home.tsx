import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useContext } from 'react';

const StoreHome = () => {
    const { color } = useContext(StoreContext)!;

    return (
        <>
            <Grid container direction='column'>
                <Grid
                    item
                    container
                    direction='column-reverse'
                    alignItems='center'
                    sx={{
                        backgroundImage: 'url("/cover.png")',
                        width: '100%',
                        height: '250px',
                        backgroundSize: 'cover',
                        zIndex: 0,
                        position: 'relative'
                    }}
                >
                    <Grid
                        item
                        sx={{
                            backgroundColor: color.primary,
                            top: 130,
                            position: 'absolute',
                            py: 2,
                            px: 3,
                            borderRadius: '20px',
                            width: { md: '65%', xs: '80%' }
                        }}
                    >
                        <Grid container direction='column' spacing={2} alignItems='center'>
                            <Grid item>
                                <Typography
                                    sx={{
                                        color: color.secondary,
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        textAlign: 'center'
                                    }}
                                >
                                    RESERVE A TABLE
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        color: color.secondary,
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    To help us find the best table for you, please select the preferred party size and
                                    time of your reservation.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        backgroundColor: color.third,
                                        color: 'white',
                                        px: 4,
                                        '&:hover': {
                                            backgroundColor: color.third,
                                            opacity: 0.8
                                        },
                                        fontSize: '14px'
                                    }}
                                >
                                    Find a Table
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ mt: 15 }}>
                    <Grid container direction='column' alignItems='center' spacing={1}>
                        <Grid item>
                            <Typography sx={{ color: color.secondary, fontWeight: 'bold', fontSize: '20px' }}>
                                ABOUT US
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Image
                                src='/about.png'
                                alt='about'
                                width='0'
                                height='0'
                                sizes='100%'
                                style={{ width: '400px', height: '100%' }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ color: color.secondary, textAlign: 'center' }}>
                                Experience the delectable flavors of Italy in every bite at Casetta
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default StoreHome;
