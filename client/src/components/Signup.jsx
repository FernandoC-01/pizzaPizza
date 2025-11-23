import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/auth.css"
import Header from "./Header"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState ("")
    const [password, setPassword] = useState ("")
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    const handleSignup = (e) => {

        e.preventDefault() //stops reloading of page

        const phoneDigits = phoneNum.replace(/\D/g, "")

        //make sure phone number is 10 digits
        if (phoneDigits.length !== 10){
            setMessage("Phone number must be 10 digits.")
            setMessageType("error")
            return
        }

        //gets existing users, converts string into JS array or empty array if null
        const users = JSON.parse(localStorage.getItem("users")) || []

        //checks if user in array has existing email
        const exists = users.some((u) => u.email === email || u.phoneNum === phoneNum)

        if (exists) {
            setMessage("Account already exists with this email or phone number.")
            setMessageType("error")
            return
        }

        const newUser = { email, phoneNum, password } //create new user
        users.push(newUser) //add user to array
        localStorage.setItem("users", JSON.stringify(users)) //convert array to string to save
        setMessage("Signup was a success. You can now log in.")
        setMessageType("success")

        //Navigate to login after successful signup (after 1.5 sec)
        setTimeout(() => {
            navigate("/login")
        }, 1500)
    }

    const handlePhoneChange = (e) => {
        let num = e.target.value

        num = num.replace(/\D/g, "") //replaces every (g) non-digit (\D) with nothing ("")
        
        //setup format for phone number
        if (num.length <= 3){
            num = num.replace(/(\d{1,3})/, "($1)") //format for 1-3 digits
        } else if (num.length <= 6) {
            num = num.replace(/(\d{1,3})(\d{1,3})/, "($1)-$2") //format for 4-6 digits 
        } else {
            num = num.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/, "($1)-$2-$3") //format for 7-10 digits
        }

        setPhoneNum(num)
            
    }


    return (
        <>
        <Header />
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
                            onChange={handlePhoneChange}
                            maxLength="14"
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
                    Already have an account? <Link to="/login">Login</Link>
                </p>

                <p className="auth-footer">
                    <Link to="/">Return to Homepage</Link>
                </p>

                {message &&(
                    <div className={`auth-message ${messageType}`}>
                        {message}
                    </div>
                )}

            </div>
        </div>
        </>
    )
}

export default Signup