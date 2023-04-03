import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useContext } from 'react';

const style = {
    title: { fontWeight: 'bold', fontSize: '16px', color: 'white' },
    content: { fontWeight: 'medium', fontSize: '14px', color: 'white' }
};

const Footer = () => {
    const { color } = useContext(StoreContext)!;

    return (
        <>
            <Box
                component='div'
                sx={{ minHeight: '250px', backgroundColor: color.secondary }}
            >
                <Grid
                    container
                    direction='column'
                    sx={{ minHeight: '250px', p: 3 }}
                    justifyContent='space-between'
                    spacing={4}
                >
                    <Grid item container direction='column' spacing={1}>
                        <Grid item>
                            <Typography sx={style.title}>ADDRESS</Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={style.content}>
                                JL. Palmerah No. 103
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' spacing={1}>
                        <Grid item>
                            <Typography sx={style.title}>CONTACT US</Typography>
                        </Grid>
                        <Grid item container direction='column'>
                            <Grid item>
                                <Typography
                                    sx={style.content}
                                >
                                    Monday - Sunday (10.00 - 21.00)
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={style.content}
                                >
                                    0812 3456 7890 (WA)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' spacing={1}>
                        <Grid item>
                            <Divider sx={{ backgroundColor: 'white' }} />
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: 'white'
                                }}
                            >
                                Copyright 2023 © by FOODTURA
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;
