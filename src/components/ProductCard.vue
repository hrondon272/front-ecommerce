<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    emits: ['addProduct'],
    methods: {
        onAddButtonClick() {
                const cartStore = useCartStore();
                cartStore.addProduct(this.product)
        }
    },
    computed: {
        productImageUrl(){
            return this.product.image
            ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
        }
    }
}
</script>

<template>
    <!-- Sintaxis con markups -->
    <v-card>
        <v-img :src="productImageUrl" height="200px" cover />

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
            {{ product.name }}
        </v-card-subtitle>

        <v-card-text>
            <p class="mb-4">Esta es una descripción de ejemplo</p>
            <v-chip>$ {{ product.price }}</v-chip>
        </v-card-text>

        <v-card-actions @click="onAddButtonClick">
            <v-btn color="orange-lighten-2">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>