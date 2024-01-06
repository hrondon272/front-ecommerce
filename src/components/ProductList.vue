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
                { id: 1, name: "silla", price: 56, image: "https://img.freepik.com/foto-gratis/muebles-modernos-estudios-estilo-vida-verde_1122-1837.jpg?1" },
                { id: 2, name: "Monitor", price: 100, image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg" },
                { id: 3, name: "Microfono", price: 120, image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg" },
                { id: 4, name: "Amplificador", price: 130, image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
                { id: 5, name: "Audifonos", price: 140, image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
                { id: 6, name: "Mouse", price: 150, image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            ] as Product[],
            details: [] as CartDetail[]
        };
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