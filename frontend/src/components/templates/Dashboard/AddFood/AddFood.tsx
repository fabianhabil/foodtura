import Uploader from '@/components/atoms/Dashboard/Uploader/Uploader';
import { SortMenu } from '@/components/constants/Menu/MenuMock';
import type { FoodType } from '@/types/dashboard';
import {
    Button,
    FormControlLabel,
    Grid,
    InputAdornment,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const AddFood = () => {
    const [foodData, setFoodData] = useState<FoodType>({
        name: '',
        description: '',
        isSpicy: false,
        isMerchantFavorite: false,
        foodPhotoPath: '',
        foodCategoryId: -1
    });
    const [blobFood, setBlobFood] = useState<any>(null);

    return (
        <>
            <Grid container direction='column' sx={{ minHeight: '80vh' }} justifyContent='space-between' spacing={1}>
                <Grid item>
                    <div style={{ backgroundColor: 'white', borderRadius: '24px' }}>
                        <Grid
                            container
                            direction='column'
                            sx={{ minHeight: '100px', p: 2 }}
                            justifyContent='space-between'
                        >
                            <Grid item sx={{ pb: 2 }}>
                                <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                    Name
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    label='Food Name'
                                    placeholder='Enter food name'
                                    onChange={(e) => setFoodData((state) => ({ ...state, name: e.target.value }))}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <div style={{ backgroundColor: 'white', borderRadius: '24px' }}>
                        <Grid
                            container
                            direction='column'
                            sx={{ minHeight: '100px', p: 2 }}
                            justifyContent='space-between'
                        >
                            <Grid item sx={{ pb: 2 }}>
                                <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                    Description
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    multiline
                                    fullWidth
                                    label='Description'
                                    placeholder='Enter description'
                                    rows={3}
                                    onChange={(e) =>
                                        setFoodData((state) => ({ ...state, description: e.target.value }))
                                    }
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <div style={{ backgroundColor: 'white', borderRadius: '24px' }}>
                                    <Grid
                                        container
                                        direction='column'
                                        sx={{ minHeight: '50px', p: 2 }}
                                        justifyContent='space-between'
                                    >
                                        <Grid item sx={{ pb: 2 }}>
                                            <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                                Food Category
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Select
                                                value={foodData.foodCategoryId}
                                                label='Sort By'
                                                fullWidth
                                                variant='standard'
                                                // onChange={(e: SelectChangeEvent) => setSelectedSort(() => e.target.value)}
                                            >
                                                <MenuItem value={-1}>Select Food Category</MenuItem>
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
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ backgroundColor: 'white', borderRadius: '24px' }}>
                                    <Grid
                                        container
                                        direction='column'
                                        sx={{ minHeight: '50px', p: 2 }}
                                        justifyContent='space-between'
                                    >
                                        <Grid item sx={{ pb: 2 }}>
                                            <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                                Price
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                fullWidth
                                                label='Price'
                                                placeholder='Enter price'
                                                type='number'
                                                onChange={(e) =>
                                                    setFoodData((state) => ({
                                                        ...state,
                                                        price: Number.isNaN(parseInt(e.target.value))
                                                            ? 0
                                                            : parseInt(e.target.value)
                                                    }))
                                                }
                                                InputProps={{
                                                    startAdornment: <InputAdornment position='start'>Rp</InputAdornment>
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{ backgroundColor: 'white', borderRadius: '24px' }}>
                                    <Grid
                                        container
                                        direction='column'
                                        sx={{ minHeight: '50px', p: 2 }}
                                        justifyContent='space-between'
                                    >
                                        <Grid item sx={{ pb: 2 }}>
                                            <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                                et cetera
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction='column'>
                                                <Grid item>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={foodData.isSpicy}
                                                                onChange={(e) =>
                                                                    setFoodData((state) => ({
                                                                        ...state,
                                                                        isSpicy: e.target.checked
                                                                    }))
                                                                }
                                                            />
                                                        }
                                                        label='Is Spicy Food?'
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={foodData.isMerchantFavorite}
                                                                onChange={(e) =>
                                                                    setFoodData((state) => ({
                                                                        ...state,
                                                                        isMerchantFavorite: e.target.checked
                                                                    }))
                                                                }
                                                            />
                                                        }
                                                        label='Is Favorite Food?'
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div style={{ backgroundColor: 'white', borderRadius: '24px', height: '100%' }}>
                            <Grid container sx={{ height: '100%', p: 2 }} direction='column'>
                                <Grid item sx={{ pb: 2 }}>
                                    <Typography sx={{ color: '#0E2979', fontSize: '24px', fontWeight: 600 }}>
                                        Food Picture
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            {foodData.foodPhotoPath === '' && blobFood === null ? (
                                                <Uploader
                                                    title='Drag your food photo here'
                                                    functionUpload={(base64: any, blob: any) => {
                                                        setBlobFood(() => blob);
                                                        console.log('test');
                                                    }}
                                                    id='foodUploader'
                                                    height='350px'
                                                />
                                            ) : (
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    justifyContent='center'
                                                    direction='column'
                                                >
                                                    <Grid item>
                                                        <Image
                                                            src={
                                                                foodData.foodPhotoPath === ''
                                                                    ? URL.createObjectURL(blobFood)
                                                                    : `${process.env.NEXT_PUBLIC_API_URL}/${foodData.foodPhotoPath}`
                                                            }
                                                            alt='logo'
                                                            sizes='100%'
                                                            width={0}
                                                            height={0}
                                                            style={{
                                                                maxHeight: '330px',
                                                                height: '100%',
                                                                width: '100%'
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            onClick={() => setBlobFood(() => null)}
                                                            sx={{ height: '20px', m: 0, p: 0 }}
                                                        >
                                                            Remove Image
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default AddFood;
