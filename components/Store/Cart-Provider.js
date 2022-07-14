import React, { useState } from "react";
import CartContext from "./Cart-Contex";

const CarProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        setItems((prev) => {
            return [...prev, item]
        })
    }

    const updateItemHandler = (item) => {
        setItems((prevItems) => {
            return [...prevItems]
        })
    }

    // const removeItemHandler = (id) => {

    // }



    const cartContext = {
        item: items,
        addItem: addItemHandler,
        updateItem: updateItemHandler
        // removeItem: { removeItemHandler }
    }

    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext)}
            {props.children}
        </CartContext.Provider>
    )

}

export default CarProvider