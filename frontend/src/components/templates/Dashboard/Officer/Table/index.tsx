import AvailableTable from '@/components/molecules/Dashboard/Officer/Tables/AvailableTable';
import ListTable from '@/components/molecules/Dashboard/Officer/Tables/ListTable';
import { Button, Divider, Grid } from '@mui/material';
import api from '@/api/axios-instance';
import { useContext, useEffect, useState } from 'react';
import { DashboardContext } from '@/contexts/DashboardContext/DashboardContext';
import { TableDataType } from '@/types/dashboard';

const Table: React.FC = () => {
    const { userData } = useContext(DashboardContext)!;
    const [tableList, setTableList] = useState<TableDataType[] | []>([]);
    const [createNewTable, setCreateNewTable] = useState<boolean | null>(null);

    const handleCreateNewTable = () => {
        setCreateNewTable(!createNewTable);
        handlePushNewTable();
    };

    const handlePushNewTable = () => {
        const dummyTable = {
            name: 'create',
            size: 0,
            merchantId: '',
            tableId: ''
        };
        setTableList([...tableList, dummyTable]);
    };

    useEffect(() => {
        if (userData?.merchant?.merchantId !== '') {
            getAllMerchantTable();
        }
    }, [userData]);

    const getAllMerchantTable = async () => {
        const { data: response } = await api.get(`/merchant/table/${userData?.merchant?.merchantId}`);
        console.log(response);
        if (response) {
            setTableList(response.data.tables);
        }
    };

    return (
        <>
            <Grid container sx={{}}>
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '12px',
                        marginLeft: 6,
                        marginY: 2
                    }}
                >
                    <Button variant="contained" onClick={handleCreateNewTable}>
                        Create New Table
                    </Button>

                    {/* Soon */}
                    {/*<SearchBarTable items={tableList} />*/}
                </Grid>
            </Grid>

            <Divider sx={{ marginY: 2 }} />

            <Grid container direction="column" gap={4}>
                <Grid container justifyContent="space-around">
                    <ListTable items={tableList} />
                    <AvailableTable total={tableList.length} remaining={tableList.length} />
                </Grid>
            </Grid>
        </>
    );
};

export default Table;
