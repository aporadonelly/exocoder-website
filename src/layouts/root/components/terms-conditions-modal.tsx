import Dialog, { DialogProps } from '@/components/dialog';

import i18n from '@/i18n';

function TermsConditionsModal(props: DialogProps) {
    return (
        <Dialog
            {...props}
            dialogContentProps={{ dividers: true }}
            title={i18n.t('page:terms_and_conditions.title')}
            confirmButtonProps={{
                onClick: props.onClose,
            }}
            showCancel={false}
            maxWidth="md"
            fullWidth
        >
            Our legal team is currently working hard on this page. Coming soon! If you want more info in the meantime, you
            can email <a href="mailto:info@petcheckr.eu">info@petcheckr.eu</a>
        </Dialog>
    );
}

export default TermsConditionsModal;