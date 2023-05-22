import {
    AppBar,
    Container,
    Grid,
    IconButton,
    Slide,
    Toolbar,
    useScrollTrigger
} from '@mui/material';
import { FiMenu } from 'react-icons/fi';
import { BsBasket2Fill } from 'react-icons/bs';
import { useContext } from 'react';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import PathRouteList from '@/helper/pathRouteList';

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
    const { setOpenSidebar } = props;
    const { color } = useContext(StoreContext)!;
    const pathRouteList = PathRouteList();
    return (
        <>
            <div id='top' />
            <HideOnScroll {...props}>
                <AppBar
                    position='sticky'
                    sx={{
                        backgroundColor: color.primary,
                        py: 0.5,
                        pb: 0,
                        color: 'black'
                    }}
                    elevation={0}
                >
                    <Toolbar disableGutters>
                        <Container maxWidth='xl'>
                            <Grid
                                container
                                direction='row'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Grid item>
                                    <IconButton
                                        sx={{
                                            verticalAlign: 'middle',
                                            p: 0,
                                            m: 0
                                        }}
                                        onClick={() =>
                                            setOpenSidebar(
                                                (state: any) => !state
                                            )
                                        }
                                    >
                                        <FiMenu
                                            style={{ color: color.third }}
                                            size={'28px'}
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <img
                                        src='/icon/foodtura.png'
                                        alt='logo'
                                        style={{
                                            width: 'auto',
                                            height: '100%',
                                            maxHeight: '80px'
                                        }}
                                    />
                                </Grid>
                                {pathRouteList.length > 2 ? (
                                    <Grid item>
                                        <IconButton
                                            sx={{
                                                verticalAlign: 'middle',
                                                p: 0,
                                                m: 0
                                            }}
                                        >
                                            <BsBasket2Fill
                                                style={{ color: color.third }}
                                                size={'28px'}
                                            />
                                        </IconButton>
                                    </Grid>
                                ) : (
                                    <Grid item />
                                )}
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
};

export default Navbar;
