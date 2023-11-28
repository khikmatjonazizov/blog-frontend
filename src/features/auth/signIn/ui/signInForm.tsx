import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/shared/models/hooks';
import {
    AuthDescription,
    AuthInputField,
    AuthButtonField,
    AuthForm,
    AuthInput,
    AuthInputFieldError,
} from './signInForm.styled';
import { signInThunk } from '../model/signIn';
import { type SignInFormSchema, signInFormSchema } from '../model/signInFormSchema';

export const SignInForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.session.user)
    const {
        setError,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<SignInFormSchema>({
        resolver: zodResolver(signInFormSchema),
    });

    const onSubmit = useCallback(async (values: SignInFormSchema) => {
        try {
            await dispatch(signInThunk(values)).unwrap();
        } catch (e) {
            console.log(e)
        }
    }, []);

    const onClick = () => {
        router.replace('auth?method=signup');
    };

    return (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <AuthInputField>
                <AuthInput placeholder='Email' type='email' {...register('email')} />
                <AuthInputFieldError>{errors.email?.message} {errors.root?.message}</AuthInputFieldError>
            </AuthInputField>
            <AuthInputField>
                <AuthInput placeholder='Password' type='password' {...register('password')} />
                <AuthInputFieldError>{errors.password?.message}</AuthInputFieldError>
            </AuthInputField>
            <AuthButtonField>
                <AuthDescription onClick={onClick}>Need an account? </AuthDescription>
                <Button type='submit'>Submit</Button>
            </AuthButtonField>
        </AuthForm>
    );
};
