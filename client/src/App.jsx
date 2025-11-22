import PizzaHome from "./PizzaHome.jsx";
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

//Fix navigation routes. Homepage should be before login/signup.
function App() {

  return (
    <Routes>
      <Route path="/home" element={<PizzaHome />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    
  )
}

export default App;
