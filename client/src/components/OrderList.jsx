import { useState } from "react"
import "../styles/OrderStyle.css"


export default function OrderList() 
{
    const [orderItems,  SetOrder,] = useState([]);

    const [orderDescriptions,  SetDescription,] = useState([]);


    const [orderPrice, SetPrice,] = useState([]);
     
    // const [totalPrice, SetTotalPrice] = useState(0.0); commented out for not caused to many problems can re-add if need the variable

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
    // Adds the item a descriptions and price to respective lists and totals the order
    function AddToOrder()
    {
        
        
            SetPrice([...orderPrice, 5.25])

            SetOrder([...orderItems, foodItem])

            
            SetDescription([...orderDescriptions,'Peperoni'])
          
            
          //SetTotalPrice(orderPrice.reduce((sum, orderPrice) => sum + orderPrice)) Idk why but doesn't add the first order you put in. 
                                                                        //Ok is a side note but for some reason when this runs it is running on a version of order price without the most recent added price. Cause if you run it again it will add it up properly.

         console.log(orderPrice, orderItems)
            SetFoodItem("")

        
    }

    

    //Used for testing inputs for orderItem
    function NewItemInputHandeler(event)
    {
        SetFoodItem(event.target.value)
    }


    return(

        <div className="order-page " >

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
                                <input className="order-inputs" type="text" value = {zip} onChange={(e) => SetZip(e.target.value)}/>

                        

                            </div>
                        )}
                        <div className="order-userData-position">
                                <h4>Addtional Info</h4>
                                <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
                        </div>
                           

                        <button className="checkout-btn"> Check Out</button>
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
                            <li key={index}> {orderItems}...................$<span className="order-price">{orderPrice[index]} </span>    <button onClick={()=> DeleteOrderEntry(index)} > x</button>
                
                                <br />
                            
                                  {orderDescriptions[index]}
                                
                            
                            </li>
                        ))}
                
                        Total Price:  {orderPrice.reduce((sum, orderPrice) => sum + orderPrice)} 
                        {console.log(orderDescriptions)}
                      
                    
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