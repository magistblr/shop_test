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
  id: number
  name: string
  price: number
  stock: number
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
      action: PayloadAction<[IProductVariations, number]>,
    ) {
      state.productVariations.filter(item => item.id !== action.payload[1])
    },
    allProductsRemove(
      state: ProductState,
      action: PayloadAction,
    ) {
      state.productVariations = []
    },
    id(
      state: ProductState,
      action: PayloadAction<number>,
    ) {
      state.id = action.payload
    },
  },
})

export default cartSlice.reducer
