<script lang="ts">
import type { Category } from "../model/types";
import { useProductsStore } from "@/stores/products";
import { mapActions } from "pinia";

export default {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Oficina',
                    description: 'Productos para tu oficina'
                },
                {
                    id: 2,
                    name: 'Computadora',
                    description: 'Accesorios para computadora'
                }
            ] as Category[]
        }
    },
    methods: {
        goToCategory(categoryId: number){
            this.$router.push({
                name: 'category',
                params: { categoryId }
            })
        },
        clearCategory(){
            this.$router.push({
                name: 'home'
            })
        },
        ...mapActions(useProductsStore, ['orderByName', 'orderByPrice'])
    },
}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorías</v-list-subheader>
            <v-list-item link :active="$route.name === 'home'">
                <v-list-item-title @click="clearCategory()">
                    Todas
                </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="category in categories" :key="category.id" link
                :title="`${category.name}`" @click="goToCategory(category.id)" :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"></v-list-item>

            <v-divider class="my-2"></v-divider>
            <v-list-subheader>Orden</v-list-subheader>
            <v-list-item link @click="orderByPrice">
                <v-list-item-title>
                    Order by price
                </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="orderByName">
                <v-list-item-title>
                    Order by name
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>