import React from "react"

const CartContext = React.createContext({
    item: [],
    addItem: (item) => { },
})

export default CartContext