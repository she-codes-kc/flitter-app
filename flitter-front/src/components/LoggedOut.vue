<!--Inicio sesión o me registro-->
<template>
  <div class="links">
    <router-link to="/login">Iniciar sesión</router-link> |
    <router-link to="/signup">Regístrate</router-link>
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
  font-size: 20px;
  text-decoration: none;
  color: #EC6324;
  font-family: 'Josefin Sans', sans-serif, cursive;
  transition: 0.25ms;
}

a:hover {
  color: #A04755;
}
</style>