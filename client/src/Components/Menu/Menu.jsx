import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';







export default function Menu() {
    
    
    return (
        <div>
            <div className='header'>
                <h1>Mom and Pop's Pizzeria</h1>
            </div>
            <div className='menuContainer'>
                <h2>BUILD YOUR ORDER</h2>
                <div className='menu'>
                    <div>hello</div>
                    <div>hello</div>
                    <div>
                    <Fab className="add"> 
                    <AddIcon />
                    </Fab>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <div>Order Total: </div>
                <Button variant="contained">Hello world</Button>
                <button>add to cart</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}
