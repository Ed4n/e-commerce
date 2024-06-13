'use client'
import { getProductsByAreas } from "@/api/productsFetch"
import CategoryComponent from "@/components/products/CategoryComponent"
import { useEffect, useState } from "react"


interface Props {
    params: { area: string }
}

export default function Area({ params }: Props) {
    const { area } = params
    const decodedArea = decodeURIComponent(area)

    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [productsByCategory, setProductsByCategory] = useState<Record<string, Product[]>>({})
    const [title, setTitle] = useState("")

    useEffect(() => {
        /**
  * Fetches products by area and categorizes them.
  * @param area - The area to fetch products from.
  */
        const fetchArea = async (area: string): Promise<void> => {
            try {
                // Fetch all products for the given area
                const allProducts: Product[] = await getProductsByAreas(area, null);
                setProducts(allProducts);

                // Group products by category
                const groupedProducts: Record<string, Product[]> = allProducts.reduce((acc, product) => {
                    // Check if the category exist in the accumulation, if not, add it to the array
                    if (!acc[product.category]) {
                        acc[product.category] = [];
                    }
                    //For each accumulation with the name of the category add a producct.
                    acc[product.category].push(product);

                    // return the object with the accumulation of categories
                    return acc;
                }, {} as Record<string, Product[]>); // Record is just a typescript confirmation confirmation

                setProductsByCategory(groupedProducts);
            } catch (err: any) {
                // Handle errors
                setError(err.message || 'An error occurred');
            } finally {
                // Ensure loading state is set to false
                setLoading(false);
            }
        }

        fetchArea(decodedArea)
    }, [decodedArea])

    if (loading) return <div>Loading...</div>
    if (error) return <div>An error has occurred: {error}</div>

    console.log(productsByCategory)
    // console.log(Object.keys(productsByCategory))

    return (
        <div>
            <div className="w-full h-[20vh] fixed">
                <img className="w-full h-full object-cover" src="https://picsum.photos/200/300" alt="" />
                <div className=" absolute top-0 w-full h-full bg-black/50 py-12 px-3 flex items-end">
                    <h1 className=" text-white top-11 text-5xl">
                        {decodedArea}
                    </h1>
                </div>
            </div>
            <div className=" bg-slate-100 w-full py-5 px-5 rounded-lg absolute z-20 flex flex-col gap-12 mt-[18vh]">
                {/* Iterate over the keys (categories) in the productsByCategory object */}
                {Object.keys(productsByCategory).map((category) => {
                    // Create props for each category to pass to the CategoryComponent
                    const categoryProps = {
                        title: category, // The title of the category section is the same category name.
                        category: category, // The category name
                        data: productsByCategory[category], // The array of products for the current category
                        error: null, // No error to pass
                        isArea: true, // A flag indicating that this is an area category
                        loading: false // Loading is set to false since data is already fetched
                    };

                    // Return a CategoryComponent for each category with the generated props
                    return (
                        <CategoryComponent key={category} props={categoryProps} />
                    );
                })}
            </div>
        </div>

    )
}