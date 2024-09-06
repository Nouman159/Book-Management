import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css';
import Home from "./Screens/Home/Home";
import Layout from "./Layout/Layout";
import Register from './Screens/Register/Register';
import Login from "./Screens/Login/Login";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
