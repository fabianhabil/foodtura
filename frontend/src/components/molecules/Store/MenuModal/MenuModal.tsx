import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import {
    Box,
    Button,
    Grid,
    IconButton,
    Modal,
    Typography
} from '@mui/material';
import { IoChevronBack } from 'react-icons/io5';
import { useContext, useState } from 'react';

const MenuModal = ({
    open,
    handleClose,
    menu
}: {
    open: boolean;
    handleClose: () => void;
    menu: {
        name: string;
        description: string;
        price: number;
    };
}) => {
    const { color } = useContext(StoreContext)!;
    const [quantity, setQuantity] = useState<number>(0);

    const closeModal = () => {
        setQuantity(() => 0);
        handleClose();
    };

    return (
        <>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        outline: 'none'
                    }}
                >
                    <Grid container direction='column'>
                        <Grid
                            item
                            sx={{
                                p: 2,
                                pl: 0.5,
                                borderBottom: `2px solid ${color.third}`
                            }}
                        >
                            <Grid
                                container
                                direction='row'
                                spacing={1}
                                alignItems='center'
                            >
                                <Grid item>
                                    <IconButton
                                        sx={{ p: 0 }}
                                        onClick={handleClose}
                                    >
                                        <IoChevronBack
                                            style={{ fontSize: '36px' }}
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: color.third,
                                            fontSize: '24px'
                                        }}
                                    >
                                        Back
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ p: 2 }}>
                            <Grid container direction='column' spacing={2}>
                                <Grid item>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            backgroundColor: 'gray',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        img
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        direction='column'
                                        spacing={1}
                                    >
                                        <Grid item>
                                            <Grid
                                                container
                                                direction='row'
                                                justifyContent='space-between'
                                            >
                                                <Grid item>
                                                    <Typography
                                                        sx={{
                                                            color: color.secondary,
                                                            fontWeight: 600,
                                                            fontSize: '20px'
                                                        }}
                                                    >
                                                        {menu.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        sx={{
                                                            color: color.secondary,
                                                            fontWeight: 600,
                                                            fontSize: '20px'
                                                        }}
                                                    >
                                                        {menu.price / 1000}K
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                sx={{
                                                    fontSize: '16px',
                                                    fontWeight: 300
                                                }}
                                            >
                                                {menu.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        Rp {(menu.price * quantity) / 1000}K
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        direction='row'
                                        justifyContent='space-between'
                                        alignItems='center'
                                        spacing={2}
                                    >
                                        <Grid item>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <IconButton
                                                        sx={{
                                                            width: '25px',
                                                            height: '25px',
                                                            verticalAlign:
                                                                'middle',
                                                            backgroundColor:
                                                                color.third,
                                                            p: 0
                                                        }}
                                                        onClick={() => {
                                                            setQuantity(
                                                                (state) => {
                                                                    if (
                                                                        state <=
                                                                        1
                                                                    ) {
                                                                        return 0;
                                                                    }
                                                                    return (
                                                                        state -
                                                                        1
                                                                    );
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        -
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>{quantity}</Grid>
                                                <Grid item>
                                                    <IconButton
                                                        sx={{
                                                            width: '25px',
                                                            height: '25px',
                                                            verticalAlign:
                                                                'middle',
                                                            backgroundColor:
                                                                color.third,
                                                            p: 0
                                                        }}
                                                        onClick={() =>
                                                            setQuantity(
                                                                (state) =>
                                                                    state + 1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs>
                                            <Button
                                                sx={{
                                                    width: '100%',
                                                    backgroundColor: '#B2372E',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor:
                                                            '#B2372E'
                                                    }
                                                }}
                                            >
                                                Add To Cart
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default MenuModal;
