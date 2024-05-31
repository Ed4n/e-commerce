import { ur } from "@faker-js/faker"

const BASE_URL = 'http://localhost:3300/api/v1/products/'


export const getAllProducts = async (limit: number | null): Promise<Product[]> => {
    let url = BASE_URL
    if (limit) {
        url += `?limit=${limit}`
    }

    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error("fail to fetch data")
        }
        const products = await res.json()
        if (!products.success) {
            throw new Error(products.message);
        }

        return products.data;


    } catch (err: any) {

        throw new Error(err.message || "An errror has ocurred")
    }
}

export const getProductById = async (id: string): Promise<Product> => {
    let url = `${BASE_URL}/${id}`

    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error("fail to fetch data", res.statusText)
        }

        const productById = await res.json()
        if (!productById.success) {
            throw new Error(productById.message);
        }

        return productById.data;

    } catch (err: any) {
        throw new Error(err.message || "An error has ocurred")
    }
}

/**
 * 
 * @param limit 
 * @returns A Promise of New Products
 * @description 
 * this approeach is using the following structure:
 * return res.status(200).json({
 * success: true,
 * message: 'New Products Filtered Correctly.',
 * data: newProducts
})
 */

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

export const getProductsByArea = async (area: string, limit: number | null) => {
    let url = BASE_URL + `productsByArea?area=${area}/`
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

export const getProductsByCategories = async (categories: string, limit: number | null) => {
    const encodedCategories = encodeURIComponent(categories)
    let url = BASE_URL + `categories?categories=${encodedCategories}`
    if (limit !== null && limit !== undefined) {
        url += `&limit=${limit}`;
    }

    console.log(url)

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error("fail to fetch data")
        }
        const productsByCategories = await res.json();
        if (!productsByCategories.success) {
            throw new Error(productsByCategories.message);
        }

        console.log(productsByCategories)
        return productsByCategories.data;
    } catch (err: any) {
        throw new Error(err.message || "An error has ocurred")
    }
}

