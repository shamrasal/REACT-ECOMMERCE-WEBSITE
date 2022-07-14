import React from 'react'
import classes from './Cartitem.module.css'

const CartItem = (props) => {
    return (
        <div className={classes.cartitem1}>
            <span className={classes.cartitem}>
                <img alt={props.title} src={props.image}></img>
                <h3>{props.title}</h3>
            </span>
            <span className={classes.price}>
                <h3>{props.price}</h3>
            </span>
            <span className={classes.end}>
                <input type="text" value="1"></input>
                <button>REMOVE</button>
            </span>
        </div>
    )
}

export default CartItem