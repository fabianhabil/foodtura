import { Grid, Typography, Button, TextField } from '@mui/material';
import { DashboardContext } from '@/contexts/DashboardContext/DashboardContext';
import InputTableCard from './InputTableCard';
import { Fragment, useContext, useEffect, useState } from 'react';
import { TableDataType } from '@/types/dashboard';
import api from '@/api/axios-instance';
import { AxiosError } from 'axios';
import ToastError from '@/components/atoms/Toast/ToastError';
import ToastSuccess from '@/components/atoms/Toast/ToastSuccess';
import { useRouter } from 'next/router';

interface ListTableProps {
    items: TableDataType[];
}

const TableCard = ({ item, i }: { item: TableDataType; i: number }) => {
    const [isMouseEnter, setIsMouseEnter] = useState<boolean | null>(null);
    const [onEdit, setOnEdit] = useState<boolean | null>(null);
    const [updatedItem, setUpdatedItem] = useState<TableDataType>({ ...item });
    const router = useRouter();

    const trackChanges = () => {
        if (JSON.stringify(updatedItem) === JSON.stringify(item)) {
            return false;
        } else {
            return true;
        }
    };

    useEffect(() => {
        if (onEdit) return;

        if (!onEdit && trackChanges()) {
            updateTable();
        }
    }, [onEdit]);

    const updateTable = async () => {
        try {
            const { data: response, status } = await api.put(
                `/merchant/table/edit/${updatedItem.tableId}`,
                updatedItem
            );
            if (status === 200) {
                ToastSuccess('Table successfuly updated!');
                router.reload();
            }
            console.log({ response, status });
        } catch (error) {
            if (error instanceof AxiosError) {
                ToastError('cannot be updated the table, please check your input field');
            }
        }
    };

    const deleteTable = async () => {
        try {
            const { data: response, status } = await api.delete(`/merchant/table/delete/${updatedItem.tableId}`);
            if (status === 200) {
                ToastSuccess('Table successfuly deleted!');
                router.reload();
            }
            console.log({ response, status });
        } catch (error) {
            if (error instanceof AxiosError) {
                ToastError('cannot be deleted the table, please check your input field');
            }
        }
    };

    return (
        <>
            <Grid
                item
                display="flex"
                flexDirection={'column'}
                sx={{
                    width: '100%',
                    gap: '20px',
                    border: '2px solid',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    minHeight: '150px',
                    paddingY: 3,
                    paddingX: 10
                }}
                onMouseEnter={() => setIsMouseEnter((prev) => !prev)}
                onMouseLeave={() => setIsMouseEnter(false)}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '28px'
                    }}
                >
                    {`# Table ${i + 1}`}
                </Typography>
                <TextField
                    sx={{
                        input: {
                            fontWeight: 'semibold',
                            fontSize: '28px',
                            color: '#0D4066'
                        }
                    }}
                    defaultValue={item.name ?? ''}
                    disabled={onEdit ? false : true}
                    onChange={(e) => {
                        setUpdatedItem((prev) => {
                            return { ...prev, name: e.target.value };
                        });
                    }}
                    label={<>{' Name '}</>}
                    InputLabelProps={{
                        style: {
                            color: '#0D4066',
                            borderColor: 'white',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }
                    }}
                    aria-describedby="name"
                >
                    {item.name}
                </TextField>
                <TextField
                    sx={{
                        input: {
                            fontWeight: 'semibold',
                            fontSize: '28px',
                            color: '#0D4066'
                        }
                    }}
                    defaultValue={item.size ?? ''}
                    disabled={onEdit ? false : true}
                    onChange={(e) => {
                        setUpdatedItem((prev) => {
                            return { ...prev, size: parseInt(e.target.value) };
                        });
                    }}
                    label={<>{' Size '}</>}
                    InputLabelProps={{
                        style: {
                            color: '#0D4066',
                            borderColor: 'white',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }
                    }}
                    aria-describedby="size"
                >
                    {item.name}
                </TextField>

                <Grid display="flex" sx={{ gap: '8px' }}>
                    {isMouseEnter ? (
                        <Button
                            variant="contained"
                            sx={{ maxWidth: '10%', marginY: '8px', paddingY: '8px' }}
                            onClick={() => setOnEdit(!onEdit)}
                        >
                            {onEdit ? 'Save' : 'Edit'}
                        </Button>
                    ) : null}

                    {onEdit ? (
                        <Button
                            variant="contained"
                            sx={{ maxWidth: '10%', marginY: '8px', paddingY: '8px' }}
                            onClick={deleteTable}
                        >
                            Delete
                        </Button>
                    ) : null}
                </Grid>
            </Grid>
        </>
    );
};

const ListTable: React.FC<ListTableProps> = () => {
    const [tableList, setTableList] = useState<TableDataType[] | []>([]);
    const { userData } = useContext(DashboardContext)!;

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
            <Grid
                display="flex"
                flexDirection="column"
                height={'100vh'}
                sx={{
                    width: '60%',
                    borderRadius: 2,
                    gap: '32px'
                }}
            >
                {tableList?.map((item, i) => {
                    return (
                        <Fragment key={item.tableId}>
                            {i === tableList.length - 1 && item.name === 'create' && !item.size && !item.merchantId ? (
                                <InputTableCard tableIndex={i + 1} />
                            ) : (
                                <TableCard i={i} item={item} />
                            )}
                        </Fragment>
                    );
                })}
            </Grid>
        </>
    );
};

export default ListTable;
