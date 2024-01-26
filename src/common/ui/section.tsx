import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';

interface SectionProps extends BoxProps {
  children: React.ReactNode;
}

function Section(props: SectionProps) {
  const { children, ...otherProps } = props;

  return (
    <Box py={15} {...otherProps}>
      <Container>
        {children}
      </Container>
    </Box>
  )
}

export default Section;