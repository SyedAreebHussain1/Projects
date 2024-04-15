"use client";
import React, { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import "./style.css";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  // mongoose version ^8.2.0
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurent Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <button className="button-login" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have account? SignUp"
            : "Already have Account? Login"}
        </button>
      </div>
      <Footer />
    </>
  );
};
export default Restaurent;
