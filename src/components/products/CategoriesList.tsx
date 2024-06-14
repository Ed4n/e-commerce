interface CategoriesListProps {
    categories: string[]
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {

    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    const cleanedCategories = removeDuplicates(categories).sort()



    const half = Math.floor(cleanedCategories.length / 2)

    return (
        <div className="flex flex-col gap-5">
            <h1>Categories</h1>
            <div className="flex flex-col gap-3 overflow-x-scroll no-scrollbar ">
                <div className="flex  gap-3 ">
                    {cleanedCategories.slice(0, half).map((category, index) => (
                        <Category key={index} category={category} />
                    ))}
                </div>

                <div className="flex  gap-3 ">
                    {cleanedCategories.slice(half, cleanedCategories.length).map((category, index) => (
                        <Category key={index} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )

}

type CategoryProps = {
    category: string,
    key: number
}

const Category: React.FC<CategoryProps> = ({ category, key }) => <button key={key} className=" px-6 py-3 rounded-lg shadow-lg bg-white whitespace-nowrap"> {category} </button>

export { CategoriesList }