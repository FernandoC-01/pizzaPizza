
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

    const [deliveryOrPickup, SetDelveryOrPickup] = useState(false);
    const [addiontalInfo, SetAdditionalInfo] = useState('');
    const [streetAdress, SetStreetAdress] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');

    const ChangeOption = () => { SetDelveryOrPickup(!deliveryOrPickup); };

    const ChangeDelivery = () => { SetDelveryOrPickup(false); };
    const ChangePickup = () => { SetDelveryOrPickup(true); };

    const handleCheckout = () => {
        const orderData = {
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.subTotal || 0), 0),
            deliveryOrPickup,
            address: {
                street: streetAdress,
                city,
                state,
                zip,
                addiontalInfo
            }
        };
        navigate('/payment', { state: { orderData } });
    };




    function DeleteOrderEntry(indexToRemove)
    {
        const newOrderItems = orderItems.filter((item,index) => index !== indexToRemove);

        SetOrder(newOrderItems)


        const newOrderPrices = orderPrice.filter((price,index) => index !== indexToRemove);

        SetPrice(newOrderPrices)

        const newOrderDescriptions = orderDescriptions.filter((description,index) => index !== indexToRemove);

        SetDescription(newOrderDescriptions)

    }


    // Needs to add a way to receive inputs from menu, and needs to remove the input fucntion I have now.
    // Adds the item a descriptions and price to respective lists 
    function AddToOrder()
    {
        
        
            SetPrice([...orderPrice, 5.25])

            SetOrder([...orderItems, foodItem])

            
            SetDescription([...orderDescriptions,'Peperoni'])


            //Temp used to reset test inputs
            SetFoodItem("")

        
    }


    const HandleZip = (e) => {
        const inputValue = e.target.value;
        const numericRegex = /^[0-9]*$/;
        if (inputValue === '' || numericRegex.test(inputValue)) {
            SetZip(inputValue);
            }
            else{
                alert("ZIP only accepts numbers")
            }
        };

    

    //Temp Used for testing inputs for orderItem
    function NewItemInputHandeler(event)
    {
        SetFoodItem(event.target.value)
    }


    return(
        

        <div className="body" >

            <Header></Header>  
            <div className="order-title"> Your Order</div>
            <div className="card-container">
                <div className="order-input-card">
                    {/*Shows Delivery Options When deliveryOrPickup is false and Pickup options when it is true*/}
                    <button className="deilveryOrPickup-btn" onClick={ChangeDelivery}> Delivery </button>
                    <button className="deilveryOrPickup-btn" onClick={ChangePickup}>  Pickup </button>
                        {!deliveryOrPickup && (
                            <div className="order-userData-position"> 
                                <h4>Street Address</h4>
                                
                                <input className="order-inputs" type="text" value = {streetAdress} onChange={(e) => SetStreetAdress(e.target.value)}/>

                                <h4>City</h4>
                                <input className="order-inputs" type="text" value = {city} onChange={(e) => SetCity(e.target.value)}/>

                                <h4>State</h4>
                                <input className="order-inputs" type="text" value = {state} onChange={(e) => SetState(e.target.value)}/>

                                <h4>ZIP</h4>
                                 <input className="order-inputs" type="text" value = {zip} onChange={HandleZip}/>

                                <h4>Addtional Info</h4>
                                <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
        

                            </div>
                        )}
                              {deliveryOrPickup && (
                            <div className="order-userData-position"> 
                                <h4>Addtional Info</h4>
                                <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
        

                            </div>
                        )}

                </div>

                
                         <button className="checkout-btn" onClick={handleCheckout} >
                             Check Out
                             </button>
                <div className="order-list-card">
                    {cart.length > 0 ? (
                        <div>
                            <ul>
                                {cart.map((item, index) => (                                    
                                    <li key={index}>
                                        {item.timestamp ? `Order #${item.timestamp}` : 'Order'} - ${item.subTotal || 0}
                                        <br />
                                        {item.selections && Object.entries(item.selections).map(([key, value]) => value && (
                                            <span key={key}>{key}: {value} </span>
                                        ))}
                                        {item.quantities && Object.entries(item.quantities).map(([key, value]) => (
                                            <span key={key}>{key}: {value} </span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                Total Price: {cart.reduce((sum, item) => sum + (item.subTotal || 0), 0)}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                Looking empty!
                                <br />
                                Fill it with items from our delicious menu!
                            </ul>
                        </div>
                    )}
                    <button className="order-btn" onClick={()=> navigate('/menu')} > Menu </button>
                </div>
            </div>
        </div>
    );
}