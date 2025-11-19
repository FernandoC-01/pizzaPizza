import { useState } from "react"
import "../styles/OrderStyle.css"


export default function OrderList() 
{
    const [orderItems,  SetOrder,] = useState([]);

    const [orderPrice, SetPrice,] = useState([]);
     
    const [totalPrice, SetTotalPrice] = useState();

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

        <div className="order-page ">

            <div className="order-title">Your Order</div>
                 
            <div className="order-input-card">
                {/*Shows Delivery Options When deliveryOrPickup is false and Pickup options when it is true*/}
                <button className="deilveryOrPickup-btn" onClick={ChangeOption}> Delivery Or Pickup </button>

                {deliveryOrPickup && ( // Pickup options
                    <div className="order-inputs" >
                        <h4>Addtional Info</h4>
                        <input type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>
                    </div>
                )}

                {!deliveryOrPickup && ( //Delivery Options
                    <div className="order-inputs" > 
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

                        {/* <button className="checkout-btn"> Check Out</button> */}
                    </div>
                )}

                
                <button className="checkout-btn"> Check Out</button>

            </div>



                
            
            <div className="order-list" >
                
                
                {/* Temp text to allow food items to be added */}
                <input type="text" value = {foodItem} onChange = {NewItemInputHandeler}/> 
        
                <p>Value: {foodItem}</p>
    
                {/* Temp button to test lists */}
                <button className=" order-btn" onClick={AddToOrder} >  Order?</button>        

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
                <button className=" order-btn" > Menu </button>
                
          </div>
      


            
 
        </div>


    )



}