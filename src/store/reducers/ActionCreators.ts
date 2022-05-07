import { AppDispatch } from '../store';

import { categorySlice } from './CategorySlice';

import { categoriesAPI } from 'api/categoriesAPI';

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(categorySlice.actions.categoriesFetching());
    const response = await categoriesAPI.getCategories();
    dispatch(categorySlice.actions.categoriesFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(categorySlice.actions.categoriesFetchingError(e.message));
  }
};
