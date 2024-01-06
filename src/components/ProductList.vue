<script lang="ts">
import ProductCard from './ProductCard.vue';
import CartProductList from './CartProductList.vue';
import type { Product, CartDetail } from '../model/types';

export default {
    components: {
        ProductCard,// Agregamos el componente de manera local
        CartProductList
    },
    data() {
        return {
            products: [
                { id: 1, name: "silla", price: 56 },
                { id: 2, name: "Monitor", price: 100 },
                { id: 3, name: "Microfono", price: 120 },
            ] as Product[],
            details: [] as CartDetail[]
        };
    },
    methods: {
        onProductAdded(productId: number) {

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
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p" @addProduct="onProductAdded(p.id)"></ProductCard> <!-- Escuchar el evento -->
        </v-col>
    </v-row>
    <br>
    <CartProductList :details="details" />
</template>