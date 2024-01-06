<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default {
    computed: {
        details(){
            const cartStore = useCartStore();
            return cartStore.details;
        }
    }
}
</script>

<template>
    <v-card class="mt-2 mb-4">
        <v-card-text>
            <v-card-title>
                Productos agregados al carrito:
            </v-card-title>

            <v-list>
                <v-list-item v-for="detail in details" :key="detail.id" :value="detail.productId">
                    <v-list-item-title>
                        Producto - {{ detail.productId }} (Qty: {{ detail.quantity }})
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>