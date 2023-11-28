import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui';
import { AuthDescription, AuthField, AuthForm, AuthInput } from './signUpForm.styled';


export const SignUpForm: React.FC = () => {
    const router= useRouter()

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        console.log(event);
    };

    const onClick = () => {
        router.replace('/auth')
    }

    return (
        <AuthForm onSubmit={onSubmit}>
            <AuthField>
                <AuthInput placeholder='First name' required />
            </AuthField>
            <AuthField>
                <AuthInput placeholder='Last name' required />
            </AuthField>
            <AuthField>
                <AuthInput placeholder='Email' type='email' required />
            </AuthField>
            <AuthField>
                <AuthInput placeholder='Password' type='password' required />
            </AuthField>
            <AuthField style={{ justifyContent: 'space-between' }}>
                <AuthDescription onClick={onClick}>Have an account?</AuthDescription>
                <Button type='submit'>Submit</Button>
            </AuthField>
        </AuthForm>
    );
};
