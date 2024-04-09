import { getAllProducts } from "@/api/productsFetch"
import { useProductsStore } from "@/store/productsStore"
import { useEffect, useState } from "react"


interface UseGetProducts {
    products: Product[];
    loading: boolean | undefined;
    error: string | null;
}

const useGetProducts = (): UseGetProducts => {
    const { saveProducts, products } = useProductsStore()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const allProducts = await getAllProducts()
                saveProducts(allProducts)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }
        getProducts()

    }, [saveProducts])

    return { products, loading, error }

}

export { useGetProducts }