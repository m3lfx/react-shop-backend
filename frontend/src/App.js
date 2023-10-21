import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home';
import ProductDetails from "./Components/Product/ProductDetails";
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import Profile from './Components/User/Profile';
import UpdateProfile from './Components/User/UpdateProfile';
import { getUser } from './utils/helpers';
import UpdatePassword from './Components/User/UpdatePassword';
import ForgotPassword from './Components/User/ForgotPassword';
import NewPassword from './Components/User/NewPassword';


function App() {
  return (

    <div className="App">
      <Router>
      {getUser() ? <Header isAuth={true} /> :  <Header  />}
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          <Route path="/search/:keyword" element={<Home />} exact="true" />

          <Route path="/login" element={<Login />} exact="true"/>
          <Route path="/register" element={<Register  exact="true"/>} />
          <Route path="/me" element={<Profile />} exact="true" />
          <Route path="/me/update"
            element={<UpdateProfile />
            }
            exact="true"
          />
          <Route path="/password/update" element={<UpdatePassword />}  />
          <Route path="/password/forgot" element={<ForgotPassword />} exact="true" />
          <Route path="/password/reset/:token" element={<NewPassword />} exact="true" />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
