'use client'
import Nav from "@/components/Nav";
import { Cart } from "@/components/shopping-cart/Cart";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { useGetProductById } from "@/hooks/products/useGetProductById";

export type SingleProductProps = {
    params: { productId: string }

};

export default function SingleProduct({ params }: SingleProductProps): JSX.Element {

    const { productId } = params

    const { product, loading, error } = useGetProductById(productId)

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading..</div>
    if (!product) return null!

    const { _id: id, name, description, price } = product;

    return (
        <ShoppingCartProvider>
            <main className=" bg-gray-500 text-gray-50 w-full h-screen">
                <div className="w-full h-[40vh]">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/200/300" alt="" />
                </div>

                <div className=" bg-gray-500 w-full h-[60vh] py-5 px-5 rounded-lg absolute -mt-5 z-20 flex flex-col gap-4">

                    <h2>{name}</h2>
                    <div className=" flex gap-3">
                        <button className=" px-4 py-2 bg-white text-slate-800 rounded-lg">
                            Description
                        </button>

                        <button className=" px-4 py-2 border-[1px] border-white rounded-lg">
                            Details
                        </button>

                        <button className=" px-4 py-2 border-[1px] border-white rounded-lg">
                            Reviews
                        </button>
                    </div>

                    <p>{description}</p>

                    <div className="w-full flex justify-between mt-12">
                        <Cart id={id} />

                        <button className="px-12 py-2 bg-white text-slate-800 rounded-full text-xl">Buy</button>
                    </div>
                </div>

                <Nav />
            </main>
        </ShoppingCartProvider>
    )
}