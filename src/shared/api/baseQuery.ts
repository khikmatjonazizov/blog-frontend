import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BLOG_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).session

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})
