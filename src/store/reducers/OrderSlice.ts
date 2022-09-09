/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
  orders: OrderType[] | undefined;
}

export type OrderType = {
  phone: number
  address: string
  nameUser: string
  date: string
  numberOrders: number
  totalprice: number
  id: string
}



const initialState: OrderState = {
  orders: []
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    ordersAdd(state: OrderState, action: PayloadAction<OrderType>) {
      state.orders?.push(action.payload)
    },
  },
});

export default orderSlice.reducer;
