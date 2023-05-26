import type { DashboardContextType } from '@/types/dashboard';
import { createContext, useEffect, useState } from 'react';

interface DashboardContextProps {
    children: React.ReactNode;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

const DashboardContextProvider: React.FC<DashboardContextProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const value = { isAuthenticated, loading };

    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false);
        }, 1000);
    }, []);

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export { DashboardContext, DashboardContextProvider };
