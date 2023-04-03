import type { StoreContextType } from '@/types/store';
import React, { createContext } from 'react';

const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
    const value = {
        color: { primary: '#F6DC92', secondary: '#865123', third: '#CC7930' }
    };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};

export { StoreContext, StoreContextProvider };
