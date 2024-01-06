<script lang="ts">
import CartProductList from '@/components/cart/CartProductList.vue';
import SummaryCart from '@/components/cart/SummaryCart.vue';

export default {
  components: {
    CartProductList,
    SummaryCart
  }
}
</script>

<template>
  <v-row>
    <v-col cols="8">
      <CartProductList />
    </v-col>
    <v-col cols="4">
      <SummaryCart />
    </v-col>
  </v-row>
</template>