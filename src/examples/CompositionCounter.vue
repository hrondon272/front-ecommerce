<script setup lang="ts">
import { onMounted, ref } from "vue";

const counter = ref(0);

function increase() {
    counter.value += 1
}

onMounted(() => {
    console.log(`Valor inicial del contador= ${counter.value}`)
});

</script>

<template>
    <h1>Composition version</h1>
    <p>Contador: {{ counter }}</p>

    <button @click="increase">
        Increase counter
    </button>
</template>