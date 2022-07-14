import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-Contex'
import classes from './productItem.module.css'
const ProductItem = (props) => {
    const ctx = useContext(CartContext)
    const addCartItemHandler = () => {
        ctx.addItem({
            id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            quantity: 1
        })
        console.log(ctx.item)
    }
    return (
        <li className={classes.productItem}>
            <span className={classes.h1}>
                <h2>{props.title}</h2>
            </span>
            <span>
                <img alt="img1" src={props.image}></img>
            </span>
            <span className={classes.price}>
                <h2>{props.price} RS</h2>
                <button onClick={addCartItemHandler} className={classes.button}>ADD TO CART</button>
            </span>
        </li>
    )
}

export default ProductItem