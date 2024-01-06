<script lang="ts">
import ProductCard from './ProductCard.vue';
import type { Product, CartDetail } from '../model/types';

export default {
    components: {
        ProductCard,// Agregamos el componente de manera local
    },
    data() {
        return {
            products: [
                { id: 1, name: "silla", price: 56 },
                { id: 2, name: "Monitor", price: 100 },
                { id: 3, name: "Microfono", price: 120 },
                { id: 4, name: "Microfono 2", price: 130 },
                { id: 5, name: "Microfono 3", price: 140 },
                { id: 6, name: "Microfono 4", price: 150 },
            ] as Product[],
            details: [] as CartDetail[]
        };
    },
    methods: {
        onProductAdded(productId: number) {

            
        }
    },
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p" @addProduct="onProductAdded(p.id)"></ProductCard> <!-- Escuchar el evento -->
        </v-col>
    </v-row>
    <br>
</template>