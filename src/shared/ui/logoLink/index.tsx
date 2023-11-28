import React from 'react';

import {
    LogoLinkStyled,
} from './styled'
import { Logo } from '@/shared/ui/icons';
import { LogoLinkProps } from './types';

export const LogoLink: React.FC<LogoLinkProps> = (props) => {
    const {href = '/', ...otherProps} = props;
    return (
        <LogoLinkStyled {...otherProps} href={href}>
            <Logo />
        </LogoLinkStyled>
    )
}
