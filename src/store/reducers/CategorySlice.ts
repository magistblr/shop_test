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
  checkedGlobal: boolean,
  id: number,
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: '',
  minRange: 0,
  maxRange: 24,
  sort: false,
  checkedGlobal: false,
  id: 0,
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
    categoriesChecked(state, action: PayloadAction<boolean>) {
      state.checkedGlobal = action.payload;
    },
    categoriesId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default categorySlice.reducer;
