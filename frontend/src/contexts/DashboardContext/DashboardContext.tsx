import { createContext } from 'react';

interface DashboardContextProps {
    children: React.ReactNode;
}

const DashboardContext = createContext<any>(null);

const DashboardContextProvider: React.FC<DashboardContextProps> = ({ children }) => {
    return <DashboardContext.Provider value={{ name: 'fabian' }}>{children}</DashboardContext.Provider>;
};

export { DashboardContext, DashboardContextProvider };
