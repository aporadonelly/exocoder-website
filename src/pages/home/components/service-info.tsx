import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface ServiceCardProps {
    icon?: React.ReactElement;
    title?: string;
    description?: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    padding: theme.spacing(9),
}))

function ServiceCard(props: ServiceCardProps) {
    const { icon, title, description } = props;

    return (
        <StyledPaper >
            <Stack alignItems="center" spacing={2}>
                {icon}
                <Typography fontWeight="bold" textAlign="center">{title}</Typography>
                <Typography textAlign="center">{description}</Typography>
            </Stack>
        </StyledPaper>
    )
}

export default ServiceCard;