import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const universitiesApi = createApi({
    reducerPath: 'universitiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getUniversities: builder.query({
            query: (data) => `http://universities.hipolabs.com/search?country=${data.name}`,
        }),
    }),
})

export const { useGetUniversitiesQuery } = universitiesApi