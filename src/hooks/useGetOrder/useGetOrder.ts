import { OrderType } from './../../store/reducers/OrderSlice';
import { useAppSelector } from 'hooks/redux';
import { IFormInputs } from 'pages/delivery/Delivery';
import { useState, useEffect } from 'react';
import { getCartTotalPriceDiscount, getProductsCount } from 'store/selectors/selectors';
import { v1 } from 'uuid';

export const useGetOrders = (formData: IFormInputs) => {

    return {};
}
