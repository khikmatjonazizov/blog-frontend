import { createAsyncThunk } from '@reduxjs/toolkit'

import { sessionApi, SignInRequestBody } from '@/entities/session/api';
import { isFetchBaseQueryError } from '@/shared/api/isFetchBaseQueryError';

export const signInThunk = createAsyncThunk<void, SignInRequestBody, { state: RootState }>(
    'auth/login',
    async (body: SignInRequestBody, { dispatch }) => {
        try {
            await dispatch(sessionApi.endpoints.singIn.initiate(body)).unwrap()
        } catch (error) {
            if (isFetchBaseQueryError(error)) {
                if (typeof error.data === 'string') {
                    throw new Error(error.data)
                }
            }

            throw new Error(error.data.message)
        }
    }
)
