import FoodCategoryButton from '@/components/atoms/Store/FoodCategoryButton/FoodCategoryButton';
import FoodMenu from '@/components/atoms/Store/FoodMenu/FoodMenu';
import { menu, menuCategory, SortMenu } from '@/components/constants/Menu/MenuMock';
import CartModal from '@/components/molecules/Store/CartModal/CartModal';
import MenuModal from '@/components/molecules/Store/MenuModal/MenuModal';
import { StoreContext } from '@/contexts/StoreContext/StoreContext';
import { returnMenu } from '@/helper/filterMenu';
import type { FoodType } from '@/types/store';
import { Grid, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [selectedMenu, setSelectedMenu] = useState<FoodType>({
        name: '',
        description: '',
        price: 0,
        isSpicy: false
    });
    const [openModalMenu, setOpenModalMenu] = useState<boolean>(false);
    const [selectedSort, setSelectedSort] = useState<string>('0');
    const [search, setSearch] = useState<string>('');

    const {
        storeInfo: { config }
    } = useContext(StoreContext)!;

    const resetQuery = () => {
        setSelectedSort(() => '0');
        setSearch(() => '');
    };

    return (
        <>
            <MenuModal
                open={openModalMenu}
                handleClose={() => setOpenModalMenu((state) => !state)}
                menu={selectedMenu}
            />
            <CartModal />
            <Grid container direction='column' spacing={2}>
                <Grid item container direction='row'>
                    {menuCategory.map((data, index) => {
                        return (
                            <Grid item xs key={index} sx={{ width: '100%' }}>
                                <FoodCategoryButton
                                    selectedCategory={selectedCategory}
                                    color={{
                                        primary: config.primaryColor,
                                        secondary: config.secondaryColor,
                                        third: config.thirdColor
                                    }}
                                    index={index}
                                    setSelectedCategory={setSelectedCategory}
                                    title={data}
                                    resetQuery={resetQuery}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item container direction='row' justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            sx={{
                                border: `solid 1.5px ${config.thirdColor}`,
                                borderRadius: '4px',
                                input: { fontSize: '16px', height: '0.1px' },
                                backgroundColor: 'white',
                                '& :-webkit-autofill': {
                                    transitionDelay: '999999999999999s'
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderRadius: '4px'
                                    },
                                    '&:hover fieldset': {
                                        borderRadius: '4px'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderRadius: '4px'
                                    }
                                },
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent'
                                },
                                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent'
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent'
                                },
                                '& .MuiFormLabel-root': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    verticalAlign: 'middle',
                                    justifyContent: 'center',
                                    fontSize: '18px'
                                }
                            }}
                            placeholder='Search Food'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AiOutlineSearch />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Select
                            value={selectedSort}
                            label='Sort By'
                            variant='standard'
                            onChange={(e: SelectChangeEvent) => setSelectedSort(() => e.target.value)}
                        >
                            <MenuItem value={0}>Sort By</MenuItem>
                            {SortMenu.map((data, index) => {
                                return (
                                    <MenuItem value={index + 1} key={index}>
                                        {data}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Grid>
                </Grid>
                {returnMenu(menu[selectedCategory], selectedSort).length === 0 ? null : (
                    <>
                        <Grid item container direction='column' spacing={3}>
                            {returnMenu(menu[selectedCategory], selectedSort)
                                .filter(
                                    (data) =>
                                        search === '' ||
                                        data.name.toString().toLowerCase().includes(search.toLowerCase())
                                )
                                .map((data) => {
                                    return (
                                        <Grid item key={data.name} container>
                                            <FoodMenu
                                                color={{
                                                    primary: config.primaryColor,
                                                    secondary: config.secondaryColor,
                                                    third: config.thirdColor
                                                }}
                                                data={data}
                                                setOpenModal={setOpenModalMenu}
                                                setSelectedMenu={setSelectedMenu}
                                            />
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </>
                )}
            </Grid>
        </>
    );
};

export default Menu;
