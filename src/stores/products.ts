import { defineStore } from "pinia";
import type { CartDetail, Product } from '@/model/types';

export const useProductsStore = defineStore('products', {
  state: () => ({
    categoryId: null as number | null,
    _products: [
      { id: 1, name: "silla", price: 206, image: "/products/silla.webp", categoryId: 1 },
      { id: 2, name: "Monitor", price: 100, image: "/products/monitor.jpg", categoryId: 2 },
      { id: 3, name: "Microfono", price: 300, image: "/products/microfono.jpg", categoryId: 1 },
      { id: 4, name: "Amplificador", price: 250, image: "/products/parlantes.jpg", categoryId: 1 },
      { id: 5, name: "Audifonos", price: 15, image: "/products/headphones.jpg", categoryId: 2 },
      { id: 6, name: "Mouse", price: 25, image: "/products/mouse.jpg", categoryId: 2 },
    ] as Product[],
    details: [] as CartDetail[],
    order: '' as string
  }),
  getters: {
    products(state) {
      let products = null;

      //  Filter
      if (state.categoryId) {
        products = state._products.filter(p => p.categoryId === state.categoryId);
      } else {
        products = state._products
      }

      // Order
      if (state.order === '') {
        return products;
      }

      if (state.order === 'price') {
        return products.sort((a, b) => a.price - b.price);
      }

      if (state.order === 'name') {
        return products.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  },
  actions: {
    selectCategory(categoryId: number) {
      this.categoryId = categoryId;
    },
    orderByPrice() {
      this.order = 'price';
    },
    orderByName() {
      this.order = 'name';
    }
  },
})