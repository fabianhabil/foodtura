import React, { useContext, useEffect } from 'react';
import type { ComponentWithChildren } from '@/types/component';
import { Grid } from '@mui/material';
import Sidebar from '@/components/molecules/Dashboard/Sidebar/Sidebar';
import Navbar from '@/components/molecules/Dashboard/Navbar/Navbar';
import { DashboardContext } from '@/contexts/DashboardContext/DashboardContext';
import Image from 'next/image';
import LoadingIcon from '@/components/atoms/LoadingIcon/LoadingIcon';

const DashboardLayout: React.FC<ComponentWithChildren> = ({ children }) => {
    const { loading } = useContext(DashboardContext)!;

    return (
        <>
            <Grid
                container
                sx={{
                    minHeight: '90vh',
                    transition: '1s',
                    zIndex: 1,
                    position: 'fixed',
                    transform: loading ? 'translateY(0)' : 'translateY(-100vh)',
                    '&::after': {
                        display: 'none'
                    }
                }}
                alignItems='center'
                justifyContent='center'
                direction='column'
            >
                <Grid item>
                    <Image
                        src='/icon/foodtura-2.png'
                        width={0}
                        height={0}
                        sizes='100%'
                        alt='icon'
                        style={{
                            height: '500px',
                            width: 'auto'
                        }}
                    />
                </Grid>
                <Grid item sx={{ height: '100px' }}>
                    <LoadingIcon />
                </Grid>
            </Grid>
            {loading ? null : (
                <Grid container direction='row' sx={{ backgroundColor: '#E1DEE5' }}>
                    <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs>
                        <Grid container direction='column' sx={{ minHeight: '100vh', pb: 2 }}>
                            <Grid item>
                                <Navbar />
                            </Grid>
                            <Grid item sx={{ p: 2, px: 4 }}>
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default DashboardLayout;
