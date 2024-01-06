import { defineStore } from "pinia";
import type { CartDetail, Product } from '@/model/types';

export const useProductsStore = defineStore('products', {
  state: () => ({
    categoryId: null as number|null,
    _products: [
        { id: 1, name: "silla", price: 56, image: "/products/silla.webp", categoryId: 1 },
        { id: 2, name: "Monitor", price: 100, image: "/products/monitor.jpg", categoryId: 2 },
        { id: 3, name: "Microfono", price: 120, image: "/products/microfono.jpg", categoryId: 1 },
        { id: 4, name: "Amplificador", price: 130, image: "/products/parlantes.jpg", categoryId: 1 },
        { id: 5, name: "Audifonos", price: 140, image: "/products/headphones.jpg", categoryId: 2 },
        { id: 6, name: "Mouse", price: 150, image: "/products/mouse.jpg", categoryId: 2 },
    ] as Product[],
    details: [] as CartDetail[]
  }),
  getters: {
    products(state){
        if(!state.categoryId){
            return state._products
        }

        return state._products.filter(p => p.categoryId === state.categoryId)
    }
  },
  actions: {
    selectCategory(categoryId: number){
        this.categoryId = categoryId;
    }
  },
})