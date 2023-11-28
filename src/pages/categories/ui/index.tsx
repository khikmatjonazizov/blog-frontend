import React from 'react';
import { NextPage } from 'next';

import {
    CategoriesStyled
} from './styled'
import { Header } from '@/widgets';

export const Categories: NextPage = () => {
    return (
        <CategoriesStyled>
            <Header />
        </CategoriesStyled>
    )
}
