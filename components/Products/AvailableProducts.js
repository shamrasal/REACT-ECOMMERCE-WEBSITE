import ProductItem from "./Music/productItem"
import classes from './AvailableProducts.module.css'

const productsArr = [
    {
        id: 'pro1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id: 'pro2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 'pro3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id: 'pro4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]
const AvailableProducts = () => {
    const product = productsArr.map((item) => (
        <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
        ></ProductItem>
    ))
    return (
        < div className={classes.product} >
            <h2 className={classes.h2}>Music</h2>
            <ul>{product}</ul>
            <button className={classes.button}>See the cart</button>
        </div>
    )
}
export default AvailableProducts