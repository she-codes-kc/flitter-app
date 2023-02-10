<!--Template barra de búsqueda-->
<template>
    <div class="searchBar">
       <input type="text" placeholder="Buscar por @personas | #tags | texto" style="width: 100%" />
      <div class="searchBar-icon" >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
  
<style scoped>
.searchBar {
    font-family: 'Josefin Sans',sans-serif;
    width: auto;
    display: flex;
    align-items: center;
    border-style: solid;
    border-width: 2px;
    border-color: #5060a4;
    border-radius: 5px;
}
  
input {
    font-family: "Josefin Sans",sans-serif;
    padding: 5px;
    padding-left: 20px;
    transition: 0.25s;
    border: none;
    background-color: transparent;
}
  
input:focus {
    outline: none;
    font-family: "Josefin Sans",sans-serif;
}
  
.searchBar:has( input:focus ) {
    color:#5060a4;
    font-family: "Josefin Sans",sans-serif;
}
  
.searchBar-icon {
    display: flex;
    align-items: center;
    height: 16px;
    padding: 0 10px;
    fill: grey;
}
.searchBar-icon{
    height: 16px;
    padding: 0 10px;
    fill: grey;
    color:#5060a4;
}
</style>