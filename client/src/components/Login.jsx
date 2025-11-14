import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        //retrieves users
        const savedUsers = JSON.parse(localStorage.getItem("users")) || []

        //checks for matching users
        const found = savedUsers.find(
            (u) => u.email === email && u.password === password
        )

        if (found) {
            alert("Login successful!")
            navigate("/menu") //navigates to menu page after login
        } else {
            alert("Invalid email or password")
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>

            <p>
                Don't have an account yet?<Link to="/signup">Sign up</Link>
            </p>
        </div>
    )
}

export default Login