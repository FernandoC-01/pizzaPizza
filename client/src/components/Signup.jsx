import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState ("")
    const [password, setPassword] = useState ("")

    const handleSignup = (e) => {

        e.preventDefault() //stops reloading of page

        //gets existing users, converts string into JS array or empty array if null
        const users = JSON.parse(localStorage.getItem("users")) || []

        //checks if user in array has existing email
        const exists = users.some((u) => u.email === email)

        if (exists) {
            alert("Email already exists.")
            return
        }

        const newUser = { email, phoneNum, password } //create new user
        users.push(newUser) //add user to array
        localStorage.setItem("users", JSON.stringify(users)) //convert array to string to save
        alert("Signup was a success. You can now log in.")
    }


    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={handleSignup}>
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
                    <label>Phone Number:</label>
                    <input
                        type="phoneNum"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
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

                <button type="submit">Create Account</button>
        
            </form>

            <p>
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    )
}

export default Signup