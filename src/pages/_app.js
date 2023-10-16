import '@/styles/main.scss';
import { AppProvider } from '../context/AppContext';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Analytics />
    </AppProvider>
  )
}
