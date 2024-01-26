import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider, TextFieldElement, /* RadioButtonGroup */ } from 'react-hook-form-mui';
import Stack from '@mui/material/Stack';

import Dialog, { DialogProps } from '@/components/dialog';

/* import { TFunction } from 'i18next';  */

 /* const courses = (t: TFunction<['page']>) => [
    {
        id: 'Programming Essentials',
        label: t('page:form.programming-essentials')
    },
    {
        id: 'Front-end Development',
        label: t('page:form.front-end-development')
    },
    {
        id: 'Back-end Development',
        label: t('page:form.back-end-development')
    },
    {
        id: 'Fullstack Development',
        label: t('page:form.fullstack-development')
    }
]  */

function BookOnlineModal(props: DialogProps) {
    const { t } = useTranslation(['page'])
    const formRef = useRef<HTMLFormElement>(null);

    const formContext = useForm({
        defaultValues: {
            EMAIL: '',
            FNAME: '',
            LNAME: '',
            MOBILE: '',
            TYPE: 'Programming Essentials',
        }
    });

    const onSubmit = () => formRef.current?.submit()

    return (
        <Dialog
            {...props}
            dialogContentProps={{ dividers: true }}
            title={t("page:form.apply-online")}
            confirmText={t("page:nav.apply_now")}
            confirmButtonProps={{
                onClick: formContext.handleSubmit(onSubmit),
            }}
            showCancel={false}
            maxWidth="sm"
            fullWidth>
            <FormProvider {...formContext}>
                <form
                    ref={formRef}
                    onSubmit={formContext.handleSubmit(onSubmit)}
                    action="https://petcheckr.us21.list-manage.com/subscribe/post?u=6151b0c7f359f0bf8d1c95a7f&amp;id=53419d38f6&amp;f_id=001df0e6f0"
                    method="post"
                >
                    <Stack spacing={2}>
                        <TextFieldElement name="EMAIL" type="email" label={t('page:form.email')} />
                        <TextFieldElement name="FNAME" label={t('page:form.fname')} />
                        <TextFieldElement name="LNAME" label={t('page:form.lname')} />
                        <TextFieldElement name="MOBILE" label={t('page:form.mobile')} />
                        {/* <RadioButtonGroup name="Courses Offer" label={t("page:form.courses-offer")} options={courses(t)} row /> */}
                    </Stack>
                </form>
            </FormProvider>
        </Dialog >
    );
}

export default BookOnlineModal;