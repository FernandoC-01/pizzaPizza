import "../styles/Header.css"
import {AppBar} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/pizzaPizzaLogo.jpg"

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
        </AppBar>

    )

}

export default Header