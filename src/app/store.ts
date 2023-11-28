import { configureStore, ConfigureStoreOptions, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rootReducer } from './rootReducer';


export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined,
) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        devTools: true,
        ...options,
    });

    setupListeners(store.dispatch)

    return store;
}

export const store = createStore();

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
