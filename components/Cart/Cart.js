import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../Store/Auth-Context'
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
    const [retry, setretry] = useState(false)
    const [cartList, setCartList] = useState()
    let [totalPrice, settotalPrice] = useState(0)
    const ctx = useContext(CartContext)
    const Authctx = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://crudcrud.com/api/fc338ceee0c243419baf36b032bf3057/cart${Authctx.email}`,)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        const cartList = data.map((item) => (
                            <CartItem
                                // key={Math.random().toString()}
                                id={item._id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                retry={setretry}
                            ></CartItem>
                        ))
                        let price=0
                        data.map((item) => (
                            price = price + +item.price * +item.quantity
                        ))
                        settotalPrice(price)
                        setCartList(cartList)

                    })
                }

            }).then(err => {
                console.log(err)
            })
    }, [retry,Authctx.email])

    // const cartList = ctx.item.map((item) => (
    //     <CartItem
    //         // key={Math.random().toString()}
    //         id={item.id}
    //         title={item.title}
    //         price={item.price}
    //         image={item.image}
    //         quantity={item.quantity}
    //         // retry={setretry}
    //     ></CartItem>
    // ))

    // let totalPrice = 0
    // ctx.item.map((item) => {
    //     totalPrice = totalPrice + item.price * item.quantity
    // })

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
                <h3 className={classes.h4}>{totalPrice} </h3>
                <h2>TOTAL : RS</h2>
            </span>
            <button className={classes.btn}>PURCHASE</button>
        </div>
    )
}

export default Cart