
import React, { useContext, useState } from "react";
import "../styles/OrderStyle.css";
import Header from "./Header";
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from "../Components/Menu/CartContext.jsx";




export default function OrderList() {
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);

    const location = useLocation();

    const {order,total} = location.state || {order: [], total: 0};

    const {topping, quantities} = order;



    const handleCheckout = () => {
         navigate('/payment', { state: { order,total} });
    };



    function handleEditOrder() 
    {
       navigate('/menu', { state: { order,total } });

    } 


function renderCategory(items) {
  if (!items || Object.keys(items).length === 0) return null;

  return (
    <div style={{ marginBottom: "20px"  }}>

        {Object.entries(items).map(([name, qty]) =>
          qty > 0 ? (
            <p key={name}>
              <strong>{name.toUpperCase()}</strong> : {qty}
            </p>
          ) : null
        )}

    </div>
  );
}



    if (!order) 
    {
        return(
            <div className="body">
                <Header></Header>  
                <div> Your Order</div>
                <div className="card-container">
                    <div className="order-list-card">
                        <div>
                            <h2>Your Order</h2>
                            <ul>
                                Looking empty!
                                <br />
                                Fill it with items from our delicious menu!
                                <br />
                                <button className="order-btn" onClick={()=> navigate('/menu')} > Menu </button>
                            </ul>
                        </div>        
                    </div>
                </div>
            </div>
    );
    }
    return (
        <div className="body" >
             <Header></Header>  
            {/* <div className="order-title"> Your Order</div> */}
              <div className="card-container">
                <div className="order-list-card">
                    <div style={{ padding: "20px" }}>
                        <h2>Your Order</h2>
                        <br />
                        <p><strong>SIZE:</strong> {order.size}</p>
                        <p><strong>CRUST:</strong> {order.crust}</p>
                        <p><strong>SAUCE:</strong> {order.sauce}</p>
                        {topping && (<p><strong>Topping:</strong> {topping}</p>) }
                        {renderCategory(quantities)}
            

                  

                        {order.extras &&
                            Object.entries(order.extras).map(([item, qty]) =>
                            qty > 0 ? <p key={item}>{item} × {qty}</p> : null
                            )}

                        <h2>Total: ${total.toFixed(2)}</h2>

                        <button onClick={handleEditOrder}>Edit Order</button>

                        <button className="checkout-btn" onClick={handleCheckout}>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
            
            
        );
    
}