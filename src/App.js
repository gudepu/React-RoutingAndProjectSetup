import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import HomePage from "./Pages/HomePage";
import Contactus from "./Pages/Contactus";
import LoginPage from './Pages/LoginPage';
import { useAuth } from './Authentication';

export default function App() {
  const { isLogin, token } = useAuth();

  console.log(isLogin, token, "test Cases")
  const renderComponents = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contactus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <>
      {(isLogin && token) ? renderComponents():<LoginPage/>}
      
    </>

  );
}