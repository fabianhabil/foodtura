import Navbar from '@/components/molecules/Navbar/Navbar';
import type { ComponentWithChildren } from '@/types/component';
import { Box } from '@mui/material';

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
                    <div>
                        <Navbar />
                    </div>
                    <div>{children}</div>
                </Box>
            </Box>
        </>
    );
};

export default StoreLayout;
