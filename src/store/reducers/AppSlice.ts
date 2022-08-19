/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  globalShadow: boolean;
}

const initialState: AppState = {
  globalShadow: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    globalShadowChange(state: AppState) {
      state.globalShadow = true;
    },
  },
});

export default appSlice.reducer;
