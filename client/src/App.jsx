<<<<<<< HEAD
import PizzaHome from "./PizzaHome.jsx";

function App() {
  return (
    <PizzaHome />
  );
=======
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    
  )
>>>>>>> origin/Jarren
}

export default App;
