<!--Crear flit-->
<template>
    <div class="createFlit">
      <input v-model="newFlit"
        type="text" placeholder="¿Qué estás pensando?" style="width: 100%"/>
      <button @click="createFlit">¡Flit!</button>
    </div>
    <div v-if="created">Flit Creado!</div>
</template>
  
<script lang="ts">
import FlitService from "@/services/FlitService";
import { defineComponent } from "vue";
  
export default defineComponent({
   data() {
    return {
        newFlit: "",
        created: false,
    }
   },
   methods: {
    async createFlit() {
        const flit = await FlitService.createFlit(this.newFlit);
        this.created = true;
    }
   }
});
</script>
  
<style scoped>
.createFlit {
    width: auto;
    display: flex;
    align-items: center;
    border-style: solid;
    border-width: 2px;
    border-color: #5060a4;
    border-radius: 5px;
    box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.3);  
}
  
input {
    padding: 5px;
    padding-left: 20px;
    transition: 0.25s;
    border: none;
    background-color: transparent;
}
  
input:focus {
    outline: none;
}
  
button {
    margin-bottom: 0;
    font-size: 20px;
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 5px;
    justify-content: flex-end;
}
</style>