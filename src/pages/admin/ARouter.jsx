import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ALayout from './ALayout';
import Error from '../../components/Error';
import Dashboard from './Dashboard';
import Properties from './Properties';
import FormPropertie from './FormPropertie';
import Options from './Options';
import FormOption from './FormOption';

const ARouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Dashboard />} />
                <Route path='/properties' element={<Properties />} />
                <Route path={'/propertie/:id' ? '/propertie/:id' : '/propertie'} element={<FormPropertie />} />
                <Route path='/options' element={<Options />} />
                <Route path='/option' element={<FormOption />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    )
}

export default ARouter;
