import { useState } from "react"


export default function OrderList() 
{
    const [orderItems,  SetOrder,] = useState([])

    const [orderPrice, SetPrice,] = useState([])
     
    const [totalPrice, SetTotalPrice] = useState(0.0)

    const [foodItem, SetFoodItem] = useState('')

    // Needs to add a way to receive inputs from menu, and needs to remove the input.
    // Adds the item and price to respective lists and totals the order
    function AddToOrder()
    {
        if (foodItem)
        {
            SetOrder([...orderItems, foodItem])

            SetPrice([...orderPrice, 5.25])

            SetTotalPrice(orderPrice.reduce((accumulator, orderPrice) => accumulator + orderPrice,0))

            SetFoodItem("")
        }
        
    }


    function NewItemInputHandeler(event)
    {
        SetFoodItem(event.target.value)
    }


    return(
        <div>
            <h2>Your Order</h2>

            <input type="text" value = {foodItem} onChange = {NewItemInputHandeler}/>

            <p>Value: {foodItem}</p>

            <ul>
                {orderItems.map((orderItems, index) => (
                    <li key={index}> {orderItems}....................{orderPrice[index]} </li>
                ) )}
                Total Price:  {totalPrice} 
             
            </ul>

            <button onClick={AddToOrder} >  Order?</button>


               


        </div>


    )



}