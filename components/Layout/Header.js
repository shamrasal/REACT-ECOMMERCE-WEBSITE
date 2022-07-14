import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Button from '../UI/Button/Button'
import Cart from '../Cart/Cart';
import CartContext from '../Store/Cart-Contex';

const Header = () => {
    const ctx = useContext(CartContext)
    const [CartVisible, setcartVisible] = useState(false);
    const CartHandler = (event) => {
        event.preventDefault()
        setcartVisible(true)
    }
    return (
        <div>
            {/* <ul className={classes.cartheader}>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="#">STORE</a></li>
                <li><a href="./about.html">ABOUT</a></li>
                <span className={classes.carholder} >
                    <a href="#cart" className={classes.carholder}>cart<span class="cart-number">0</span></a>
                </span>
            </ul> */}
            {CartVisible && <Cart isVisible={setcartVisible}></Cart>}
            <div className={classes.header1}>
                <button className={classes.button}>HOME</button>
                <NavLink to='/store' className={classes.button}>STORE</NavLink>
                <NavLink to='/about' className={classes.button}>ABOUT</NavLink>
                <Button onClick={CartHandler}>cart {ctx.item.length}</Button>
            </div>
            <header className={classes.header}>
                <h1>The Generics</h1>
            </header>
        </div>
    )
}

export default Header