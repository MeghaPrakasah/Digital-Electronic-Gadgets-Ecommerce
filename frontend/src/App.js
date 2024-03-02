import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

//h H
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='store' element={<OurStore />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='forgot-password' element={<ForgotPassword />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
          <Route path='reset-password' element={<ResetPassword />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
