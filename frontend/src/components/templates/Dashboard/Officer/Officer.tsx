import { Grid, Box, Typography, useRadioGroup } from '@mui/material';
import { UserIcon } from '@/components/atoms/Global/icons';
import { useRouter } from 'next/router';

import type { IOfficerFeaturedList } from '@/types/dashboard';

interface IOfficerProps {}

function OfficerFeatureList({ props }: { props: IOfficerFeaturedList[] }) {
    const router = useRouter();
    const parrentPath = 'officer';

    function handleOnClick(path: string) {
        router.push({ pathname: parrentPath + path });
    }

    return (
        <>
            {props.map(({ name, redirectPath, icon }) => (
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    onClick={() => handleOnClick(redirectPath)}
                    key={name}
                    sx={boxStyle}
                >
                    <div>{icon}</div>
                    <Typography>{name}</Typography>
                </Box>
            ))}
        </>
    );
}

const Officer: React.FC<IOfficerProps> = () => {
    return (
        <>
            <Grid
                container
                sx={{ minHeight: '80vh', margin: '0 auto' }}
                justifyContent="center"
                alignContent="center"
                rowGap={4}
                columnGap={4}
            >
                <OfficerFeatureList props={officerFeaturedList} />
            </Grid>
        </>
    );
};

export default Officer;

const boxStyle = {
    maxHeight: '346px',
    minHeight: '160px',
    minWidth: '200px',
    textAlign: 'center',
    background: 'white',
    borderRadius: '25px',
    columnGap: '0px',
    cursor: 'pointer'
};

const officerFeaturedList = [
    {
        name: 'Employees',
        redirectPath: '/employee',
        icon: <UserIcon props={{ style: { width: 80, height: 80 } }} />
    },
    {
        name: 'Table',
        redirectPath: '/table',
        icon: <UserIcon props={{ style: { width: 80, height: 80 } }} />
    },
    {
        name: 'Cashier',
        redirectPath: '/cashier',
        icon: <UserIcon props={{ style: { width: 80, height: 80 } }} />
    }
];
