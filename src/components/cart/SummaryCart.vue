<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useCartStore, ['totalAmount'])
    }
}
</script>

<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            <p>Total a pagar: ${{ totalAmount == 0 ? 0 : totalAmount }}</p>
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal" color="orange-lighten-2">
                Realizar pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>