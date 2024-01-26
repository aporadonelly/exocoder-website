import AccessTimeIcon from '@mui/icons-material/AccessTime';
/* import RecyclingIcon from "@mui/icons-material/Recycling"; */
/* import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'; */
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
/* import AirIcon from '@mui/icons-material/Air';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; */
/* import AddBoxIcon from '@mui/icons-material/AddBox'; */
import Link from '@mui/material/Link'
/* import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'; */
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhpIcon from '@mui/icons-material/Php';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
/* 
import LinkIcon from '@mui/icons-material/Link';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'; */
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';

import { TFunction } from 'i18next';

export const services = (t: TFunction<['page']>) => [

    {
        icon: <TerminalIcon color="primary" fontSize="large" />,
        title: t('page:services.programming_essentials.title'),
        description: t('page:services.programming_essentials.desc'),
    },
    {
        icon: <CodeOffIcon color="primary" fontSize="large" />,
        title: t('page:services.frontend_development.title'),
        description: t('page:services.frontend_development.desc'),
    },
    {
        icon: <PhpIcon color="primary" fontSize="large" />,
        title: t('page:services.backend_development.title'),
        description: t('page:services.backend_development.desc'),
    },
    {
        icon: <DeveloperModeIcon color="primary" fontSize="large" />,
        title: t('page:services.fullstack_development.title'),
        description: t('page:services.fullstack_development.desc'),
    },
    /* {
        icon: <EuroSymbolIcon color="primary" fontSize="large" />,
        title: t('page:services.low_cost'),
        description: t('page:services.low_cost.desc'),
    },
    {
        icon: <RecyclingIcon color="primary" fontSize="large" />,
        title: t('page:services.continuous_improvement'),
        description: t('page:services.continuous_improvement.desc'),
    } */
]

export const features = (t: TFunction<['page']>) => [
    {
        icon: <AccessTimeIcon color="primary" fontSize="large" />,
        title: t('page:features.career_shifters'),
        description: t('page:features.career_shifters.desc'),
    },
    {
        icon: <SchoolIcon color="primary" fontSize="large" />,
        title: t('page:features.fresh_graduates'),
        description: t('page:features.fresh_graduates.desc'),
    },
    {
        icon: <PersonIcon color="primary" fontSize="large" />,
        title: t('page:features.it_professional'),
        description: t('page:features.it_professional.desc'),
    }
]

export const steps = (t: TFunction<['page']>) => [
    {
        icon: <AdsClickIcon color="primary" fontSize="large" />,
        index: 1,
        title: t('page:steps.register'),
        description: t('page:steps.register.desc'),
    },
    {
        icon: <FormatAlignJustifyIcon color="primary" fontSize="large" />,
        index: 2,
        title: t('page:steps.connect'),
        description: t('page:steps.connect.desc'),
    },
    {
        icon: <MarkEmailReadIcon color="primary" fontSize="large" />,
        index: 3,
        title: t('page:steps.consult'),
        description: t('page:steps.consult.desc'),
    },
    {
        icon: <HealingOutlinedIcon color="primary" fontSize="large" />,
        index: 4,
        title: t('page:steps.diagnosis'),
        description: t('page:steps.diagnosis.desc'),
    },
]

export const directories = (t: TFunction<['page']>) => [
    {
        icon: <RoomOutlinedIcon color="primary" fontSize="large" />,
        title: "exocoder academy",
        details: ["Brgy. Hilamonan", "Villa Concha, Kabankalan City", "Philippines"],
    },
    {
        icon: <MailOutlineOutlinedIcon color="primary" fontSize="large" />,
        title: t('directories.get_in_touch'),
        details: [<Link href='mailto:info@exocoder.io' underline='none'>info@exocoder.io</Link>]
    }
];

export const faqs = (t: TFunction<['page']>) => [
    {
        title: t("page:faq.question_01.q"),
        details: t("page:faq.question_01.a"),
    },
    {
        title: t("page:faq.question_02.q"),
        details: t("page:faq.question_02.a"),
    },
    {
        title: t("page:faq.question_03.q"),
        details: t("page:faq.question_03.a"),
    },
    {
        title: t("page:faq.question_04.q"),
        details: t("page:faq.question_04.a"),
    },
    {
        title: t("page:faq.question_05.q"),
        details: t("page:faq.question_05.a"),
    },
    {
        title: t("page:faq.question_06.q"),
        details: t("page:faq.question_06.a"),
    },
    {
        title: t("page:faq.question_07.q"),
        details: t("page:faq.question_07.a"),
    },
    {
        title: t("page:faq.question_08.q"),
        details: t("page:faq.question_08.a"),
    },
    {
        title: t("page:faq.question_09.q"),
        details: t("page:faq.question_09.a"),
    },
    {
        title: t("page:faq.question_10.q"),
        details: t("page:faq.question_10.a"),
    },
    {
        title: t("page:faq.question_11.q"),
        details: t("page:faq.question_11.a"),
    },
    /* {
        title: t("page:faq.question_12.q"),
        details: t("page:faq.question_12.a"),
    },
    {
        title: t("page:faq.question_13.q"),
        details: t("page:faq.question_13.a"),
    },
    {
        title: t("page:faq.question_14.q"),
        details: t("page:faq.question_14.a"),
    }, */
];
