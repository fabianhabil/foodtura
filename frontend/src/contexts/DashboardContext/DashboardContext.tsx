import api from '@/api/axios-instance';
import ToastSuccess from '@/components/atoms/Toast/ToastSuccess';
import type { DashboardContextType, UserDataType } from '@/types/dashboard';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';

interface DashboardContextProps {
    children: React.ReactNode;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

const DashboardContextProvider: React.FC<DashboardContextProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const router = useRouter();

    const getUserData = () => {
        const data = JSON.parse(localStorage.getItem('user-data') as string);
        if (data) {
            setUserData(() => data);
            setIsAuthenticated(() => true);
            setLoading(() => false);
        } else {
            setIsAuthenticated(() => false);
            setLoading(() => false);
        }
    };

    const isLoggedIn = () => {
        const data = JSON.parse(localStorage.getItem('user-data') as string);
        if (data) {
            return true;
        }
        return false;
    };

    const logout = async () => {
        localStorage.removeItem('user-data');
        try {
            const response = await api.delete('/auth/logout');
            if (response) {
                ToastSuccess('Logout Success!');
                setTimeout(() => {
                    router.reload();
                }, 500);
            }
        } catch (e) {
            if (isAxiosError(e)) {
                console.log(e);
            } else {
                console.log(e);
            }
        }
    };

    const value = { isAuthenticated, loading, userData, getUserData, isLoggedIn, logout };
    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export { DashboardContext, DashboardContextProvider };
