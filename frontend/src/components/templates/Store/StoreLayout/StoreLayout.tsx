import Footer from '@/components/molecules/Store/Footer/Footer';
import Navbar from '@/components/molecules/Store/Navbar/Navbar';
import type { ComponentWithChildren } from '@/types/component';
import { Box, Container } from '@mui/material';
import { StoreContextProvider } from '@/contexts/StoreContext/StoreContext';
import { useState } from 'react';
import Sidebar from '@/components/molecules/Store/Sidebar/Sidebar';

const StoreLayout: React.FC<ComponentWithChildren> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <StoreContextProvider>
            <Box component='div' sx={{ backgroundColor: '#FAF7F7' }}>
                <Box
                    component='div'
                    sx={{
                        backgroundColor: 'white',
                        maxWidth: '600px',
                        minHeight: '100vh',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}
                >
                    <Navbar setOpenSidebar={setOpen} />
                    <Container maxWidth='xl' sx={{ py: 2, minHeight: '55.2vh' }}>
                        {children}
                    </Container>
                    <Footer />
                    <Sidebar open={open} setOpen={setOpen} />
                </Box>
            </Box>
        </StoreContextProvider>
    );
};

export default StoreLayout;
