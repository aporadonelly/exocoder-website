/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-modal-video/css/modal-video.min.css';
import { useTranslation } from 'react-i18next';
import { Fragment, useState, useEffect } from "react";
import ReactGA from 'react-ga'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useModal } from 'mui-modal-provider';
import { useTheme, lighten } from "@mui/material/styles";
import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalVideo from 'react-modal-video';
/* import AlertIcon from '@mui/icons-material/Warning'; */

/* import take from 'lodash/take'; */

import { directories, features, services, steps, /* faqs */ } from "@/common/mock";
import Section from "@/common/ui/section";
import PawPrintCard from '@/common/ui/paw-print-card';

import FeatureInfo from "@/pages/home/components/feature-info";
import ServiceInfo from "@/pages/home/components/service-info";
import DirectoryInfo from "@/pages/home/components/directory-info";
import BookOnlineModal from "@/pages/home/components/book-online-modal";
/* import FAQCard from '@/pages/home/components/faq-info';
import ShowAllFAQs from '@/pages/home/components/faq-lists-modal'; */

const Banner = styled(CardMedia)({
    position: "absolute",
    borderRadius: 0,
    backgroundPosition: "top",
    width: "100%",
    height: "100vh",
});

const TypographyResponsiveAlignment = styled(Typography)(({ theme }) => ({
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

export function Component() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const { t } = useTranslation(['page']);
    const { showModal } = useModal();
    const [isOpen, setOpen] = useState(false)


    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <Fragment>
            {matches ? (
                <Section id='home'>
                    <Grid container alignItems="center" gap={4}>
                        <Grid item md={5.5} xs={12}>
                            <Box position='relative' >
                                <CardMedia
                                    component="img"
                                    src="/images/home-image2.png"
                                    alt={t('page:it_solutions.title')}
                                    />
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Stack alignItems={{ md: "flex-start", xs: "center" }} spacing={6}>
                                {/* <CardMedia
                                    component="img"
                                    src="/logo-mini.png"
                                    alt="petcheckr"
                                    sx={{ width: 75 }}
                                /> */}
                                <TypographyResponsiveAlignment variant="h2" fontWeight="bold">
                                    {t('page:home.slogan')}
                                </TypographyResponsiveAlignment>
                                <TypographyResponsiveAlignment variant="h5" color="text.primary" fontWeight="bold">
                                    {t('page:home.subtitles')}
                                </TypographyResponsiveAlignment>
                                <Button onClick={() => showModal(BookOnlineModal)}>{t('page:nav.apply_now')}</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Section>
            ) : (
                <Section id='home'>
                    <Box
                        id='home'
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        minHeight="100vh"
                        sx={{ display: { xs: 'none', md: 'inherit' } }}
                    >
                       <Banner image="/images/home-image2.png" sx={{width: 600, height: 600, marginLeft: 70 }} />
                        <Container>
                            <Grid container position="relative">
                                <Grid item md={4} xs={12}>
                                    <Stack useFlexGap spacing={8}>
                                        {/* <img src="/images/exocoder-icon.svg" alt="exocoder" width="100v"/> */}
                                        <Typography variant="h2" fontWeight="bold">
                                        {/* {t('page:home.slogan')} */}
                                        </Typography>
                                        <Typography variant="h5" color="text.primary" fontWeight="bold" sx={{ marginTop: 10 }}>
                                            {t('page:home.subtitles')}
                                        </Typography>
                                        <Grid container alignItems='center' spacing={4}>
                                            <Grid item md='auto' xs={12}>
                                                <Button onClick={() => showModal(BookOnlineModal)} >{t('page:nav.apply_now')}</Button>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Section>)}

            <Section bgcolor={lighten(theme.palette.primary.main, 0.925)}>
                <Grid container spacing={4}>
                    {features(t).map(({ icon, title, description }) => (
                        <Grid key={title} item md={4} xs={12}>
                            <FeatureInfo
                                icon={icon}
                                title={title}
                                description={description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Section>

            <Section>
                <Grid container alignItems="center" gap={4}>
                    <Grid item md={5.5} xs={12}>
                        <Box position='relative'>
                            <CardMedia
                                component="img"
                                src="/images/home-image.png"
                                alt={t('page:it_solutions.title')}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs />
                    <Grid item md={5} xs={12}>
                        <Stack alignItems={{ md: "flex-start", xs: "center" }} spacing={6}>
                            <CardMedia
                                component="img"
                                src="/images/exocoder-icon.svg"
                                alt="exocoder"
                                sx={{ width: 75 }}/>
                            <TypographyResponsiveAlignment variant="h3">
                                {t('page:it_solutions.title')}  <b>{t('page:it_solutions_bold.title')}</b>
                            </TypographyResponsiveAlignment>
                            <TypographyResponsiveAlignment color="text.secondary">
                                {t('page:it_solutions.desc1')}
                            </TypographyResponsiveAlignment>
                            <TypographyResponsiveAlignment color="text.secondary">
                                {t('page:it_solutions.desc2')}
                            </TypographyResponsiveAlignment>
                            <Button onClick={() => showModal(BookOnlineModal)}>{t('page:btn.receive_updates')}</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Section>
            <Section bgcolor={lighten(theme.palette.primary.main, 0.925)} id='courses'>
                <Stack useFlexGap alignItems="center" spacing={8}>
                    <Typography variant="h3" textAlign="center" fontWeight="bold" width="100%" maxWidth={500} height='100%' maxHeight={500}>
                        {t('page:our_trainings_options.title')}
                    </Typography>   
                    <Grid container spacing={8}>
                        {services(t).map(({ icon, title, description }) => (
                            <Grid key={title} item md={6} xs={12}>
                                <ServiceInfo
                                    icon={icon}
                                    title={title}
                                    description={description}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Section>
            <Section id='how-does-it-work'>
                <Stack useFlexGap alignItems="center" spacing={8}>
                    <Typography variant="h3" textAlign="center" fontWeight="bold" width="100%" maxWidth={700}>
                        {t('page:how_to_apply.title')}
                    </Typography>
                    <Grid container spacing={4}>
                        {steps(t).map((step, index) => (
                            <Grid key={step.index} item md={3} xs={12}>
                                <PawPrintCard index={index}>
                                    <Stack alignItems='center' spacing={2}>
                                        {step.icon}
                                        <Typography fontWeight='bold'>{step.title}</Typography>
                                        <Typography textAlign='center'>{step.description}</Typography>
                                    </Stack>
                                </PawPrintCard>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Section>
           {/*  <Section
                bgcolor={lighten('#F05D50', 0.825)}
                borderBottom={1}
                borderColor="divider"
            >
                <Stack useFlexGap alignItems="center" spacing={8}>
                    <Stack width="100%" spacing={2}>
                        <Typography
                            color="primary.main"
                            textAlign="center"
                            fontWeight="medium"
                        >
                            <AlertIcon color="error" fontSize="large" />
                        </Typography>
                        <Typography variant="h3" textAlign="center" fontWeight="bold">
                            {t('page:emergency.title')}
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                            {t('page:emergency.details')}
                        </Typography>
                    </Stack>
                </Stack>
            </Section> */}
            {/* <Section >
                <Grid container alignItems="center" id='about' spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box position='relative'>
                            <CardMedia
                                component="img"
                                src="/images/exocoder-icon.svg"
                                alt=''
                                sx={{ width: 100, paddingRight: 100}}
                            />
                             <CardMedia
                                component="img"
                                src="/images/exocoder-logo-01.svg"
                                alt=''
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Stack alignItems={{ md: "flex-start", xs: "center" }} spacing={2} >
                            <Typography variant="h3" textAlign="center" fontWeight="bold">
                                {t('page:faq.title')}
                            </Typography>
                            {take(faqs(t), 5).map((faq) => {
                                const { title, details } = faq
                                return (
                                    <FAQCard
                                        title={title}
                                        details={details}
                                    />
                                )
                            })}
                            <Button onClick={() => showModal(ShowAllFAQs)}>{t('page:form.see-all-faqs')}</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Section > */}
            <Section
                id='get-in-touch'
                bgcolor={lighten(theme.palette.primary.main, 0.925)}
                borderBottom={1}
                borderColor="divider"
            >
                <Grid container spacing={4}>
                    <Grid key="logo" item md={4} xs={12}>
                        <Stack alignItems="center" spacing={2} textAlign="center">
                            <img src="/images/exocoder-logo-01.svg" width="450v" />
                        </Stack>
                    </Grid>
                    {directories(t).map(({ icon, title, details }) => (
                        <Grid key={title} item md={3} xs={12}>
                            <DirectoryInfo icon={icon} title={title} details={details} />
                        </Grid>
                    ))}
                </Grid>
            </Section>

            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="g0f_BRYJLJE"
                onClose={() => setOpen(false)}
            />
        </Fragment >
    );
}

Component.displayName = "Home";