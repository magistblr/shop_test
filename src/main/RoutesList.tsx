import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { BadRequest } from '../pages/404/404';
import { Cart } from '../pages/cart/Cart';
import { Categories } from '../pages/categories/Categories';


const RoutesList = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Categories/>}/>
            <Route path={'cart'} element={<Cart/>}/>
            <Route path='*' element={<BadRequest/>}/>
        </Routes>
    )
}

export default RoutesList;