import { faker } from '@faker-js/faker';



class ProductService {

    products: Product[]

    constructor() {
        this.products = []
        this.generate()
    }

    generate() {
        const size : number = 100;

        for (let i : number = 0  ; i < size; i++){
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
            });
        }
    }

}

export { ProductService }