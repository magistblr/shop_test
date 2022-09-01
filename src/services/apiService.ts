import { IProductVariationPropertyListValues } from './../models/IProductVariationPropertyListValues';
import { IProductVariationPropertyValues } from './../models/IProductVariationPropertyValues';
import { IProductVariationProperties } from './../models/IProductVariationProperties';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { IProductImage } from '../models/IProductImage'
import { IProductVariations } from '../models/IProductVariations'

import { ICategory } from 'models/ICategory'
import { IProduct } from 'models/IProduct'

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
    fetchProductVariation: build.query<IProductVariations, number>({
      query: (productId: number) => ({
        url: `/ProductVariations/${productId}`,
      }),
    }),
    fetchProductAllVariations: build.query<IProductVariations[], object>({
      query: (data: any) => ({
        url: `/ProductVariations/`,
        params: {
          sort: `[${data.sort}, "ASC"]`,
          range: `[${data.min}, ${data.max}]`,
          filter: `{"product_id": ${data.filter}}`,
        },
      }),
    }),
    fetchProductAllVariationsProperties: build.query<IProductVariationProperties[], string>({
      query: () => ({
        url: `/ProductVariationProperties`,
      }),
    }),
    fetchProductVariationProperty: build.query<IProductVariationProperties, number>({
      query: (propertiesId: number) => ({
        url: `/ProductVariationProperties/${propertiesId}`,
      }),
    }),
    fetchProductVariationListValues: build.query<IProductVariationPropertyListValues, number>({
      query: (variationPropertyId: number) => ({
        url: `/ProductVariationPropertyListValues/${variationPropertyId}`,
      }),
    }),
    fetchProductVariationPropertyValues: build.query<IProductVariationPropertyValues[], {}>({
      query: (data: any) => ({
        url: `/ProductVariationPropertyValues/`,
        params: {
          filter: `{"product_variation_id": ${data.filter}}`,
        },
      }),
    }),
  }),
})
export const { } = API
