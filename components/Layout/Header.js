import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import classes from './Header.module.css'
import Button from '../UI/Button/Button'
import Cart from '../Cart/Cart';
import CartContext from '../Store/Cart-Contex';
import AuthContext from '../Store/Auth-Context';

const Header = (props) => {
    const ctx = useContext(CartContext)
    const authctx = useContext(AuthContext)
    const histoy = useHistory()
    const [CartVisible, setcartVisible] = useState(false);
    const CartHandler = (event) => {
        event.preventDefault()
        setcartVisible(true)
    }

    const logoutHandler = (event) => {
        event.preventDefault()
        authctx.logOut()
        histoy.replace('/home')
    }
    return (
        <div>
            {CartVisible && <Cart isVisible={setcartVisible}></Cart>}
            <div className={classes.header1}>
                <NavLink to='/home' className={classes.button}>HOME</NavLink>
                <NavLink to='/store' className={classes.button}>STORE</NavLink>
                <NavLink to='/about' className={classes.button}>ABOUT</NavLink>
                {!authctx.isLoggedIn && <NavLink to='/login' className={classes.button}>LOGIN</NavLink>}
                {authctx.isLoggedIn && <button onClick={logoutHandler} className={classes.button}>LOGOUT</button>}
                <NavLink to='/contactus' className={classes.button}>CONTACT US</NavLink>
                <Button onClick={CartHandler}>cart {ctx.item.length}</Button>
            </div>
            <header className={classes.header}>
                <span>
                    <h1 className={classes.h1}>The Generics</h1>
                </span>
                <span>
                    <NavLink to='/movies' className={classes.letestbutton} >Get our Latest Movies</NavLink>
                </span>
            </header>
        </div>
    )
}

export default Header