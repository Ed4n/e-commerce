const BASE_URL = 'http://localhost:3300/api/v1/products/'


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

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(BASE_URL + id)
        if (!res.ok) {
            throw new Error("fail to fetch data")
        }
        const productById = res.json()
        return productById
    } catch (err: any) {
        throw new Error(err.message || "An error has ocurred")
    }
}



// this approeach is using the following structure:
// return res.status(200).json({
//     success: true,
//     message: 'New Products Filtered Correctly.',
//     data: newProducts
// })
export const getNewProducts = async (limit: number | null) => {
    let url = BASE_URL + "new"
    if (limit) {
        url += `?limit=${limit}`
    }

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error("fail to fetch data")
        }
        const newProducts = await res.json();
        if (!newProducts.success) {
            throw new Error(newProducts.message);
        }
        return newProducts.data;
    } catch (err: any) {
        throw new Error(err.message || "An error has ocurred")
    }
}