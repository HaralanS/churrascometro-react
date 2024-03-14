import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const EditChurras = lazy(() => import('../pages/EditarChurras'));
const FormChurras = lazy(() => import('../pages/FormChurras'));


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={
          <React.Suspense fallback={<div  className="m-auto mt-[100px] h-32 w-32 animate-spin rounded-full border-[8px] border-solid border-blue-600 border-e-transparent"
          role="status"></div>}>
            <Home />
          </React.Suspense>  
        } />
         <Route path="/createchurras" element={
          <React.Suspense fallback={<div  className="m-auto mt-[100px] h-32 w-32 animate-spin rounded-full border-[8px] border-solid border-blue-600 border-e-transparent"
          role="status"></div>}>
            <FormChurras />
          </React.Suspense>  
        } />
        <Route path="/editchurras" element={
          <React.Suspense fallback={<div  className="m-auto mt-[100px] h-32 w-32 animate-spin rounded-full border-[8px] border-solid border-blue-600 border-e-transparent"
          role="status"></div>}>
            <EditChurras />
          </React.Suspense>
        } />
        </Routes>
    </BrowserRouter>
  )
}