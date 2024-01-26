import { styled } from '@mui/material/styles'
import { useScroll } from 'ahooks';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';

import NavMenu from '@/layouts/root/components/nav-menu';
import MenuToggler from '@/layouts/root/components/menu-toggler';
import CollapsibleMenu from '@/layouts/root/components/collapsible-menu';

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'appear' })<{ appear: boolean }>(({ theme, appear }) => ({
    [theme.breakpoints.up('md')]: {
        backgroundColor: '#3C3D37',
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.divider,
        boxShadow: 'none',
        color: '#FFFFFF',
        transition: theme.transitions.create(['backgroundColor'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        ...(appear && {
            backgroundColor: "#3C3D37",
            borderBottom: 0,
            borderBottomColor: 'transparent',
            boxShadow: '0 0 35px rgba(0, 0, 0, 0.1)',
            color: '#FFFFFF',
            transition: theme.transitions.create(['backgroundColor'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        })
    },
    [theme.breakpoints.down('md')]: {
        backgroundColor: '#3C3D37',
        borderBottom: 0,
        borderBottomColor: 'transparent',
        boxShadow: '0 0 35px rgba(0, 0, 0, 0.1)',
        color: '#FFFFFF',
        transition: theme.transitions.create(['backgroundColor'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }
}));

const Logo = styled(CardMedia)({
    width: 'auto',
    height: 40,
    objectFit: 'contain',
}) as typeof CardMedia;

function Header() {
    const scroll = useScroll(document);
    const trigger = useScrollTrigger({
        threshold: 0,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={300}>
            <StyledAppBar position="fixed" elevation={0} color='inherit' appear={!!scroll?.top} >
                <Toolbar>
                    <Logo component='img' src='/images/exocoder-logo-01.svg' alt='Logo'/>
                    <NavMenu />
                    <MenuToggler />
                </Toolbar>
                <CollapsibleMenu />
            </StyledAppBar>
        </Slide>
    )
}

export default Header;