import { getProductsByCategories } from "@/api/productsFetch"
import { useEffect, useState } from "react"

interface UseGetProductsByCategories {
    productsByCategories: Product[] | undefined;
    loading: boolean | undefined;
    error: string | null;
}

const useGetProductsByCategories = (categories: string, limit: number | null,): UseGetProductsByCategories => {
    const [productsByCategories, setproductsByCategories] = useState<Product[] | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {

        const getProducts = async () => {
            try {
                const products = await getProductsByCategories(categories, limit)
                setproductsByCategories(products)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }

        getProducts()

    }, [categories, limit])

    return { productsByCategories, loading, error }
}

export { useGetProductsByCategories }