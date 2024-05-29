'use client'

import ProductsList from "@/components/products/ProductsList";
import { useGetNewProducts } from "@/hooks/products/useGetNewProducts";
import { useEffect, useState } from "react";
import { getCategories } from "@/api/productsFetch";

export default function New(): JSX.Element {
    const { newProducts, error, loading } = useGetNewProducts()

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!newProducts) return null!;

    return (
        <section className="flex flex-col w-full">
            <h1 className="mb-5">New Arrival</h1>

            <Categories />

            <ProductsList data={newProducts} />
        </section>
    )
}


export function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories();
                setCategories(res)
            } catch (err) {
                console.error(err)
            }
        }

        fetchCategories()

    }, [])



    return (
        <div>
            <h2>Categories</h2>
            <div className="flex gap-3 overflow-x-scroll mb-7">
                {
                    categories.map((category, index) => (
                        <div key={index} className="px-4 py-2 bg-slate-200 min-w-[250px] flex justify-center items-center" >{category}</div>
                    ))
                }
            </div>
        </div>
    )
}