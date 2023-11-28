declare const _brand: unique symbol

declare global {
    export type Nullable<T> = T | null

    /**
     * ⚠️ FSD
     *
     * Its hack way to export redux infering types from @/app
     * and use it in @/shared/model/hooks.ts
     */

    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    declare type RootState = import('@/app/store').RootState
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    declare type AppDispatch = import('@/app/store').AppDispatch
}

export {}
