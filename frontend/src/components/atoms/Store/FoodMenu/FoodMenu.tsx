import type { ColorContextType, MenuType } from '@/types/store';
import { Box, Grid, Typography } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import { GiChiliPepper } from 'react-icons/gi';

const FoodMenu = ({
    data,
    setSelectedMenu,
    setOpenModal,
    color
}: {
    data: MenuType;
    setSelectedMenu: Dispatch<SetStateAction<MenuType>>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    color: ColorContextType;
}) => {
    return (
        <>
            <Box
                component='div'
                onClick={() => {
                    setSelectedMenu(() => data);
                    setOpenModal(() => true);
                }}
                sx={{ display: 'flex', width: '100%' }}
            >
                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        backgroundColor: 'rgba(246,220,146,0.3)',
                        p: 2,
                        '&:hover': {
                            cursor: 'pointer'
                        },
                        border: '2px solid #CC7930',
                        boxShadow: '2px 2px 2px #9E5719',
                        borderRadius: '5px'
                    }}
                >
                    <Grid item>
                        <div
                            style={{
                                height: '80px',
                                width: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'gray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            img
                        </div>
                    </Grid>
                    <Grid item xs={7} sm={9}>
                        <Grid
                            container
                            direction='column'
                            sx={{ width: '100%' }}
                        >
                            <Grid item>
                                <Grid
                                    container
                                    direction='row'
                                    spacing={1}
                                    alignItems='center'
                                >
                                    <Grid item>
                                        <Typography
                                            sx={{
                                                color: color.third,
                                                fontWeight: 600
                                            }}
                                        >
                                            {data.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        {data.isSpicy ? (
                                            <GiChiliPepper />
                                        ) : null}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        color: color.third,
                                        fontWeight: 300,
                                        fontSize: '13px',
                                        width: '100%'
                                    }}
                                >
                                    {data.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography
                            sx={{
                                color: color.third,
                                fontWeight: 'bold'
                            }}
                        >
                            {data.price / 1000}K
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default FoodMenu;
