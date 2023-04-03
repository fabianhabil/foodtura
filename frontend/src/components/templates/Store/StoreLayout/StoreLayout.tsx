import ScrollTop from '@/components/atoms/ScrollToTop/ScrollToTop';
import Footer from '@/components/molecules/Footer/Footer';
import Navbar from '@/components/molecules/Navbar/Navbar';
import type { ComponentWithChildren } from '@/types/component';
import { Box, Container, Fab } from '@mui/material';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { StoreContextProvider } from '@/contexts/StoreContext/StoreContext';
import { useState } from 'react';
import Sidebar from '@/components/molecules/Sidebar/Sidebar';

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
                    <Container maxWidth='xl' sx={{ py: 2 }}>
                        {children}
                    </Container>
                    <Footer />
                    <ScrollTop>
                        <Fab size='small' sx={{ m: 0, p: 0 }}>
                            <MdKeyboardArrowUp />
                        </Fab>
                    </ScrollTop>
                    <Sidebar open={open} setOpen={setOpen} />
                </Box>
            </Box>
        </StoreContextProvider>
    );
};

export default StoreLayout;
