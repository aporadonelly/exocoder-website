import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';

import Dialog, { DialogProps } from '@/components/dialog';
import { faqs } from "@/common/mock";
import FAQCard from './faq-info';

function BookOnlineModal(props: DialogProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation(['page'])


    return (
        <Dialog
            {...props}
            dialogContentProps={{ dividers: true }}
            title={t('page:form.frequently-asked-questions')}
            confirmText={t('page:form.button.close')}
            confirmButtonProps={{
                onClick: () => {
                    props.onClose?.();
                },
            }}
            showCancel={false}
            maxWidth="lg"
            fullWidth
            fullScreen={matches && true}

        >
            <Stack spacing={2} >
                {faqs(t).map((faq) => {
                    const { title, details } = faq
                    return (
                        <FAQCard
                            title={title}
                            details={details}
                        />
                    )
                })}
            </Stack>
        </Dialog >
    );
}

export default BookOnlineModal;