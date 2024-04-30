/* eslint-disable import/order */
import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
// fonts
import '@fontsource/plus-jakarta-sans/latin.css';

// eslint-disable-next-line import/extensions
import { theme } from '~/lib/styles/theme';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <SpeedInsights />
    <Analytics />
    <App />
  </React.StrictMode>
);
