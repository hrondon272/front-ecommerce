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
    mounted(){
        console.log("Valor iniciar: " + this.count)
    }
}
</script>

<template>
    <div>
        <h1>Contador: {{ count }}</h1>
        <button @click="increase">
            Add counter
        </button>
    </div>
</template>