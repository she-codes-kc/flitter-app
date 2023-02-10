<!--Inicio sesión o me registro-->
<template>
  <div class="links">
    <router-link to="/login">Iniciar sesión</router-link> |
    <router-link to="/signup">Registrate</router-link>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoggedOut'
})
</script>

<style scoped>
.links {
justify-self: right;
}

a {
font-size: 18px;
text-decoration: none;
color: #5060a4;
font-family: 'Josefin Sans', sans-serif, cursive;
transition: 0.25ms;
}

a:hover {
  color: #44549c;
}
</style>