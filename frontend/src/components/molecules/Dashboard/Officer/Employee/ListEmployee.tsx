import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListEmployee: React.FC = () => {
    return (
        <>
            <Grid item>
                {/*LIST Employees*/}
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role type</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Created at</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row, index) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.created_at}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
};

export default ListEmployee;

const users = [
    {
        userId: 1,
        name: 'Aaaaaaa Bbbbb',
        email: 'a@.gmail.com',
        role: 1001,
        status: 'active',
        created_at: new Date().toDateString()
    },
    {
        userId: 2,
        name: 'Aaaaaaa Bbbbb',
        email: 'b@.gmail.com',
        role: 1001,
        status: 'active',
        created_at: new Date().toDateString()
    },
    {
        name: 'Aaaaaaa Bbbbb',
        email: 'c@.gmail.com',
        role: 1001,
        status: 'active',
        created_at: new Date().toDateString()
    },
    {
        name: 'Aaaaaaa Bbbbb',
        email: 'd@.gmail.com',
        role: 1001,
        status: 'active',
        created_at: new Date().toDateString()
    }
];
