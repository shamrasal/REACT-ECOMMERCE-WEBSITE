import React, { useContext } from 'react'
import CartContext from '../Store/Cart-Contex'
import classes from './Cartitem.module.css'

const CartItem = (props) => {
    const ctx = useContext(CartContext)

    const quantityChangeHandler = (event) => {
        event.preventDefault()
        console.log('update')
        // const quantity = document.getElementById('amount').value
    }

    const removeHandler = (event) => {
        console.log('remove')
    }
    return (
        <div className={classes.cartitem1}>
            <span className={classes.cartitem}>
                <img alt={props.title} src={props.image}></img>
                <h4>{props.title}</h4>
            </span>
            <span className={classes.price}>
                <h3>{props.price}</h3>
            </span>
            <span className={classes.end}>
                <input
                    id='amount'
                    type="number"
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={1}
                    onChange={quantityChangeHandler}
                ></input>
                <button onClick={removeHandler}>REMOVE</button>
            </span>
        </div>
    )
}

export default CartItem