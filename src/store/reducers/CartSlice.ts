import { IProductVariations, IProductVariationsValues } from './../../models/IProductVariations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* eslint-disable no-param-reassign */
interface ProductState {
  productVariations: ProductCart[]
  products: number
  totalPrice: number
  id: number
}

export type ProductCart = {
  productId: number
  id: number
  name: string
  price: number
  stock: number
  count: number
  inCart: boolean
}

const initialState: ProductState = {
  productVariations: [],
  products: 0,
  totalPrice: 0,
  id: 0
}

//TODO
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    productVariationsAdd(
      state: ProductState,
      action: PayloadAction<ProductCart>,
    ) {
      state.productVariations.push(action.payload)
      state.products = state.productVariations.length
      state.totalPrice = state.productVariations.reduce((acc, item) => acc + item.price, 0)
      state.id = 0
    },
    productVariationsRemove(
      state: ProductState,
      action: PayloadAction<number>,
    ) {
      state.productVariations = state.productVariations.filter(item => item.id !== action.payload)
      state.products = state.productVariations.length
      state.totalPrice = state.productVariations.reduce((acc, item) => acc + item.price, 0)
    },
    totalPriceCountPlus(
      state: ProductState,
      action: PayloadAction<[number, number]>,
    ) {
      state.totalPrice = state.totalPrice + action.payload[0]
      state.productVariations.forEach(item => item.id === action.payload[1] ? item.count = item.count + 1 : '')
    },
    totalPriceCountMinus(
      state: ProductState,
      action: PayloadAction<[number, number]>,
    ) {
      state.totalPrice = state.totalPrice - action.payload[0]
      state.productVariations.forEach(item => item.id === action.payload[1] ? item.count = item.count - 1 : '')
    },
    allProductsRemove(
      state: ProductState,
      action: PayloadAction,
    ) {
      state.productVariations = []
      state.products = 0
      state.totalPrice = 0
    },
    id(
      state: ProductState,
      action: PayloadAction<number>,
    ) {
      state.id = action.payload
    },
    addIncart(
      state: ProductState,
      action: PayloadAction<{ id: number, inCart: boolean }>,
    ) {
      debugger
      state.productVariations.forEach(item => item.id === action.payload.id ? item.inCart = action.payload.inCart : '')
    },
  },
})

export default cartSlice.reducer
