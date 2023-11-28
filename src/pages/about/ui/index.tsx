import React from 'react';
import { NextPage } from 'next';

import { AboutStyled } from '@/pages/about/ui/styled';
import { Header } from '@/widgets';

export const About: NextPage = () => {
    return (
        <AboutStyled>
            <Header />
        </AboutStyled>
    )
}
