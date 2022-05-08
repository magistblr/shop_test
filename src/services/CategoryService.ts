import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ICategory } from 'models/ICategory';

export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test2.sionic.ru/api' }),
  endpoints: build => ({
    fetchAllCategory: build.query<ICategory[], string>({
      query: () => ({
        url: '/Categories',
      }),
    }),
    fetchSortRangeCategories: build.query<ICategory[], object>({
      query: (data: any) => ({
        url: '/Categories',
        params: {
          sort: `[${data.name}, "ASC"]`,
          range: `[${data.min}, ${data.max}]`,
        },
      }),
    }),
    fetchCategory: build.query<ICategory, number>({
      query: (id: number) => ({
        url: `/Categories/${id}`,
      }),
    }),
  }),
});

export const { useFetchAllCategoryQuery, useFetchSortRangeCategoriesQuery } = categoryAPI;
