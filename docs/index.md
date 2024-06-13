# E-Commerce Project

## About

This is a full e-commerce in wich I'll be learning:

- Typescript
- Next JS
- Zustand
- Tanstack Query

## Ideas

I can add a drag and drop system, like when draggin a product the card icon will expan like the indbox section in things mobile, so the user can drag the product to the cart.

## Things Learned

Inside the Area Page me & Chat GPT haha did something quite complicated and I learn a lot from it.

### Area Page

#### Mapping Categories

```javascript
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

```

Here is an explanation about what the **Object.keys(productsByCategory)** is doing:

**1.Object.keys(productsByCategory):**
Object.keys() is a JavaScript method that returns an array of a given object’s own enumerable property names, in the same order as a for...in loop (except for symbols which are omitted).
In your case, productsByCategory is an object where each key represents a category name, and the corresponding value is an array of products belonging to that category.

**.map((category) => { … }):**
The .map() method in JavaScript is used to iterate over each element of an array and perform a specified operation on each element, returning a new array of the same length with the results of the operations.
Here, Object.keys(productsByCategory) returns an array of category names. The .map() function then iterates over this array.

**(category):**
This parameter category represents each individual element (category name) of the array returned by Object.keys(productsByCategory) during each iteration of the .map() function.

---

#### Fetching Area & Reorganizing Categories

```javascript
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

```

**Explanation:**

1. **Purpose:**
 The purpose of this code snippet is to take an array of products (allProducts) and organize them into groups based on their category. The result will be an object (groupedProducts) where each key is a unique category name, and the value is an array of products belonging to that category.
2. **Usage of reduce:**
 The reduce method is a powerful array method in JavaScript that allows you to transform an array into a single value (in this case, an object). It iterates over each element of the array (allProducts), applying a function to each element to accumulate a result.
3. **Parameters of reduce:**
 The reduce method takes two main parameters:
 Accumulator (acc): This is the variable that accumulates the results. In this case, it starts as an empty object ({}) which will eventually become groupedProducts.
 Current element (product): This represents each individual element of the allProducts array during each iteration.
4. **Initialization ({} as Record<string, Product[]>):**
 The empty object {} provided as the initial value for the accumulator (acc) specifies that reduce will produce an object (Record<string, Product[]>) where each key is a string (category name) and each value is an array of Product objects.
5. **Condition (if (!acc[product.category])):**
 This checks if the acc object (which is groupedProducts) already contains a key for the current product.category. If not (!acc[product.category] evaluates to true), it initializes acc[product.category] as an empty array (acc[product.category] = [];).
6. **Pushing products to categories:**
 After ensuring that acc[product.category] exists as an array, the product is pushed into that array using acc[product.category].push(product);.
7. **Returning the accumulator (acc):**
 The function passed to reduce must return the accumulator (acc) at the end of each iteration. This updated accumulator (acc) is then used in the next iteration until all elements of allProducts have been processed.

---
