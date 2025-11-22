import './App.css'
import './styles/auth.css'
import './styles/Header.css'
import Menu from './Components/Menu/Menu'
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Checkout from './Components/Checkout.jsx'
import { Check } from '@mui/icons-material'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/m" element={<Menu />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    
  )
}

export default App
