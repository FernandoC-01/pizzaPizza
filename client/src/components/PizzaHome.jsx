import React from "react";
import "../styles/PizzaHome.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import logo from "../assets/pizzaLogo2.png"

function PizzaHome() {
  const infoText = 
  `680 Arntson Rd, Suite 161
  Marietta, GA 30060
  770-555-1212
  MomAndPopPizzeria.com

  Operating Hours:
  Mon-Thu: 9am-11pm
  Fri-Sat: 11am-12am`

  return (
    <div className="pizza-app-root">
      <Header />

      <div className="home-container">

        <img
          src={logo}
          alt="Pizzeria Logo"
          className="home-logo"
        />

        <div className="info-text-large">{infoText}</div>

        <div className="home-buttons">
          <Link to="/login" className="home-button">LOGIN</Link>
          <Link to="/signup" className="home-button">SIGN UP</Link>
          <Link to="/menu" className="home-button">MENU</Link>
        </div>
      </div>
    </div>
  );
}

export default PizzaHome;