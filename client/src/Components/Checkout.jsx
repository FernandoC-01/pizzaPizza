import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import Button from @mui/material";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { order, total } = location.state || {};

    function handleEditMenu() {
        
    navigate("/m", { state: { order, total } });
}

  if (!order) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No order found.</h2>
        <button onClick={() => navigate("/m")}>Return to Menu</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h2>Your Order</h2>

      <p><strong>Size:</strong> {order.size}</p>
      <p><strong>Crust:</strong> {order.crust}</p>
      <p><strong>Sauce:</strong> {order.sauce}</p>
      <p><strong>Sauce:</strong> {order.sauce}</p>

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

      <button onClick={handleEditMenu}>Edit Order</button>
    </div>
  );
}
