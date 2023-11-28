import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Inter } from 'next/font/google';
import cn from 'classnames';

import lightTheme from '@/shared/theme/light-theme.json';
import './styles/globals.css';

import { store } from './store';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <ReduxProvider store={store}>
                <div className={cn(inter.className, 'font')}>
                    <Component {...pageProps} className={inter.className} />
                </div>
            </ReduxProvider>
        </ThemeProvider>
    );
}
