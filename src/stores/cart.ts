import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/types';

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
    }
  },
  actions: {
    addProduct(productId: number) {
      const detailFound = this.details.find(d => d.productId === productId);
      console.log(detailFound)

      if (detailFound) {
        detailFound.quantity += 1;
      } else {
        this.details.push({
          id: Math.ceil(Math.random() * (10 - 1) + 1),
          productId,
          quantity: 1
        })
      }
    }
  },
})