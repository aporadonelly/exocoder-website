import { styled, lighten, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
/* import PetsIcon from '@mui/icons-material/Pets'; */
import useMediaQuery from '@mui/material/useMediaQuery';

interface PawPrintCardsProp {
    index: number;
    children: React.ReactNode
}

/* const StyledPetsIcon = styled(PetsIcon)({
    color: "#EC8750",
    transform: 'rotate(75deg)',
}); */

const StyledCard = styled(Card)(({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
}));

const StyledCardContent = styled(CardContent)(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
}));

const Wrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
})

function PawPrintCard(props: PawPrintCardsProp) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const { index, children } = props;

    const result = (index % 2 === 0) ? "even" : "odd"

    const spacer = <Box height={(theme) => theme.spacing(6)} />

    return (
        <Wrapper sx={{ flexDirection: matches ? 'row' : 'column' }}>
            {result === 'even' && spacer}
            <Stack alignItems='center' height='100%' spacing={4}  >
                {/* <StyledPetsIcon fontSize='large' /> */}
                <StyledCard sx={{ borderRadius: 10, backgroundColor: lighten("#EC8750", 0.925) }} >
                    <StyledCardContent>
                        {children}
                    </StyledCardContent>
                </StyledCard>
            </Stack>
            {result === 'odd' && spacer}
        </Wrapper >
    );
}


export default PawPrintCard;