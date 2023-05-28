import ListEmployee from '@/components/molecules/Dashboard/Officer/Employee/ListEmployee';
import RegisterEmployee from '@/components/molecules/Dashboard/Officer/Employee/RegisterEmployee';
import { Grid, Typography, Button } from '@mui/material';
import { useState } from 'react';

interface IEmployeeProps {}

const Employee: React.FC<IEmployeeProps> = () => {
    const [isCreateUserBtn, setIsCreateUserBtn] = useState<boolean | null>(null);

    const handleCreateUserBtn = () => setIsCreateUserBtn(!isCreateUserBtn);

    return (
        <>
            <Grid container direction="column" sx={{ marginTop: 6 }}>
                {isCreateUserBtn ? (
                    <RegisterEmployee />
                ) : (
                    <>
                        <Grid
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ marginBottom: 2 }}
                        >
                            <Typography textAlign="center">Employees Lists</Typography>
                            <Button
                                variant="contained"
                                onClick={handleCreateUserBtn}
                                sx={{
                                    visibility: `${isCreateUserBtn ? 'hidden' : 'visible'}`
                                }}
                            >
                                Add New Users
                            </Button>
                        </Grid>
                        <ListEmployee />
                    </>
                )}
            </Grid>
        </>
    );
};

export default Employee;
