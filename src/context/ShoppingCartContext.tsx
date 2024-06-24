import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { ReactNode, createContext, useState } from "react";

type CategoriesProviderProps = {
    children: ReactNode;
}

type ShoppingCartContextProps = {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    cartQuantity: number;
}

type CartItem = {
    id: string;
    quantity: number;
}


const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

const ShoppingCartProvider: React.FC<CategoriesProviderProps> = ({ children }) => {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])

    const cartQuantity = cartItems.reduce((acc, item) => item.quantity + acc, 0)

    /**
     * 
     * @param id 
     * 
     * @returns 
     * @description
     * This is the same as doing this:
     * @example
     * const getItemQuantity = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    return item ? item.quantity : 0;
}
     */
    const getItemQuantity = (id: string) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: string) => {
        setCartItems(currItems => {
            const itemExists = currItems.find(item => item.id === id)

            if (!itemExists) {
                return [...currItems, { id, quantity: 1 }]
            }

            return currItems.map(item =>
                item.id == id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        })
    }


    const decreaseCartQuantity = (id: string) => {
        setCartItems(currItems => {
            const item = currItems.find(item => item.id === id);

            if (!item) {
                return currItems;
            }

            if (item.quantity === 1) {
                // Return the items that doesn't have the id
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    const removeFromCart = (id: string) => {
        setCartItems(currItems => currItems.filter(item => item.id !== id))
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartQuantity
            }} >
            {children}
        </ShoppingCartContext.Provider >
    )
}

export { ShoppingCartContext, ShoppingCartProvider }