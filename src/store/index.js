import { configureStore } from '@reduxjs/toolkit'
import {universitiesApi} from "./universities/universitiesSlice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [universitiesApi.reducerPath]: universitiesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(universitiesApi.middleware),
})

setupListeners(store.dispatch)