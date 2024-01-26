import { useTranslation } from 'react-i18next';
import { useModal } from "mui-modal-provider";
import { useTheme, lighten } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { languages } from '@/i18n';
import Section from '@/common/ui/section';
import SocialMedia from '@/layouts/root/components/social-media'
import TermsConditionsModal from '@/layouts/root/components/terms-conditions-modal'

function Footer() {
    const { showModal } = useModal();
    const theme = useTheme();
    const { i18n, t } = useTranslation('page');

    const handleChange = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <Section bgcolor={lighten(theme.palette.primary.main, 0.925)} py={7.5}>
            <Stack alignItems='center' justifyContent='space-between' sx={{ flexDirection: { md: 'row', xs: 'column' } }} spacing={2}>
                <Typography color='text.secondary' textAlign='center'>
                    {t('footer.exocoder')}
                </Typography>
                <Button variant="text" onClick={() => showModal(TermsConditionsModal)}>{t('terms_and_conditions.title')}</Button>
                <SocialMedia />
                <Select value={i18n.language} onChange={handleChange} input={<InputBase />}>
                    {languages.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
                </Select>
            </Stack>
        </Section>
    );
}

export default Footer;