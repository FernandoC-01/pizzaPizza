import PizzaHome from "./components/PizzaHome.jsx";
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

//Fix navigation routes. Homepage should be before login/signup.
function App() {

  return (
    <Routes>
      <Route path="/" element={<PizzaHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    
  )
}

export default App;
