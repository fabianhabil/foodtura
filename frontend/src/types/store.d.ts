import type { Dispatch, SetStateAction } from 'react';
import { type FoodType as FoodTypeStore } from '@/types/dashboard';

export interface StoreContextType {
    storeInfo: StoreInfoType;
    cart: FoodCartType[];
    confirmedCart: FoodCartType[];
    addItemToCart: (food: FoodTypeStore, qty: number, notes: string) => void;
    openCart: boolean;
    setOpenCart: Dispatch<SetStateAction<boolean>>;
    removeItemFromCart: (index: number) => void;
}

export interface StoreInfoType {
    merchantId: string;
    name: string;
    address: string;
    merchantUrl: string;
    config: StoreConfigType;
}

export interface StoreConfigType {
    merchantConfigId: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    logoPhotoPath: string;
    homePhotoPath: string;
    aboutPhotoPath: string;
    aboutDescription: string;
}
export interface ColorContextType {
    primary: string;
    // Secondary -> Text
    secondary: string;
    // Third -> Button ?
    third: string;
}

export interface FoodType {
    foodId?: number;
    name: string;
    description: string;
    price: number;
    isSpicy: boolean;
    isMerchantFavorite: boolean;
    foodPhotoPath: string;
    foodCategoryId?: number;
    foodCategory?: FoodCategoryType;
}

export interface FoodCartType extends FoodType {
    quantity: number;
    notes: string;
    price: number;
}
