<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '@/stores/products';

export default {
    methods: {
        ...mapActions(useProductsStore, [
            'orderByName', 'orderByPrice',
            'orderByNameDesc', 'orderByPriceDesc',])
    },
    computed: {
        ...mapState(useProductsStore, ['order'])
    }
}
</script>


<template>
    <v-list-subheader>Ordenar por</v-list-subheader>
    <v-list-item link @click="orderByPrice" :active="order === 'price'">
        <v-list-item-title>
            Más económico
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">
        <v-list-item-title>
            Más costoso
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByName" :active="order === 'name'">
        <v-list-item-title>
            Nombre (A-Z)
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
        <v-list-item-title>
            Nombre (Z-A)
        </v-list-item-title>
    </v-list-item>
</template>