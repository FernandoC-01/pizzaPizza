import './App.css'
import './Components/Menu/Menu.css'
import './styles/auth.css'
import './styles/Header.css'
import Menu from './Components/Menu/Menu'
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/m" element={<Menu />} />
      <Route path="/" element={<Signup />} />
    </Routes>
    
  )
}

export default App
