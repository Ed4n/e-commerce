'use client'

import { getProductById } from "@/api/productsFetch";
import Nav from "@/components/Nav";
import { ShoppingList } from "@/components/shopping-cart/ShoppingList";
import { ShoppingResume } from "@/components/shopping-cart/ShoppingResume";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

export default function ShoppingCart() {

    const [cartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [productsToShop, setProductsToShop] = useState<ProductWithQuantity[]>([])

    const totalPrice = productsToShop.reduce((acc, item) => acc + item.price, 0)
    const totalQuantity = productsToShop.reduce((acc, item) => acc + item.quantity, 0)



    useEffect(() => {
        const fetchProducts = async () => {
            const products = await Promise.all(
                cartItems.map(async (item: ProductWithQuantity) => {
                    try {
                        const product = await getProductById(item.id)
                        return { ...product, quantity: item.quantity }
                    } catch (err: any) {
                        console.log(err.message || "An error has occurred")
                        return null
                    }
                })
            )
            setProductsToShop(products.filter((product) => product !== null) as ProductWithQuantity[])
        }

        fetchProducts()
    }, [cartItems])

    return (
        <main className=" bg-gray-50 h-screen w-full pt-5 ">
            <h1 className="mb-7">Cart</h1>
            <ShoppingList productsToShop={productsToShop} />
            <ShoppingResume totalPrice={totalPrice} totalQuantity={totalQuantity} />
            <Nav />
        </main>
    )

}
