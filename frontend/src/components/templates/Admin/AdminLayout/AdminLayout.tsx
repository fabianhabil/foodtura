import React from 'react';
import type { ComponentWithChildren } from '@/types/component';

const AdminLayout: React.FC<ComponentWithChildren> = ({ children }) => {
    return (
        <>
            AdminLayout 1
            <br />
            {children}
        </>
    );
};

export default AdminLayout;
