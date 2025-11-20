import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <div> 
        <nav style={{ padding: '20px', background: '#f0f0f0' }}> 
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
          <Link to="/payment">Payment</Link>
        </nav>
        {/*Route Definitions*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Mom's and Pop's Pizzeria!</h1>
      <p>Click "Payment" in the nav to test payment page</p>
    </div>
  );
}

export default App
