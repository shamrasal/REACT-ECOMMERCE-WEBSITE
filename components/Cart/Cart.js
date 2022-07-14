import React, { useContext } from 'react'
import CartContext from '../Store/Cart-Contex'
import classes from './Cart.module.css'
import CartItem from './CartItem'


// const cartElements = [
//     {
//         id: 'cart1',
//         title: 'Colors',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//         quantity: 2,
//     },
//     {
//         id: 'cart2',
//         title: 'Black and white Colors',
//         price: 50,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//         quantity: 3,
//     },
//     {
//         id: 'cart3',
//         title: 'Yellow and Black Colors',
//         price: 70,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//         quantity: 1,
//     }
// ]

const Cart = (props) => {
    const ctx = useContext(CartContext)
    console.log(ctx.item, 5)
    const cartList = ctx.item.map((item) => (
        <CartItem
            key={Math.random().toString()}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
        ></CartItem>
    ))

    let totalPrice = 0
    ctx.item.map((item) => {
        totalPrice = totalPrice + item.price
    })

    const removeCartHandler = (event) => {
        event.preventDefault()
        props.isVisible(false)
    }

    return (
        <div className={classes.cart}>
            <h3 className={classes.h1}>CART</h3>
            <button onClick={removeCartHandler} className={classes.cancel}>x</button>
            <span className={classes.intro}>
                <section className={classes.h2}>ITEM</section>
                <section className={classes.h2}>PRICE</section>
                <section className={classes.h2}>QUANTITY</section>
            </span>
            <span>
                <ul>
                    {cartList}
                </ul>
            </span>
            <span className={classes.carttotal}>
                <h3 className={classes.h4}>{totalPrice} RS</h3>
                <h2>TOTAL  </h2>
            </span>
            <button className={classes.btn}>PURCHASE</button>
        </div>
    )
}

export default Cart