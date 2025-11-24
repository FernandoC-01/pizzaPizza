import "../styles/Header.css"
import {AppBar} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/pizzaPizzaLogo.jpg"
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import App from "../App";
import { useState, useEffect } from "react";

const Header = () => {

    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false)
    const [logoutMessage, setLogoutMessage] = useState("")

    //retrieve logged in user
    useEffect(() => {
        const user = localStorage.getItem("currentUser")
        setLoggedIn(!!user);  //converts to true or false
    }, [])

    //add logout function
    const handleLogout = () => {

        //remove logged in user
        localStorage.removeItem("currentUser")
        setLogoutMessage("You have logged out successfully.")

        //navigates user to login page after 1.5 sec
        setTimeout(() => {
            navigate("/login")
        }, 1500)
    }

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
          <Link to="/Login" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/signup" style={{ marginRight: '20px',color: 'white', textDecoration: 'none' }}>Signup</Link>

          {loggedIn && (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            )}

        </nav>
        
        {logoutMessage && (
            <div className="logout-message">
            {logoutMessage}
            </div>
        )}

        </AppBar>
        

    )
    

}

export default Header