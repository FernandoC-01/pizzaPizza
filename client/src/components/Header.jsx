import "../styles/Header.css"
import {AppBar} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/pizzaPizzaLogo.jpg"


import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import App from "../App";

const Header = () => {
    return (
        <AppBar>
        <header className="auth-header">
            <div className="auth-header-content">
            <img src={logo} alt="Pizza Logo" className="header-logo"/>
            <h1 className="header-title">Mom and Pop's Pizzeria</h1>
            <img src={logo} alt="Pizza Logo" className="header-logo"/>
            </div>
            
        </header>
         <nav style={{ padding: '15px' ,background: '#8B4513', color: 'white', }}> 
          <Link to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/menu" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Menu</Link>
          <Link to="/cart" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Shopping Cart</Link>
          <Link to="/payment" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Payment</Link>
          <Link to="/Login" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Login</Link>
        </nav>
        </AppBar>

    )

}

export default Header