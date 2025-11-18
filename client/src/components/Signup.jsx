import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/auth.css"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState ("")
    const [password, setPassword] = useState ("")
    const navigate = useNavigate()

    const handleSignup = (e) => {

        e.preventDefault() //stops reloading of page

        //gets existing users, converts string into JS array or empty array if null
        const users = JSON.parse(localStorage.getItem("users")) || []

        //checks if user in array has existing email
        const exists = users.some((u) => u.email === email || u.phoneNum === phoneNum)

        if (exists) {
            alert("Account already exists with this email or phone number.")
            return
        }

        const newUser = { email, phoneNum, password } //create new user
        users.push(newUser) //add user to array
        localStorage.setItem("users", JSON.stringify(users)) //convert array to string to save
        alert("Signup was a success. You can now log in.")
        navigate("/") //navigates user to login if signup success
    }


    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1 className="auth-title">Signup</h1>

                <form className="auth-form" onSubmit={handleSignup}>

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
                        <label>Phone Number:</label>
                        <input
                            type="phoneNum"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
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

                    <button className="auth-btn" type="submit">Create Account</button>
        
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/">Login</Link>
                </p>

            </div>
        </div>
    )
}

export default Signup