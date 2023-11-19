import React from 'react';
import { NextPage } from 'next';
import { Inter } from 'next/font/google';

import {
    HomeStyled
} from './home.styled'
import { Button } from '@/shared/ui';

const inter = Inter({ subsets: ['latin'] });

export const Home: NextPage = () => {
    return (
        <HomeStyled>
            <Button>Hello</Button>
        </HomeStyled>
    );
};
