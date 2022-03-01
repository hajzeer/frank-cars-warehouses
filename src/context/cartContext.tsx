import React, {createContext} from "react";
import {IArrayItems, IProps} from "../interfaces/interfaces";
import {useLocalStorage} from '../hooks/useLocalStorage';



const defaultValue: [] = []

 const CartContext = createContext<IArrayItems | any>(defaultValue);


 const CartProvider = React.memo<IProps>(({children}) => {


    const [cart, setCart] = useLocalStorage(defaultValue, defaultValue)

    return (
        <CartContext.Provider value={{cart, setCart}}>
            { children }
        </CartContext.Provider>
    )
})

export {CartProvider, CartContext}