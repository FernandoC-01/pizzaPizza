import React from "react";
import "./PizzaHome.css"; // styling for this page

function PizzaHome() {
  const infoText = `Pizza Pizza
OPERATING HOURS
MONDAY - SUNDAY
9AM TO 11PM

CONTACT US
EMAIL: INFO@PIZZAPIZZA.COM
NUMBER: 123-456-7890`;

  return (
    <div className="pizza-app-root">
      {/* top bar */}
      <header className="top-bar">
        {/* logo placeholder (left) */}
        <div className="logo-box">
          <span>Pizza²</span>
        </div>

        {/* banner placeholder (center) */}
        <div className="banner-box">
          <h1>Pizza Pizza</h1>
        </div>

        {/* cart button (right) */}
        <button className="cart-button">Cart</button>
      </header>

      {/* main area */}
      <main className="main-area">
        {/* left side content */}
        <section className="left-side">
          {/* menu sign */}
          <div className="menu-sign">
            <span>MENU</span>
          </div>

          {/* info card */}
          <div className="info-card">
            <pre className="info-text">{infoText}</pre>
          </div>
        </section>

        {/* rigth side content */}
        <section className="right-side">
          <div className="sign-card">
            <span>ORDER</span>
          </div>

          <div className="sign-card">
            <span>ACCOUNT</span>
          </div>

          <div className="sign-card">
            <span>SIGN IN / SIGN UP</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PizzaHome;
