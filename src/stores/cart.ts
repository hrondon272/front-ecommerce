import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: useLocalStorage<CartDetail[]>('cartDetail', [])
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
    },
    whatsAppMessage(state) {
      let message = 'Hola, quiero realizar la siguiente compra:\n\n';

      message += '----------------------\n';
      state.details.forEach(d => {
        message += `Producto: ${d.product.name}\n`;
        message += `Cantidad: ${d.quantity}\n`;
        message += `SubTotal: ${d.quantity * d.product.price}\n`;
        message += '----------------------\n';
      });

      message += `Total a pagar: $${this.totalAmount}\n\n`;
      message += `Muchas gracias! 😊👍`;

      return encodeURI(message);
    },
    whatsAppLink() {
      return 'https://api.whatsapp.com/send/?phone=573125869378&text=' + this.whatsAppMessage; // ¨Para usar emojis
      // return 'https://wa.me/573125869378?text=' + this.whatsAppMessage; // Más recomendable si no vamos a usar emojis
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