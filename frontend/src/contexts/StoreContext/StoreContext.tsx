/* eslint-disable @typescript-eslint/no-unused-vars */
import ToastSuccess from '@/components/atoms/Toast/ToastSuccess';
import type { StoreInfoType, StoreContextType, FoodCartType, FoodType } from '@/types/store';
import React, { createContext, useEffect, useState } from 'react';

const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [storeInfo, setStoreInfo] = useState<StoreInfoType>({
        merchantId: '',
        name: '',
        address: '',
        merchantUrl: '',
        config: {
            merchantConfigId: '',
            primaryColor: '#F6DC92',
            secondaryColor: '#865123',
            thirdColor: '#CC7930',
            logoPhotoPath: '/icon/foodtura.png',
            homePhotoPath: '/cover.png',
            aboutPhotoPath: '/about.png',
            aboutDescription: 'Experience the delectable flavors of Italy in every bite at Casetta'
        }
    });
    const [cart, setCart] = useState<FoodCartType[]>([]);
    const [confirmedCart, setConfirmedCart] = useState<FoodCartType[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);

    const addItemToCart = (food: FoodType, qty: number, notes: string) => {
        const foodCart: FoodCartType = { ...food, quantity: qty, notes: notes, price: qty * food.price };
        ToastSuccess(`${foodCart.name} added to cart!`);
        setCart((state) => [...state, foodCart]);
        setConfirmedCart((state) => [...state, foodCart]);
    };

    const removeItemFromCart = (index: number) => {
        setCart((state) => state.filter((s, i) => i !== index));
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const value = { storeInfo, cart, confirmedCart, addItemToCart, openCart, setOpenCart, removeItemFromCart };
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreContextProvider };
