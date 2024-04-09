const getAllProducts = async (saveProducts) => {
    await fetch('http://localhost:3300/api/v1/products')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network error.")
            }
            return response.json()
        })
        .then(
            data => saveProducts(data),

        )
}