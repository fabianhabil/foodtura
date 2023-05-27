import { SortMenu } from '@/components/constants/Menu/MenuMock';
import { Button, Grid, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const FoodMenu = () => {
    const [selectedSort, setSelectedSort] = useState<string>('0');
    // const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const router = useRouter();

    return (
        <>
            <Grid container direction='column' sx={{ pr: 2 }}>
                <Grid item>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Grid container direction='row' spacing={2} alignItems='center'>
                                <Grid item>
                                    <Select
                                        value={selectedSort}
                                        label='Sort By'
                                        sx={{ width: '250px' }}
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
                                <Grid item>
                                    <Select
                                        // value={selectedSort}
                                        label='Sort By'
                                        sx={{ width: '250px' }}
                                        variant='standard'
                                        // onChange={(e: SelectChangeEvent) => setSelectedSort(() => e.target.value)}
                                    >
                                        <MenuItem value={0}>All</MenuItem>
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
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{
                                    backgroundColor: '#0e2979',
                                    color: 'white',
                                    px: 3,
                                    '&:hover': {
                                        backgroundColor: '#0e2979',
                                        opacity: 0.8
                                    }
                                }}
                                onClick={() => router.push('/dashboard/menu/food/add')}
                            >
                                Add Food
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FoodMenu;
