import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CRouter from './pages/client/CRouter';
import AthRouter from './pages/auth/AthRouter';
import ARouter from './pages/admin/ARouter';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/*' element={<CRouter />} />
        <Route path='/auth/*' element={<AthRouter />} />
        <Route path='/admin/*' element={<ARouter />} />
      </Routes>
    </Router>
  )
}

export default App
