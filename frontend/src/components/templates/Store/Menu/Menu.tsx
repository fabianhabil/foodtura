import FoodCategoryButton from '@/components/atoms/Store/FoodCategoryButton/FoodCategoryButton';
import FoodMenu from '@/components/atoms/Store/FoodMenu/FoodMenu';
import { menu, menuCategory } from '@/components/constants/Menu/MenuMock';
import MenuModal from '@/components/molecules/Store/MenuModal/MenuModal';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import type { MenuType } from '@/types/store';
import { Grid } from '@mui/material';
import { useContext, useState } from 'react';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [selectedMenu, setSelectedMenu] = useState<MenuType>({
        name: '',
        description: '',
        price: 0,
        isSpicy: false
    });
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { color } = useContext(StoreContext)!;

    return (
        <>
            <MenuModal open={openModal} handleClose={() => setOpenModal((state) => !state)} menu={selectedMenu} />
            <Grid container direction='column' spacing={2}>
                <Grid item container direction='row'>
                    {menuCategory.map((data, index) => {
                        return (
                            <Grid item xs key={index} sx={{ width: '100%' }}>
                                <FoodCategoryButton
                                    selectedCategory={selectedCategory}
                                    color={color}
                                    index={index}
                                    setSelectedCategory={setSelectedCategory}
                                    title={data}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item container direction='row' justifyContent='space-between'>
                    <Grid item>Search Bar</Grid>
                    <Grid item>Sort By</Grid>
                </Grid>
                <Grid item container direction='column' spacing={3}>
                    {menu[selectedCategory].map((data) => {
                        return (
                            <Grid item key={data.name} container>
                                <FoodMenu
                                    color={color}
                                    data={data}
                                    setOpenModal={setOpenModal}
                                    setSelectedMenu={setSelectedMenu}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export default Menu;
