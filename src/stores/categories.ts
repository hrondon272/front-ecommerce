import { defineStore } from "pinia";
import type { Category } from '@/model/types';
import categoriesData from '../data/categories.json';

export const useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: categoriesData as Category[]
    }),
    getters: {

    },
    actions: {

    }
})