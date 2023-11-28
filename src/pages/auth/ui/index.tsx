import React from 'react';
import { NextPage } from 'next';

import {
    AuthBox,
    AuthContent,
    AuthHeader,
    AuthStyled,
    AuthTitle,
} from './styled';
import { SignInForm } from '@/features/auth/signIn/ui';
import { SignUpForm } from '@/features/auth/signUp/ui';
import { LogoLink } from '@/shared/ui';
import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/shared/models/hooks';

export const Auth: NextPage = () => {
    const params = useSearchParams()
    const isSignUp = params?.get('method') === 'signup'

    const user = useAppSelector(state => state.session)
    console.log(user)

    return (
        <AuthStyled>
            <AuthHeader>
                <LogoLink />
            </AuthHeader>
            <AuthContent>
                <AuthBox>
                    <AuthTitle>
                        {
                            isSignUp ? 'Sign up' : 'Sign in'
                        }
                    </AuthTitle>
                    {
                        isSignUp ?
                            <SignUpForm /> :
                            <SignInForm />
                    }
                </AuthBox>
            </AuthContent>
        </AuthStyled>
    );
};
