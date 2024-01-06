<script lang="ts">
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';

export default {
    components: {
        ProductCard,// Agregamos el componente de manera local
    },
    computed: {
        ...mapState(useProductsStore, ['products'])
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard :product="p"></ProductCard> <!-- Escuchar el evento -->
        </v-col>
    </v-row>
    <br>
</template>