import classes from './productItem.module.css'
const ProductItem = (props) => {
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
                <button className={classes.button}>ADD TO CART</button>
            </span>
        </li>
    )
}

export default ProductItem