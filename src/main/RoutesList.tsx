import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { BadRequest } from '../pages/404/404';
import { Categories } from '../pages/categories/Categories';


const RoutesList = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Categories/>}/>
            <Route path='*' element={<BadRequest/>}/>
        </Routes>
    )
}

export default RoutesList;