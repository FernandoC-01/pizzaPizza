import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/auth.css"
import Header from "./Header"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        //retrieves users
        const savedUsers = JSON.parse(localStorage.getItem("users")) || []

        //checks for matching users
        const found = savedUsers.find(
            (u) => u.email === email && u.password === password
        )

        if (found) {
            setMessage("Login successful!")
            setMessageType("success")

            //store logged in user for other pages to display
            localStorage.setItem("currentUser", JSON.stringify(found))

            //Navigate to menu after successful login (after 1 sec)
            setTimeout(() => {
                navigate("/menu")
            }, 1000)

        } else {
            setMessage("Invalid email or password")
            setMessageType("error")
        }
    }

    return (
        <>
        
        <Header />

        <div className="auth-page">

            <div className="auth-card">

                <h1 className="auth-title">Login</h1>

                <form className="auth-form" onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="auth-btn" type="submit">Login</button>

                </form>

                <p className="auth-footer">
                    Don't have an account yet? <Link to="/signup">Sign up</Link>
                </p>

                <p className="auth-footer">
                    <Link to="/home">Return to Homepage</Link>
                </p>

                {message && (
                    <div className={`auth-message ${messageType}`}>
                        {message}
                    </div>
                )}

            </div>
        </div>
        </>
    )
}

export default Login