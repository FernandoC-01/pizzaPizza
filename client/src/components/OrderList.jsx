import { useState } from "react"
import "../styles/OrderStyle.css"


export default function OrderList() 
{
    const [orderItems,  SetOrder,] = useState([]);

    const [orderPrice, SetPrice,] = useState([]);
     
    const [totalPrice, SetTotalPrice] = useState(0.0);

    const [foodItem, SetFoodItem] = useState('');

    const [deliveryOrPickup, SetDelveryOrPickup] = useState(false);


    const [addiontalInfo, SetAdditionalInfo] = useState('');
    const [streetAdress, SetStreetAdress] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');

    // const hasOrder = ((orderItems)==null);

    const ChangeOption = () => {
        SetDelveryOrPickup(!deliveryOrPickup)
    }


    // Needs to add a way to receive inputs from menu, and needs to remove the input.
    // Adds the item and price to respective lists and totals the order
    function AddToOrder()
    {
        if (foodItem)//first item dosen't seem to be detected and idk why
        {
            SetPrice([...orderPrice, 5.25])

            SetOrder([...orderItems, foodItem])

            SetTotalPrice(orderPrice.reduce((sum, orderPrice) => sum + orderPrice))//Idk why but doesn't add the first order you put in.

            SetFoodItem("")
        }
           
      
        
    }

    //Used for testing inputs for orderItem
    function NewItemInputHandeler(event)
    {
        SetFoodItem(event.target.value)
    }


    return(

        <div className="orderPage">

            <h2>Your Order</h2>
              {/* Temp text to allow food items to be added */}
            <input type="text" value = {foodItem} onChange = {NewItemInputHandeler}/> 
      
            <p>Value: {foodItem}</p>
  
            {/* Temp button to test lists */}
            <button onClick={AddToOrder} >  Order?</button>            
            {orderItems.length > 0 && (
                <div>
                    <ul>
                    {orderItems.map((orderItems, index) => (
                        <li key={index}> {orderItems}...................${orderPrice[index]} </li>
                    ))}
                    Total Price:  {totalPrice} 
                
                    </ul>
                </div>
            )}

            {orderItems.length == 0  && (
                <div>
                    <ul>
                        Looking empty


                        Fill it with items from our delicious
                    </ul>

                </div>
            )}
             <button> Menu </button>
               
            <button onClick={ChangeOption}> Delivery Or Pickup </button>
      


            
      {/*Shows Delivery Options When deliveryOrPickup is false and Pickup when it is true*/}
      
      {deliveryOrPickup && (
            <div>
                 <h4>Addtional Info</h4>
                <input type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>
            </div>
        )}

        {!deliveryOrPickup && (
            <div>

                     {/* <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /> */}
                <h4>Street Address</h4>
                
                <input type="text" value = {streetAdress} onChange={(e) => SetStreetAdress(e.target.value)}/>

                <h4>City</h4>
                <input type="text" value = {city} onChange={(e) => SetCity(e.target.value)}/>

                <h4>State</h4>
                <input type="text" value = {state} onChange={(e) => SetState(e.target.value)}/>

                <h4>ZIP</h4>
                <input type="text" value = {zip} onChange={(e) => SetZip(e.target.value)}/>

                <h4>Addtional Info</h4>
                <input type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>
            </div>
        )}

        </div>


    )



}