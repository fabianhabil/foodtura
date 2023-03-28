import {
    AppBar,
    Container,
    Slide,
    Toolbar,
    useScrollTrigger
} from '@mui/material';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props: any) => {
    return (
        <>
            <HideOnScroll {...props}>
                <AppBar
                    position='sticky'
                    sx={{ backgroundColor: 'gray', py: 0.5, color: 'black' }}
                    elevation={0}
                >
                    <Toolbar disableGutters>
                        <Container maxWidth='xl'>hi</Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
};

export default Navbar;
