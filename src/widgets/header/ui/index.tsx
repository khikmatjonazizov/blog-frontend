import React from 'react';
import { usePathname } from 'next/navigation';

import {
    Styled,
    HeaderContainer,
    HeaderNavbarWrapper,
    HeaderNavbar,
    HeaderNavbarLink, HeaderAuthLink,
} from './styled';
import { Button, LogoLink } from '@/shared/ui';
import { paths } from '../config/paths';

export const Header = () => {
    const currentPath = usePathname();

    return (
        <Styled>
            <HeaderContainer>
                <LogoLink />

                <HeaderNavbarWrapper>
                    <HeaderNavbar>
                        {
                            paths.map(path => (
                                <HeaderNavbarLink
                                    key={path.id}
                                    href={path.href}
                                    data-active={path.href === currentPath}
                                >
                                    {path.title}
                                </HeaderNavbarLink>
                            ))
                        }
                    </HeaderNavbar>
                    <HeaderAuthLink href='/auth'>
                        <Button>Sign in / Sign up</Button>
                    </HeaderAuthLink>
                </HeaderNavbarWrapper>
            </HeaderContainer>
        </Styled>
    );
};
