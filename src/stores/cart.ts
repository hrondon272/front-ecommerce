import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<CartDetail>>[]
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity
      })
      return count;
    },
    totalAmount: (state) => {
      let amount = 0;
      state.details.forEach(detail => {
        amount += detail.product.price * detail.quantity;
      })

      return amount;
    }
  },
  actions: {
    addProduct(product: Product) {
      const detailFound = this.details.find(d => d.product.id === product.id);
      console.log(detailFound)

      if (detailFound) {
        detailFound.quantity += 1;
      } else {
        this.details.push({
          id: Math.ceil(Math.random() * (10 - 1) + 1),
          product,
          quantity: 1
        })
      }
    },
    delete(productId: number) {
      const index = this.details.findIndex(d => d.product.id === productId);
      this.details.splice(index, 1);
    },
    increment(productId: number) {
      const detailFound = this.details.find(d => d.product.id === productId);
      if (detailFound) {
        detailFound.quantity += 1;
      }
    },
    decrement(productId: number) {
      const detailFound = this.details.find(d => d.product.id === productId);
      if (detailFound) {
        detailFound.quantity -= 1;

        if (detailFound.quantity === 0) {
          this.delete(productId);
        }
      }
    }
  },
})