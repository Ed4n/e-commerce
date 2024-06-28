'use client'

import { getProductById } from "@/api/productsFetch";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useGetProductById } from "@/hooks/products/useGetProductById";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

type ShoppingProductProps = {
    product: ProductWithQuantity
}

const ShoppingProduct: React.FC<ShoppingProductProps> = ({ product }) => {


    const textShorten = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) {
            return text
        }

        return text.substring(0, maxLength - 3) + " ..."
    }

    return (
        <Link href='product/[productId]' as={`/product/${product._id}`} className='w-[220px] h-[300px] bg-gray-300 rounded-lg overflow-hidden relative shadow-2xl' >
            <div className="flex justify-between items-center gap-5 py-3 px-7 bg-white mb-2">
                <div className=" flex gap-5 w-[320px] ">
                    <div className="w-[100px] h-[100px] rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="flex flex-col gap-3 justify-center w-[70%]">
                        <div>
                            <h3 className="text-xl">{product.name}</h3>
                            <p>{textShorten(product.description, 20)}</p>
                        </div>
                        <div className=" flex w-[100%] justify-between items-center">
                            <div className="text-lg">x{product.quantity}</div>
                            <span className="text-xl ">${product.price}</span>
                        </div>
                    </div>
                </div>

                <h3 className=" text-xl font-bold">${product.price * product.quantity}</h3>
            </div>
        </Link>
    )
}

export { ShoppingProduct }