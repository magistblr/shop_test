/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory } from 'models/ICategory';

interface CategoryState {
  categories: ICategory[] | undefined;
  isLoading: boolean;
  error: string;
  minRange: number,
  maxRange: number,
  sort: boolean,
  checked: boolean,
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: '',
  minRange: 0,
  maxRange: 24,
  sort: false,
  checked: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesFetching(state) {
      state.isLoading = true;
    },
    categoriesFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
      state.isLoading = false;
      state.error = '';
      state.categories = action.payload;
    },
    categoriesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    categoriesMin(state, action: PayloadAction<number>) {
      state.minRange = action.payload;
    },
    categoriesMax(state, action: PayloadAction<number>) {
      state.maxRange = action.payload;
    },
    categoriesSort(state, action: PayloadAction<boolean>) {
      state.sort = action.payload;
    },
  },
});

export default categorySlice.reducer;
