export interface DashboardContextType {
    isAuthenticated: boolean;
    loading: boolean;
    userData: UserDataType | null;
    getUserData: () => void;
    isLoggedIn: () => boolean;
    logout: () => void;
}

export interface UserRegisterType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserDataType {
    userId: number;
    name: string;
    email: string;
    role: number;
    merchant?: {
        merchantId: string;
        name: string;
        address: string;
        merchantUrl: string;
    };
}

export interface MerchantType {
    merchantId: string;
    name: string;
    address: string;
    merchantUrl: string;
    config: {
        merchantConfigId: number;
        primaryColor: string | null;
        secondaryColor: string | null;
        thirdColor: string | null;
        logoPhotoPath: string | null;
        homePhotoPath: string | null;
        aboutPhotoPath: string | null;
        aboutDescription: string | null;
    };
}

export interface MerchantColorType {
    primaryColor: string | null;
    secondaryColor: string | null;
    thirdColor: string | null;
}

export interface FoodType {
    name: string;
    description: string;
    isSpicy: boolean;
    isMerchantFavorite: boolean;
    foodPhotoPath: string;
    foodCategoryId: number;
}
