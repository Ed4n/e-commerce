import { getNewProducts, getProductsByName } from "@/api/productsFetch"
import { Limelight } from "next/font/google";
import { useEffect, useState } from "react"


interface UseGetProductsByName {
    productsByName: Product[] | undefined;
    loading: boolean | undefined;
    error: string | null;
}

const useGetProductsByName = (limit: number | null): UseGetProductsByName => {
    const [productsByName, setProductsByName] = useState<Product[]>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {

        const getProducts = async () => {
            try {
                const allProducts = await getProductsByName(limit)
                setProductsByName(allProducts)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }
        getProducts()


    }, [limit])

    return { productsByName, loading, error }
}

export { useGetProductsByName }