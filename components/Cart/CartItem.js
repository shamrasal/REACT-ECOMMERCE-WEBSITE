import React, { useContext} from 'react'
import AuthContext from '../Store/Auth-Context'
import CartContext from '../Store/Cart-Contex'
import classes from './Cartitem.module.css'


const CartItem = (props) => {
    const Authctx = useContext(AuthContext)
    const ctx = useContext(CartContext)
    const quantityChangeHandler = (event) => {
        event.preventDefault()
        const newQuantity = event.target.value
        const newItem = {
            ...props, quantity: newQuantity
        }
        fetch(`https://crudcrud.com/api/fc338ceee0c243419baf36b032bf3057/cart${Authctx.email}/${props.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newItem),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                props.retry(retry => !retry)
                console.log(res)
            }).then(err => {
                console.log(err)
            })
        ctx.updateItem(newItem)
        // const quantity = document.getElementById('amount').value
    }

    const removeHandler = (event) => {
        console.log('remove')
        fetch(`https://crudcrud.com/api/fc338ceee0c243419baf36b032bf3057/cart${Authctx.email}/${props.id}`,
            {
                method: 'DELETE'
            })
            .then(res => {
                props.retry(retry => !retry)
                console.log(res)
                ctx.updateItem(props)
            }).then(err => {
                console.log(err)
            })
        

    }
    return (
        <div className={classes.cartitem1}>
            <span className={classes.cartitem}>
                <img alt={props.title} src={props.image}></img>
                <h4>{props.title}</h4>
            </span>
            <span className={classes.price}>
                <h3>{props.price}</h3>
            </span>
            <span className={classes.end}>
                <input
                    id='amount'
                    type="number"
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={props.quantity}
                    onChange={quantityChangeHandler}
                ></input>
                <button onClick={removeHandler}>REMOVE</button>
            </span>
        </div>
    )
}

export default CartItem