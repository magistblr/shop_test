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
  maxRange: 30,
  sort: false,
  checkedGlobal: false,
  id: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesFetching(state: CategoryState) {
      state.isLoading = true;
    },
    categoriesFetchingSuccess(state: CategoryState, action: PayloadAction<ICategory[]>) {
      state.isLoading = false;
      state.error = '';
      state.categories = action.payload;
    },
    categoriesFetchingError(state: CategoryState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    categoriesMin(state: CategoryState, action: PayloadAction<number>) {
      state.minRange = action.payload;
    },
    categoriesMax(state: CategoryState, action: PayloadAction<number>) {
      state.maxRange = action.payload;
    },
    categoriesSort(state: CategoryState, action: PayloadAction<boolean>) {
      state.sort = action.payload;
    },
    categoriesChecked(state: CategoryState, action: PayloadAction<boolean>) {
      state.checkedGlobal = action.payload;
    },
    categoriesId(state: CategoryState, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default categorySlice.reducer;
