import { useState, createContext } from "react";


//Creamos CartContext
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
  
//Funcion para agregar producto al carrito   
    const addItem = (item, quantity) =>{
        if (isInCart(item.index)){
            let pos = cart.findIndex(x => x.index === item.index)
            cart[pos].quantity += quantity;
            setCart([...cart]);
        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

// funcion removedora de items, mediante filtrado de todos los productos excepto por el id indicado
    const removeItem = (itemId) =>{
       const items = cart.filter(item=> item.index!== itemId);
       setCart([...items])
    }    
   
// Funcion para vaciar el cart  
    const clear = () => {
        setCart([]);
    }


// Funcion que valida si existe un producto con tal id en el cart    
    const isInCart = (itemId) =>{
        return cart.some(item => item.index=== itemId)

    }

    const cartTotal = () => {
        return cart.reduce((accum, item) => accum += item.quantity, 0)
    }

    const cartSumaTotal = () => {
        return cart.reduce((accum, item) => accum += item.quantity * item.price, 0)
    }


    return(
        <CartContext.Provider value={{cart, clear, removeItem, addItem, cartSumaTotal, cartTotal}}>
        {children}
    </CartContext.Provider>
)
}
