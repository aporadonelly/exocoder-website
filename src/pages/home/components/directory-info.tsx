import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface DirectoryInfoProps {
    icon: React.ReactElement;
    title: string;
    details: React.ReactNode[]
}

const List = styled("ul")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    margin: 0,
    padding: 0,
    listStyle: "none",
}));

function DirectoryInfo(props: DirectoryInfoProps) {
    const { icon, title, details } = props;

    return (
        <Stack alignItems="center" spacing={2}>
            {icon}
            <Typography fontWeight="bold" textAlign="center">{title}</Typography>
            <List>
                {details.map((item, index) => (
                    <Typography
                        key={index}
                        component="li"
                        color="text.secondary"
                        textAlign="center"
                    >
                        {item}
                    </Typography>
                ))}
            </List>
        </Stack>
    )
}

export default DirectoryInfo;