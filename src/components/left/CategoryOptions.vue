<script lang="ts">
import { useCategoryStore } from "../../stores/categories";
import { mapState } from "pinia";

export default {
    computed: {
        ...mapState(useCategoryStore, ['categories', 'loading'])
    },
    methods: {
        goToCategory(categoryId: number) {
            this.$router.push({
                name: 'category',
                params: { categoryId }
            })
        },
        clearCategory() {
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<template>
    <v-list-subheader>Categorías</v-list-subheader>
    <v-list-item link :active="$route.name === 'home'">
        <v-list-item-title @click="clearCategory()">
            Todas
        </v-list-item-title>
    </v-list-item>
    <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
    <!-- <v-skeleton-loader :loading="true" type="list-item-two-line"> -->
    <v-list-item v-else v-for="category in categories" :key="category.id" link :title="`${category.name}`"
        @click="goToCategory(category.id)"
        :active="$route.name === 'category' && Number($route.params.categoryId) === category.id">
    </v-list-item>
    <!-- </v-skeleton-loader> -->
</template>