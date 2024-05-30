'use client'
import { getAllProducts, getNewProducts } from "@/api/productsFetch"
import ProductsList from "@/components/products/ProductsList"
import { useGetNewProducts } from "@/hooks/products/useGetNewProducts"
import { da } from "@faker-js/faker"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"


interface Props {
    params: { area: string }
}

export default function Area({ params }: Props) {
    const { area } = params

    const [products, setProducts] = useState<Product[]>()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        switch (area) {
            case "new-arrival":
                fetchNewArrival()
                break;

            default:
                console.log('Unknown fruit.');
        }
    }, [area])

    const fetchNewArrival = async () => {
        console.log("new arrival")

        try {
            const allProducts = await getNewProducts()
            setProducts(allProducts)
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    }



    return (
        <div>
            <h1>Area Component</h1>
            {
                JSON.stringify(products)
            }
        </div>
    )
}