import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

import RootLayoutProvider from '@/layouts/root/components/provider'
import withScrollToHashElement from '@/hocs/with-scroll-to-hash-element';
import Header from '@/layouts/root/components/header'
import Footer from '@/layouts/root/components/footer'

function RootLayout() {
    return (
        <RootLayoutProvider>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Outlet />
                <Footer />
            </Box>
        </RootLayoutProvider>
    );
}

const RootLayoutWithScrollToHashElement = withScrollToHashElement(RootLayout)

export default RootLayoutWithScrollToHashElement;