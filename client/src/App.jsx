import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import './App.css'
import './styles/auth.css'
import './styles/Header.css'
import Menu from './Components/Menu/Menu'
import { CartProvider } from './components/Menu/CartContext';
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import PaymentPage from './components/PaymentPage.jsx';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderList from './components/OrderList';


function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{minHeight: '100vh', backgroundColor: '#B8651B',}}>
          {/*Route Definitions*/}
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<OrderList />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmation /> } />
          </Routes>
        </div>  
      </Router>
    </CartProvider>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ 
      padding: '60px 20px', 
      textAlign: 'center', 
      color: 'white',
      minHeight: 'calc(100vh - 60px)' 
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Welcome to Mom's and Pop's Pizzeria!
      </h1>
      <p style={{ fontSize: '20px', marginBottom: '40px' }}>
        Click "Cart" to see the shopping cart or "Payment" to test the payment page
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/cart')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#8B4513',
            color: 'white',
            border: '2px solid #6B3410',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Go to Cart →
        </button>
        
        <button 
          onClick={() => navigate('/payment', {
            state: {
              cartData: {
                items: [
                  { name: 'Pepperoni Pizza (Large)', price: 15.99, quantity: 1 },
                  { name: 'Garlic Knots', price: 5.99, quantity: 2 },
                ],
                subtotal: 27.97,
                tax: 2.24,
                total: 30.21
              }
            }
          })}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#28a745',
            color: 'white',
            border: '2px solid #1e7e34',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Test Payment →
        </button>
      </div>
    </div>
  );
}



export default App
