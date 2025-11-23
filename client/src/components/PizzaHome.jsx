// import React from "react";
// import "../styles/PizzaHome.css"; // styling for this page

// function PizzaHome() {

  
//   const infoText = `Mom's and Pop's Pizzeria Mom's and Pop's Pizzeria
// Contact Info:
// 680 Arnston Rd, suite 161
// Marietta, GA 30060
// 770-555-1212
// MomAndPopPizzeria.com

// Operating hours:
// Mon–Thur: 9am–11pm
// Fri–Sat: 11am–12am`;

//   return (
//     <main className="main-area">
//       {/* left: info card only */}
//       <section className="left-side">
//         <div className="info-card">
//           <pre className="info-text">{infoText}</pre>
//         </div>
//       </section>

//       {/* right: LOGIN + SIGN UP only */}
//       <section className="right-side">
//         <div className="sign-card">
//           <span>LOGIN</span>
//         </div>

//         <div className="sign-card">
//           <span>SIGN UP</span>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default PizzaHome;
import React from "react";
import "../styles/PizzaHome.css"; // styling for this page
import Header from "./Header"
import { Link } from "react-router-dom"

function PizzaHome() {
  const infoText = `

Contact Info:
680 Arntson Rd, suite 161
Marietta, ga 30060
770 555-1212
MomAndPopPizzeria.com

Operating hours:
Mon-Thur. 9am-11pm
Fri-Sat. 11am-12am`;

  return (
  

    <div className="pizza-app-root">
      {/* top bar */}<Header></Header>
      {/*<header className="top-bar">
         logo placeholder (left)
        <div className="logo-box">
          <span>Pizza²</span>
        </div> */}

        {/* banner placeholder (center)
        <div className="banner-box">
          <h1>Pizza Pizza</h1>
        </div> */}

        {/* cart button (right)
        <Link to="/cart">
          <button className="cart-button">Cart</button>
        </Link>
      </header> */}

      {/* main area */}
      <main className="main-area">
        {/* left side content */}
        <section className="left-side">
          {/* menu sign 
          <Link to="/menu" className="homeBtn">
            <div className="menu-sign">
              <span>MENU</span>
            </div>
          </Link> */}

          {/* info card */}
          <div className="info-card">
            <pre className="info-text">{infoText}</pre>
          </div>
        </section>

        {/* rigth side content */}
        <section className="right-side">
          {/* <Link to="/order" className="homeBtn">
            <div className="sign-card">
              <span>ORDER</span>
            </div>
          </Link>  */}

          <Link to="/login" className="homeBtn">
            <div className="sign-card">
              <span>LOGIN</span>
            </div>
          </Link>

          <Link to="/signup" className="homeBtn">
            <div className="sign-card">
              <span>SIGN UP</span>
            </div>
          </Link>

        </section>
      </main>
    </div>
  );
}

export default PizzaHome;