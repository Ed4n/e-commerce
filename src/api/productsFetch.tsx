const BASE_URL = 'http://localhost:3300/api/v1/products'


export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const res = await fetch(BASE_URL)
        if (!res.ok) {
            throw new Error("fail to fetch data")
        }
        const products = await res.json()
        return products;
    } catch (err: any) {
        throw new Error(err.message || "An errror has ocurred")
    }
}