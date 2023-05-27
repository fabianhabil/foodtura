/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '@/api/axios-instance';
import ToastError from '@/components/atoms/Toast/ToastError';
import ToastSuccess from '@/components/atoms/Toast/ToastSuccess';
import PathRouteList from '@/helper/pathRouteList';
import type { StoreInfoType, StoreContextType, FoodCartType, FoodType } from '@/types/store';
import { useRouter } from 'next/router';
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
    const [loading, setLoading] = useState<boolean>(true);
    const pathList = PathRouteList();
    console.log(storeInfo);

    const addItemToCart = (food: FoodType, qty: number, notes: string) => {
        const foodCart: FoodCartType = { ...food, quantity: qty, notes: notes, price: qty * food.price };
        ToastSuccess(`${foodCart.name} added to cart!`);
        setCart((state) => [...state, foodCart]);
        setConfirmedCart((state) => [...state, foodCart]);
    };

    const removeItemFromCart = (index: number) => {
        setCart((state) => state.filter((s, i) => i !== index));
    };

    const router = useRouter();

    const getMerchant = async () => {
        try {
            if (pathList.length !== 2) setLoading(() => false);
            if (pathList[1] && pathList[1] !== '[restaurantId]') {
                const response = await api.get(`/merchant/get/url/${pathList[1]}`);
                if (response) {
                    setStoreInfo(() => response.data.data.merchant);
                    setLoading(() => false);
                }
            }
        } catch (e) {
            console.log(e);
            ToastError('Restaurant not found!');
            router.push('/restaurant');
        }
    };

    useEffect(() => {
        getMerchant();
    }, [router]);

    const value = { storeInfo, cart, confirmedCart, addItemToCart, openCart, setOpenCart, removeItemFromCart };
    return <StoreContext.Provider value={value}>{loading ? null : <>{children}</>}</StoreContext.Provider>;
};

export { StoreContext, StoreContextProvider };
