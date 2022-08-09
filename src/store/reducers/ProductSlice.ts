import { IProduct } from 'models/IProduct';
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProductState {
  products: IProduct[] | undefined;
  isLoading: boolean;
  error: string;
  minRangeProduct: number,
  maxRangeProduct: number,
  sort: boolean,
  checkedGlobal: boolean,
  id: number,
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
  minRangeProduct: 0,
  maxRangeProduct: 24,
  sort: false,
  checkedGlobal: false,
  id: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state: ProductState) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state: ProductState, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    },
    productsFetchingError(state: ProductState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    productsMin(state: ProductState, action: PayloadAction<number>) {
      state.minRangeProduct = action.payload;
    },
    productsMax(state: ProductState, action: PayloadAction<number>) {
      state.maxRangeProduct = action.payload;
    },
    productsSort(state: ProductState, action: PayloadAction<boolean>) {
      state.sort = action.payload;
    },
    productsChecked(state: ProductState, action: PayloadAction<boolean>) {
      state.checkedGlobal = action.payload;
    },
    productsId(state: ProductState, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default productSlice.reducer;