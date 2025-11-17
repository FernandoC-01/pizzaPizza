import { useState } from "react"


export default function OrderList() 
{
    const [orderItems, setOrder,] = useState([])

    const [foodItem, SetFoodItem] = useState('')
    
    function AddToOrder()
    {
        if (foodItem)
        {
            setOrder([...orderItems, foodItem])
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
                    <li key={index}> {orderItems} </li>
                ) )}
            </ul>

            <button onClick={AddToOrder}>  Order?</button>

        </div>


    )



}