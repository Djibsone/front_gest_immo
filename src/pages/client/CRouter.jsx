import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CLayout from './CLayout';
import Home from './Home';
import Properties from './Properties';
import Error from '../../components/Error';
import Property from './Property';

const CRouter = () => {
    return (
        <Routes>
            <Route element={<CLayout />}>
                <Route index element={<Home />} />
                <Route path='/properties' element={<Properties />} />
                <Route path='/property' element={<Property />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    )
}

export default CRouter;
