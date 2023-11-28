import { baseApi } from '@/shared/api/baseApi'
import { type SignInRequestBody, type SignInResponse } from './types'

export const sessionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        singIn: build.mutation<SignInResponse, SignInRequestBody>({
            query: (body) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useSingInMutation } = sessionApi
