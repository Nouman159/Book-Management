import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Screens/Home/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />


        </Routes>
      </Layout>




    </BrowserRouter >
  );
}

export default App;
