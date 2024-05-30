import { getAllProducts } from "@/api/productsFetch"
import { useProductsStore } from "@/store/productsStore"
import { useEffect, useState } from "react"


interface UseGetProducts {
    products: Product[] | undefined;
    loading: boolean | undefined;
    error: string | null;
}

const useGetProducts = (limit: number | null): UseGetProducts => {
    const [products, setProducts] = useState<Product[] | undefined>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {

        const getProducts = async (limit: number | null) => {
            try {
                const allProducts = await getAllProducts(limit)
                setProducts(allProducts)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }
        getProducts(limit)


    }, [limit])

    return { products, loading, error }
}

export { useGetProducts }