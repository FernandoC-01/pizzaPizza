import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmation from './pages/OrderConfirmation';
import './App.css'
import OrderList from './components/OrderList';

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', backgroundColor: '#B8651B'}}>
        <nav style={{ padding: '20px', background: '#8B4513', color: 'white' }}> 
          <Link to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/payment" style={{ color: 'white', textDecoration: 'none' }}>Payment</Link>
        </nav>
        {/*Route Definitions*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<OrderList />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-summary" element={<OrderConfirmation /> } />
        </Routes>
      </div>  

    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
      <h1>Welcome to Mom's and Pop's Pizzeria!</h1>
      <p>Click "Payment" in the nav to test payment page</p>
    </div>
  );
}



export default App
