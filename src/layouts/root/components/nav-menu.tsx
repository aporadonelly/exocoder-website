import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useModal } from 'mui-modal-provider';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import BookOnlineModal from "@/pages/home/components/book-online-modal";

import { TFunction } from 'i18next';

const navItems = (t: TFunction<['page']>) => [
    {
        label: t('page:nav.home'),
        path: '/#home'
    },
    {
        label: t('page:nav.courses'),
        path: '/#courses'
    },
    {
        label: t('page:nav.about_us'),
        path: '/#about'
    },
  /*   {
        label: t('page:nav.faq'),
        path: '/#faq'
    }, */
   /*  {
        label: t('page:nav.apply_now'),
        path: '/#apply'
    }, */
];

function NavMenu() {
    const { t } = useTranslation('page')
    const { showModal } = useModal();

    return (
        <Fragment>
            <Box display={{ md: "flex", xs: "none" }} gap={2} mx="auto" sx={{ marginRight: 15 }}>
                {
                    navItems(t).map((navItem) => (
                        <Button
                            key={navItem.path}
                            component={RouterLink}
                            to={navItem.path}
                            variant='text'
                            color='inherit'>
                            {navItem.label}
                        </Button>
                    ))
                }
            <Button onClick={() => showModal(BookOnlineModal)}>{t('nav.apply_now')}</Button>
            </Box>
            <Box display={{ md: "none", xs: "block" }} flexGrow={1} />
        </Fragment>
    )
}

export default NavMenu;