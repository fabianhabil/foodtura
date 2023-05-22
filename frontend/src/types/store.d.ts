export interface StoreContextType {
    color: ColorContextType;
}

export interface ColorContextType {
    primary: string;
    // Secondary -> Text
    secondary: string;
    // Third -> Button ?
    third: string;
}

export interface MenuType {
    name: string;
    description: string;
    price: number;
}
