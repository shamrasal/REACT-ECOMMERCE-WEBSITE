import React, { useState, useEffect } from "react"
import ProductItem from "./Music/productItem"
import classes from './AvailableProducts.module.css'

// const productsArr = [
//     {
//         id: 'pro1',
//         title: 'Colors',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//     },
//     {
//         id: 'pro2',
//         title: 'Black and white Colors',
//         price: 50,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//     },
//     {
//         id: 'pro3',
//         title: 'Yellow and Black Colors',
//         price: 70,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//     },
//     {
//         id: 'pro4',
//         title: 'Blue Color',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//     }
// ]
const AvailableProducts = () => {
    const [dataItem, setDataItem] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, seterror] = useState(null)

    useEffect(() => {
        async function xyz() {
            setIsLoading(true)
            seterror(null)
            try {
                const res = await fetch('https://fakestoreapi.com/products?limit=5')
                if (!res.ok) {
                    throw new Error('Something went wrong ....Retrying')
                }
                const data = await res.json()
                const ListItems = data.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                        description={item.description}
                        rating={item.rating}
                    ></ProductItem>
                ))
                setDataItem(ListItems)
            } catch (err) {
                seterror(err.message)
            }
            setIsLoading(false)
        }
        xyz()
    }, [])

    return (
        < div className={classes.product} >
            <h2 className={classes.h2}>Music</h2>
            <ul>
                {!isLoading && dataItem.length > 0 && dataItem}
                {!isLoading && dataItem.length === 0 && !error && <h2>No Tours Found...</h2>}
                {!isLoading && error && <h2>{error}</h2>}
                {isLoading && <h2>Loading...</h2>}
            </ul>
            <button className={classes.button}>See the cart</button>
        </div>
    )
}
export default AvailableProducts