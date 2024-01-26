import Box from '@mui/material/Box';
import { Squash as Hamburger } from 'hamburger-react'

import { useRootLayout } from '@/layouts/root/components/hooks';

function MenuToggler() {
    const { toggleMenu } = useRootLayout();

    return (
        <Box display={{ md: "none", sm: "block" }}>
            <Hamburger size={24} onToggle={toggleMenu} />
        </Box>
    )
}

export default MenuToggler;