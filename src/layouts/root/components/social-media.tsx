import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return (
        <Stack direction='row' spacing={3} pr={2}>
            <FacebookIcon color='primary' />
            <InstagramIcon color='error' />
        </Stack>
    )
}
export default SocialMedia;