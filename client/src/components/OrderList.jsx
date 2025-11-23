
import React, { useContext, useState } from "react";
import "../styles/OrderStyle.css";
import Header from "./Header";
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from "./Menu/CartContext";




export default function OrderList() {
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);

    const location = useLocation();

    const {order,total} = location.state || {order: [], total: 0};

    



    const handleCheckout = () => {
        const orderData = {
            items: cart,
            total: order.total,

        };
         navigate('/payment', { state: { orderData } });
        // navigate('/payment', { state: { orderData } });
    };



    function handleEditOrder() 
    {
       navigate('/menu', { state: { order,total } });

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
                        <p><strong>Size:</strong> {order.size}</p>
                        <p><strong>Crust:</strong> {order.crust}</p>
                        <p><strong>Sauce:</strong> {order.sauce}</p>
                        <p><strong>Drinks:</strong> {order.qty}</p>

                        {order.toppings?.length > 0 && (
                            <>
                            <strong>Toppings:</strong>
                            <ul>
                                {order.toppings.map((t) => (
                                <li key={t}>{t}</li>
                                ))}
                            </ul>
                            </>
                        )}

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