import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQCardProps {
    title: string;
    details: string;
}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon color='primary' sx={{ fontSize: '1.5rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    color: 'primary',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.901)'
            // : 'rgba(255, 255, 255, 0.925)',
            : '#FDF6F1',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
    },

}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function FAQCard(props: FAQCardProps) {
    const { title, details } = props;

    return (
        <Accordion>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default FAQCard;