import { IProductVariationsValues } from './../../models/IProductVariations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProductImage } from '../../models/IProductImage'
import { IProductVariations } from '../../models/IProductVariations'

import { IProduct } from 'models/IProduct'
/* eslint-disable no-param-reassign */
interface ProductState {
  products: IProduct[]
  isLoading: boolean
  error: string
  minRangeProduct: number
  maxRangeProduct: number
  sort: boolean
  checkedGlobal: boolean
  id: number
  images: IProductImage[]
  imageId: number
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
  minRangeProduct: 0,
  maxRangeProduct: 7,
  sort: false,
  checkedGlobal: false,
  id: 0,
  images: [],
  imageId: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state: ProductState) {
      state.isLoading = true
    },
    productsFetchingSuccess(state: ProductState, action: PayloadAction<IProduct[]>) {
      state.isLoading = false
      state.error = ''
      state.products = []
      state.products.push(...action.payload)
    },
    productsFetchingError(state: ProductState, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    productsMin(state: ProductState, action: PayloadAction<number>) {
      state.minRangeProduct = action.payload
    },
    productsMax(state: ProductState, action: PayloadAction<number>) {
      state.maxRangeProduct = action.payload
    },
    productsSort(state: ProductState, action: PayloadAction<boolean>) {
      state.sort = action.payload
    },
    productsChecked(state: ProductState, action: PayloadAction<boolean>) {
      state.checkedGlobal = action.payload
    },
    productsId(state: ProductState, action: PayloadAction<number>) {
      state.id = action.payload
    },
    productsImagesFetchingSuccess(
      state: ProductState,
      action: PayloadAction<IProductImage[]>,
    ) {
      state.isLoading = false
      state.error = ''
      state.images = action.payload
    },
    productsImage(state: ProductState, action: PayloadAction<number>) {
      state.imageId = action.payload
    },
    variationsAdd(
      state: ProductState,
      action: PayloadAction<[]>,
    ) {
      state.isLoading = false
      state.error = ''
      state.products.forEach(item => {
        item.variations = action.payload
      })
    },
    variationsFetchingSuccess(
      state: ProductState,
      action: PayloadAction<[IProductVariations[], number]>,
    ) {
      state.isLoading = false
      state.error = ''
      state.products.forEach(item => item.id === action.payload[1] ? item.variations.push(...action.payload[0]) : '')
    },
    variationsAddFetchValues(
      state: ProductState,
      action: PayloadAction<[IProductVariationsValues, number]>,
    ) {
      state.products.forEach(item => {
        item.variations.forEach(item => {
          item.values = action.payload[0]
        })
      })
    },
  },
})

export default productSlice.reducer
