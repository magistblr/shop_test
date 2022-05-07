import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { BadRequest } from '../pages/404/404';
import { Cart } from '../pages/cart/Cart';
import { Categories } from '../pages/categories/Categories';
import { Delivery } from '../pages/delivery/Delivery';
import { Orders } from '../pages/orders/Orders';

const RoutesList: React.FC = () => (
  <Routes>
    <Route path="/" element={<Categories />} />
    <Route path="cart" element={<Cart />} />
    <Route path="delivery" element={<Delivery />} />
    <Route path="orders" element={<Orders />} />
    <Route path="*" element={<BadRequest />} />
  </Routes>
);

export default RoutesList;
