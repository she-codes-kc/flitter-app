<!--Ordeno por fecha-->
<template>
    <select v-model="selection" @change="sort(selection)">
        <option disabled value="">Por favor selecciona una opción</option>
        <option value="new">Más nuevo a más antiguo</option>
        <option value="old">Más antiguo a más nuevo</option>
        <option value="kudos">Highlights</option>
    </select>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SortByDate',
    setup() {
        const selection = 'new'
        return {
            selection,
            sort: (selection: string) => {}
        }
    }
})
</script>

<style scoped>
/* button {
    color: white;
} */
</style>