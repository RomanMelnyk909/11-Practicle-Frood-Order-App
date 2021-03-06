import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemToCrtHandler = item => {};

    const removeItemFromCartHandler = id => {

    }


    const cartContext =  {
        items: [],
        totalAmount:0,
        addItem : addItemToCrtHandler,
        reomoveItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;