import { IProductImage } from './../models/IProductImage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ICategory } from 'models/ICategory';
import { IProduct } from 'models/IProduct';

export const API = createApi({
  reducerPath: 'API',
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
          sort: `[${data.sort}, "ASC"]`,
          range: `[${data.min}, ${data.max}]`,
        },
      }),
    }),
    fetchCategory: build.query<ICategory, number>({
      query: (id: number) => ({
        url: `/Categories/${id}`,
      }),
    }),
    fetchAllProducts: build.query<IProduct[], string>({
      query: () => ({
        url: '/Products',
      }),
    }),
    fetchSortRangeFilterProducts: build.query<IProduct[], object>({
      query: (data: any) => ({
        url: '/Products',
        params: {
          sort: `[${data.sort}, "ASC"]`,
          range: `[${data.min}, ${data.max}]`,
          filter: `{"category_id": ${data.filter}}`,
        },
      }),
    }),
    fetchProduct: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `/Products/${id}`,
      }),
    }),
    fetchProductImage: build.query<IProductImage, number>({
      query: (id: number) => ({
        url: `/ProductImages/${id}`,
      }),
    }),
    fetchSortRangeFilterProductsImage: build.query<IProductImage[], object>({
      query: (data: any) => ({
        url: '/ProductImages',
        params: {
          sort: `[${data.sort}, "ASC"]`,
          range: `[${data.min}, ${data.max}]`,
          filter: `{"product_id": ${data.filter}}`,
        },
      }),
    }),
  }),
});


export const { useFetchAllCategoryQuery,
  useFetchSortRangeCategoriesQuery,
  useFetchAllProductsQuery,
  useFetchSortRangeFilterProductsQuery,
  useFetchSortRangeFilterProductsImageQuery
} = API;