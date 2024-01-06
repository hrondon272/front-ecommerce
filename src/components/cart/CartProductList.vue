<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import CartProductItem from './CartProductItem.vue';

export default {
    components: {
        CartProductItem
    },
    computed: {
        ...mapState(useCartStore, ['details'])
    }
}
</script>

<template>
    <v-card class="mb-4">
        <v-card-title>
            Productos agregados al carrito:
        </v-card-title>

        <v-card-text>
            <v-table v-if="details.length > 0" class="text-center">
                <thead>
                    <tr>
                        <th class="text-center">
                            Producto
                        </th>
                        <th class="text-center">
                            Cantidad
                        </th>
                        <th class="text-center">
                            Precio
                        </th>
                        <th class="text-center">
                            Subtotal
                        </th>
                        <th class="text-center">
                            <span class="d-sr-only">
                                Eliminar
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <CartProductItem v-for="detail in details" :key="detail.id" :value="detail.product.id"
                        :detail="detail" />
                </tbody>
            </v-table>
            <p v-else>
                Aún no se han agregado items al carrito de compras, haz clic <RouterLink to="/">aquí</RouterLink>
                para ver los productos
                disponibles
            </p>
        </v-card-text>
    </v-card>
</template>