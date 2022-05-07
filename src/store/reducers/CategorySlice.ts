/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory } from 'models/ICategory';

interface CategoryState {
  categories: ICategory[];
  isLoading: boolean;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: '',
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
  },
});

export default categorySlice.reducer;
