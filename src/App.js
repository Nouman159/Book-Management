import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Screens/Home/Home";
import Layout from "./Layout/Layout";
import Register from './Screens/Register/Register'
import Login from "./Screens/Login/Login";

function App() {
  return (
    <BrowserRouter>
     <Routes >
    <Route path="/register" element={<Register />}  /> 
    <Route path="/login" element={<Login />}  /> 

    </Routes>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          


        </Routes>
      </Layout>




    </BrowserRouter >
  );
}

export default App;
