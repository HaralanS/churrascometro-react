import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EditChurras from "../pages/EditarChurras";
import FormChurras from "../pages/FormChurras";


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createchurras" element={<FormChurras />} />
        <Route path="/editchurras" element={<EditChurras />} />
        </Routes>
    </BrowserRouter>
  )
}