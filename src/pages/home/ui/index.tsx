import React from 'react';
import { NextPage } from 'next';
import { Inter } from 'next/font/google';

import {
    Styled
} from './styled'
import { Button } from '@/shared/ui';
import { Header } from '@/widgets';

const inter = Inter({ subsets: ['latin'] });

export const Home: NextPage = () => {
    return (
        <Styled>
            <Header />
            <Button>Hello</Button>
        </Styled>
    );
};
