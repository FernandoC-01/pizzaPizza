import PizzaHome from "./components/PizzaHome.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Header from "./components/Header.jsx";

// Add default logins
const defaultUsers = [
  { email: "test@example.com", phone: "(123)-456-7890", password: "password123" },
  { email: "user67@pizza.com", phone: "(777)-333-7777", password: "ILovepizza!" }
];

// Set users to default logins so they can log in
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}

function App() {
  return (
    <>
      <Header /> 

      <Routes>
        <Route path="/" element={<PizzaHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
