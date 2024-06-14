import CategoryComponent from "@/components/products/CategoryComponent";

interface ProductsByCategoryProps {
    productsByCategory: Record<string, Product[]>
}

const ProductsByCategory: React.FC<ProductsByCategoryProps> = ({ productsByCategory }) => {
    return (
        <>
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
            })}</>
    )

}

export { ProductsByCategory }