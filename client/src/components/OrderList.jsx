import { useState } from "react"


export default function OrderList() 
{
    const [orderItems, setOrder,] = useState([])
    
    function addToOrder()
    {
        setOrder([...orderItems, "MorePizza"])
    }


    return(
        <div>
            <h2>Your Order</h2>

            <ul>
                {orderItems.map((orderItems, index) => (
                    <li key={index}> {orderItems} </li>
                ) )}
            </ul>

            <button onClick={addToOrder}>  Order?</button>

        </div>


    )



}