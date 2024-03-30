import { create } from 'zustand'


interface ProductsStore {
    products: Product[],
    saveProducts: (data: Product[]) => Promise<void>
}

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [],

    saveProducts: async (data: Product[]) => set(state => ({
        products: state.products = data

    }))
}))