import FoodCartMenu from '@/components/atoms/Store/FoodCartMenu/FoodCartMenu';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { Box, Button, Divider, Grid, Modal, Typography } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

const CartModal = () => {
    const {
        openCart,
        setOpenCart,
        cart,
        confirmedCart,
        storeInfo: { config },
        removeItemFromCart
    } = useContext(StoreContext)!;

    const closeModal = () => setOpenCart(() => false);

    return (
        <>
            <Modal
                open={openCart}
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
                        width: 370,
                        bgcolor: 'background.paper',
                        p: 2,
                        outline: 'none'
                    }}
                >
                    <Grid
                        container
                        direction='column'
                        sx={{ maxHeight: '80vh', overflowY: 'auto', overflowX: 'hidden' }}
                        spacing={3}
                    >
                        <Grid item>
                            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                <Grid item>
                                    <Typography sx={{ fontSize: '20px' }}>Your Cart</Typography>
                                </Grid>
                                <Grid item>
                                    <BsCart
                                        style={{ color: config.thirdColor, verticalAlign: 'middle' }}
                                        size={'24px'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction='column' spacing={2}>
                                {cart.length === 0 ? (
                                    <>
                                        <Grid item sx={{ textAlign: 'center' }}>
                                            Current Cart is Empty! 😭
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        {cart.map((data, index) => {
                                            return (
                                                <Grid item key={index} container>
                                                    <FoodCartMenu
                                                        config={config}
                                                        data={data}
                                                        index={index}
                                                        render={true}
                                                        removeItemFromCart={removeItemFromCart}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                        <Grid item>
                                            <Button
                                                sx={{
                                                    width: '100%',
                                                    backgroundColor: config.primaryColor,
                                                    color: config.secondaryColor,
                                                    fontWeight: 'bold',
                                                    transition: '0.3s all',
                                                    '&:hover': {
                                                        backgroundColor: config.primaryColor,
                                                        opacity: 0.8
                                                    }
                                                }}
                                            >
                                                Confirm Order
                                            </Button>
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                        {confirmedCart.length === 0 ? null : (
                            <>
                                <Grid item>
                                    <Divider sx={{ background: 'black' }} />
                                </Grid>
                                <Grid item>
                                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                        <Grid item>
                                            <Typography sx={{ fontSize: '20px' }}>Your Confirmed Purchase</Typography>
                                        </Grid>
                                        <Grid item>
                                            <AiOutlineCheckCircle
                                                style={{ color: config.thirdColor, verticalAlign: 'middle' }}
                                                size={'24px'}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {confirmedCart.map((data, index) => {
                                    return (
                                        <Grid item key={index} container>
                                            <FoodCartMenu config={config} data={data} index={index} />
                                        </Grid>
                                    );
                                })}
                            </>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default CartModal;
