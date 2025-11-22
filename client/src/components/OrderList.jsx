import { useState } from "react"
import "../styles/OrderStyle.css"
import Header from "./Header"
import { useNavigate } from 'react-router-dom'; // Add this to 'connect' checkout button with payment page





export default function OrderList() 
{
    const navigate = useNavigate();

        // Prepare cart data in the format payment page expects

    const handleCheckout = () => {
        // Prepare order data to send to payment page
        const orderData = {
            items: orderItems.map((item, idx) => ({
                name: item,
                price: orderPrice[idx],
                description: orderDescriptions[idx],
            })),
            total: orderPrice.reduce((sum, price) => sum + price, 0),
            deliveryOrPickup,
            address: {
                street: streetAdress,
                city,
                state,
                zip,
                addiontalInfo
            }
        };
        // Navigate to the PaymentPage when checkout button is clicked
        navigate('/payment', { 
            state: { orderData }
        });
    };

    const [orderItems,  SetOrder,] = useState([]);
    const [orderDescriptions,  SetDescription,] = useState([]);
    const [orderPrice, SetPrice,] = useState([]);


    const [foodItem, SetFoodItem] = useState('');

    const [deliveryOrPickup, SetDelveryOrPickup] = useState(false);


    const [addiontalInfo, SetAdditionalInfo] = useState('');
    const [streetAdress, SetStreetAdress] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');


    const ChangeOption = () => {SetDelveryOrPickup(!deliveryOrPickup)}


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
            // Regular expression to allow only digits (0-9)
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
                    
                <div className="order-input-card">
                    {/*Shows Delivery Options When deliveryOrPickup is false and Pickup options when it is true*/}
                    <button className="deilveryOrPickup-btn" onClick={ChangeOption}> Delivery Or Pickup </button>

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

                        

                            </div>
                        )}

                        <div className="order-userData-position">
                                <h4>Addtional Info</h4>
                                <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
                        </div>
                        
                        {/* <button onClick={handleCheckout} >
                             Check Out 
                             </button> */}
                         <button className="checkout-btn" onClick={handleCheckout} >
                             Check Out
                             </button>
                </div>
         
            <div className="order-list" >
                
                
                {/* Temp text to allow food items to be added */}
                <input type="text" value = {foodItem} onChange = {NewItemInputHandeler}/> 
        

    
                {/* Temp button to test lists */}
                <button className=" order-btn" onClick={AddToOrder} >  Order?</button>        

                {orderItems.length > 0 && (//Shows the list of items in order
                    <div>
                        <ul>
                        {orderItems.map((orderItems, index) => (
                            <li key={index}> {orderItems}...................${orderPrice[index]}  <button onClick={()=> DeleteOrderEntry(index)} > x</button>
                
                                <br />
                            
                                  {orderDescriptions[index]}
                                
                            
                            </li>
                        ))}
                
                        Total Price:  {orderPrice.reduce((sum, orderPrice) => sum + orderPrice)} 
                      
                    
                        </ul>
                    </div>
                )}

                {orderItems.length == 0  && ( //shows default text when there is no items
                    <div>
                        <ul>
                            Looking empty!
                            <br />
                            Fill it with items from our delicious
                           
                        </ul>

                    </div>
                )}
                
                <button className=" order-btn" > Menu </button>
                
            </div>
      


            
 
        </div>


    )



}