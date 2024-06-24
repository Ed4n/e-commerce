
type ShoppingProductProps = {
    product: Product
}

const ShoppingProduct: React.FC<ShoppingProductProps> = ({ product }) => {
    return (
        <div>Shopping Product</div>
    )
}

export { ShoppingProduct }