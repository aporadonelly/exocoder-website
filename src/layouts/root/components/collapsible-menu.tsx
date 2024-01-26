import { Link as RouterLink } from 'react-router-dom';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useRootLayout } from '@/layouts/root/components/hooks';

import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const navItems = (t: TFunction<['page']>) => [
    {
        label: t('page:nav.about'),
        path: '/#about'
    },
    {
        label: t('page:nav.our_commitments'),
        path: '/#our-commitments'
    },
    {
        label: t('page:nav.how_does_it_work'),
        path: '/#how-does-it-work'
    },
    {
        label: t('page:nav.faq'),
        path: '/#faq'
    },
    {
        label: t('page:nav.get_in_touch'),
        path: '/#get-in-touch'
    }
];

function CollapsibleMenu() {
    const { isMenuOpen } = useRootLayout();
    const { t } = useTranslation('page')

    return (
        <Box display={{ md: "none", xs: "block" }}>
            <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {navItems(t).map((navItem) => (
                        <ListItemButton key={navItem.path} component={RouterLink} to={navItem.path}>
                            <ListItemText>{navItem.label}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </Box>
    );
}

export default CollapsibleMenu;