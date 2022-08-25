import { IProductVariations } from './../../models/IProductVariations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from 'models/IProduct'
/* eslint-disable no-param-reassign */
interface ProductState {
  productVariations: IProductVariations[]
}

const initialState: ProductState = {
  productVariations: [],
}
//TODO
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    productVariationsAdd(
      state: ProductState,
      action: PayloadAction<IProductVariations>,
    ) {
      state.productVariations = [...state.productVariations, action.payload]
    },
    productVariationsRemove(
      state: ProductState,
      action: PayloadAction<[IProductVariations, number]>,
    ) {
      state.productVariations.filter(item => item.id !== action.payload[1])
    },
  },
})

export default cartSlice.reducer
