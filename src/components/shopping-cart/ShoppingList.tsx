import { ShoppingProduct } from "./ShoppingProduct"

type ShoppingListProps = {
    products: Product[]
}


const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {
    return (
        <div>
            <ShoppingProduct />
        </div>
    )
}

export { ShoppingList }