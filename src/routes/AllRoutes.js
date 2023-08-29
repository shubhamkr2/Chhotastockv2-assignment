import React from 'react'
import { Route, Routes } from "react-router-dom";
import AfterLoginLandingPage from '../pages/AfterLoginLandingPage';
import WithoutLoginLandingPage from '../pages/WithoutLoginLandingPage';

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<WithoutLoginLandingPage />} exact />
        <Route path="/home" element={<AfterLoginLandingPage />} exact />
    </Routes>
  )
}

export default AllRoutes