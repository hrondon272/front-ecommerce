<script lang="ts">
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count += 1
        }
    },
    mounted() {
        console.log("Valor iniciar: " + this.count)
    }
}
</script>

<template>
    <p>LLegar a 20 clicks</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">
        Add counter
    </button>

    <p v-if="count <= 10">Tu puedes!</p>
    <p v-else>Ya te falta muy poco</p>
</template>