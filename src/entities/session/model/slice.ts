import { createSlice } from '@reduxjs/toolkit';

import { sessionApi } from '../api/sessionApi';
import { SessionSliceStore } from './types';

const initialState: SessionSliceStore = {
    token: null,
    user: null,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            sessionApi.endpoints.singIn.matchFulfilled,
            (_, { payload }) => {
                return payload;
            },
        );
    },
});
