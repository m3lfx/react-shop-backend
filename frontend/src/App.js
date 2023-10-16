import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home';
import ProductDetails from "./Components/Product/ProductDetails";
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
