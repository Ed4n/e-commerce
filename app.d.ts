type Product = {
    _id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    area: string,
    new: boolean
}

type CartItem = {
    id: string;
    quantity: number;
}

type ProductWithQuantity = {
    _id: string;
    quantity: number;
    name: string;
    description: string;
    price: number;
    totalPrice: number
}