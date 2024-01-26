import '@fontsource/poppins';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import { ParallaxProvider } from 'react-scroll-parallax';
import { RouterProvider } from 'react-router-dom';
import ModalProvider from 'mui-modal-provider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReactGA from 'react-ga'
// import reportWebVitals from './reportWebVitals';

import theme from '@/theme';
import router from '@/router';
import i18n from '@/i18n';

const TRACKING_ID = "G - 2N04WTFH1E";
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ModalProvider>
              <CssBaseline />
              <RouterProvider router={router} />
            </ModalProvider>
          </LocalizationProvider>
        </ParallaxProvider>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
)

// const SendAnalytics = () => {
//   ReactGA.send({
//     hitType: "pageview",
//     page: window.location.pathname,
//   });
// }

// reportWebVitals(SendAnalytics);
