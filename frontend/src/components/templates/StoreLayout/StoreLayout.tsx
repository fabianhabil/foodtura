import Navbar from '@/components/molecules/Navbar/Navbar';
import type { ComponentWithChildren } from '@/types/component';
import { Box, Container } from '@mui/material';

const StoreLayout: React.FC<ComponentWithChildren> = ({ children }) => {
    return (
        <>
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
                    <Navbar />
                    <Container maxWidth='xl' sx={{ pt: 2 }}>
                        {children}
                    </Container>
                    <Box
                        component='div'
                        sx={{
                            position: 'fixed',
                            bottom: 0,
                            maxWidth: '600px',
                            width: '100%',
                            backgroundColor: 'red'
                        }}
                    >
                        asd
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default StoreLayout;
