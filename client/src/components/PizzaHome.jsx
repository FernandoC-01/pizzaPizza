import React from "react";
import "../styles/PizzaHome.css"; // styling for this page

function PizzaHome() {
  const infoText = `Mom's and Pop's Pizzeria
Contact Info:
680 Arnston Rd, suite 161
Marietta, GA 30060
770-555-1212
MomAndPopPizzeria.com

Operating hours:
Mon–Thur: 9am–11pm
Fri–Sat: 11am–12am`;

  return (
    <main className="main-area">
      {/* left: info card only */}
      <section className="left-side">
        <div className="info-card">
          <pre className="info-text">{infoText}</pre>
        </div>
      </section>

      {/* right: LOGIN + SIGN UP only */}
      <section className="right-side">
        <div className="sign-card">
          <span>LOGIN</span>
        </div>

        <div className="sign-card">
          <span>SIGN UP</span>
        </div>
      </section>
    </main>
  );
}

export default PizzaHome;
