import { Button, FormControlLabel, FormHelperText, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { DashboardContext } from '@/contexts/DashboardContext/DashboardContext';
import { TableDataType } from '@/types/dashboard';
import { AxiosError } from 'axios';
import ToastError from '@/components/atoms/Toast/ToastError';
import ToastSuccess from '@/components/atoms/Toast/ToastSuccess';
import api from '@/api/axios-instance';
import { useContext, useState } from 'react';

type ErrorDataInputTable = {
    status: boolean;
    message: string;
};

const InputTableCard = ({ tableIndex }: { tableIndex: number }) => {
    const { userData } = useContext(DashboardContext)!;
    const [onError, setOnError] = useState<ErrorDataInputTable>({ status: false, message: '' });
    const [tableInput, setTableInput] = useState<TableDataType>({
        name: userData?.name as string,
        size: 0,
        merchantId: userData?.merchant?.merchantId as string,
        tableId: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTableInput({ ...tableInput, size: parseInt(e.target.value) });
    };

    const postTable = async () => {
        try {
            const { data: response, status } = await api.post('/merchant/table/create', tableInput);

            if (status === 200) {
                ToastSuccess('New table successfuly created!');
            }
            console.log(response, status);
        } catch (error) {
            if (error instanceof AxiosError) {
                setOnError({ status: true, message: error?.message });
                ToastError("Can't add new Table, please try again later!");
            }
        }
    };

    return (
        <>
            <Grid
                sx={{
                    borderRadius: 2,
                    backgroundColor: 'white',
                    paddingY: 4
                }}
                flexDirection="column"
                justifyItems="center"
                display="flex"
            >
                <Grid item>
                    <Typography
                        sx={{
                            paddingLeft: 4,
                            fontWeight: 'semibold',
                            fontSize: '20px'
                        }}
                    >
                        {`Table ${tableIndex}`}
                    </Typography>
                </Grid>

                {/* INPUT PARTY */}
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        justifyItems: 'space-around',
                        alignItems: 'center',
                        gap: '12px',
                        width: '100%',
                        marginLeft: 4,
                        marginBottom: 2
                    }}
                >
                    <label>Party Size: </label>
                    <TextField
                        variant="outlined"
                        InputLabelProps={{
                            style: {
                                paddingLeft: 4,
                                color: '#0D4066',
                                borderColor: 'white'
                            }
                        }}
                        onChange={handleChange}
                        sx={{
                            input: {
                                width: '160px',
                                position: 'relative',
                                color: '#0D4066',
                                maxHeight: '8px'
                            }
                        }}
                        aria-describedby="name"
                    />
                    <FormHelperText id="name" sx={{ color: 'red', ml: 1.5 }}></FormHelperText>
                    <Button variant="contained" onClick={postTable}>
                        SET
                    </Button>
                </Grid>
                <Snackbar open={onError.status} autoHideDuration={6000} onClose={() => {}} message={onError.message} />
            </Grid>
        </>
    );
};

export default InputTableCard;
