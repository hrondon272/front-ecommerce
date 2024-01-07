import { defineStore } from "pinia";
import type { Category } from '@/model/types';

export const useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: [] as Category[],
        loading: true
    }),
    actions: {
        fetchCategories() {
          fetch('/data/categories.json')
            .then(response => response.json())
            .then((data) => {
              this.categories = data;
              this.loading = false;
            })
        },
    }
})