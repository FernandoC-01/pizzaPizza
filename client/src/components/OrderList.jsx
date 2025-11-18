import { useState } from "react"
import "../styles/OrderStyle.css"


export default function OrderList() 
{
    const [orderItems,  SetOrder,] = useState([]);

    const [orderPrice, SetPrice,] = useState([0.0]);
     
    const [totalPrice, SetTotalPrice] = useState(0.0);

    const [foodItem, SetFoodItem] = useState('');

    const [deliveryOrPickup, SetDelveryOrPickup] = useState(false);


    const [addiontalInfo, SetAdditionalInfo] = useState('');
    const [streetAdress, SetStreetAdress] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');


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

      function HandleAdditionalInfo(event)
    {
        SetAdditionalInfo(event.target.value)
    }
      function HandleStreetAdress(event)
    {
        SetCity(event.target.value)
    }
        function HandleCity(event)
    {
        SetAdditionalInfo(event.target.value)
    }
      function HandleState(event)
    {
        SetState(event.target.value)
    }
        function HandleZip(event)
    {
        SetZip(event.target.value)
    }




    return(
        <div className="orderPage">
            <h2>Your Order</h2>

            <input type="text" value = {foodItem} onChange = {NewItemInputHandeler}/>

            <p>Value: {foodItem}</p>

            <ul>
                {orderItems.map((orderItems, index) => (
                    <li key={index}> {orderItems}...................${orderPrice[index]} </li>
                ) )}
                Total Price:  {totalPrice} 
             
            </ul>
            {/* Temp button to test lists */}
            <button onClick={AddToOrder} >  Order?</button>

            
               
            <button onClick={ChangeOption}> Delivery Or Pickup </button>
                
    

            
      {/*Shows Delivery Options When deliveryOrPickup is false and Pickup when it is true*/}
      
      {deliveryOrPickup && (
            <div>
                 <h4>Addtional Info</h4>
                <input type="text" value = {addiontalInfo} onChange={HandleAdditionalInfo}/>
            </div>
        )}

        {!deliveryOrPickup && (
            <div>
                <h4>Street Address</h4>
                <input type="text" value = {streetAdress} onChange={HandleStreetAdress}/>

                <h4>City</h4>
                <input type="text" value = {city} onChange={HandleCity}/>

                <h4>State</h4>
                <input type="text" value = {state} onChange={HandleState}/>

                <h4>ZIP</h4>
                <input type="text" value = {zip} onChange={HandleZip}/>

                <h4>Addtional Info</h4>
                <input type="text" value = {addiontalInfo} onChange={HandleAdditionalInfo}/>
            </div>
        )}

 


                
        </div>


    )



}