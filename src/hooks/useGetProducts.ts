import { useProductsStore } from "@/store/productsStore"
import { useEffect, useState } from "react"

const useGetProducts = () => {

    const { saveProducts, products } = useProductsStore()

    useEffect(() => {
        fetch('http://localhost:3300/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network error.")
                }
                return response.json()
            })
            .then(
                data => saveProducts(data),
            )

    }, [saveProducts])

    return [products]

}

export { useGetProducts }