import "../styles/Header.css"
import logo from "../styles/assets/pizzaPizzaLogo.jpg"

const Header = () => {
    return (
        <header className="auth-header">
            <div className="auth-header-content">
                <img src={logo} alt="Pizza Logo" className="header-logo"/>
                <h1 className="header-title">Mom and Pop's Pizzeria</h1>
                <img src={logo} alt="Pizza Logo" className="header-logo"/>
            </div>
        </header>

    )

}

export default Header