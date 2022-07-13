import classes from './Header.module.css'
import Button from '../UI/Button/Button'

const Header = () => {
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
            <div className={classes.header1}>
                <button className={classes.button}>HOME</button>
                <button className={classes.button}>STORE</button>
                <button className={classes.button}>ABOUT</button>
                <Button>cart</Button>
            </div>
            <header className={classes.header}>
                <h1>The Generics</h1>
            </header>
        </div>
    )
}

export default Header