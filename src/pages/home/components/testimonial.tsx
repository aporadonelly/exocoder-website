import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const BubleBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    border: "2px solid",
    borderColor: theme.palette.divider,
    borderRadius: theme.spacing(0.75),
    padding: theme.spacing(3),
    "&:before": {
        border: "solid transparent",
        borderTopColor: theme.palette.divider,
        borderWidth: "18px 18px 0 0",
        content: '""',
        height: 0,
        left: 50,
        pointerEvents: "none",
        position: "absolute",
        top: "100%",
        width: 0,
    },
    "&:after": {
        border: "solid transparent",
        borderTopColor: "#fff",
        borderWidth: "14px 13px 0 0",
        marginLeft: 2,
        content: '""',
        height: 0,
        left: 50,
        pointerEvents: "none",
        position: "absolute",
        top: "100%",
        width: 0,
    },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: theme.spacing(2.5),
}))

interface TestimonialProps {
    testimonial: string;
    avatar: string;
    fullname: string;
    rating: number;
}

function Testimonial(props: TestimonialProps) {
    const { testimonial, avatar, fullname, rating } = props;

    return (
        <Stack useFlexGap spacing={4}>
            <BubleBox>{testimonial}</BubleBox>
            <Grid alignItems='center' container spacing={2}>
                <Grid item>
                    <StyledAvatar src={avatar} alt={fullname} />
                </Grid>
                <Grid item>
                    <Stack justifyContent="center">
                        <Typography>{fullname}</Typography>
                        <Rating size="small" defaultValue={rating} />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Testimonial;