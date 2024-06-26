'use client'
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ShoppingProduct } from "./ShoppingProduct"

type ShoppingListProps = {
    products: Product[]
}



const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {

    const [cartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])


    return (
        <div>
            {
                cartItems.map((item: CartItem) => (
                    <ShoppingProduct key={item.id} id={item.id} quantity={item.quantity} />
                ))
            }
        </div>
    )
}

export { ShoppingList }