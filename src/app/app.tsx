import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

import lightTheme from '@/shared/theme/light-theme.json';
import './styles/globals.css';

export function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <div className={inter.className}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
