<!--Mi perfil - Cerrar sesión-->
<template>
  <div class="links">
    <router-link to="/profile">Mi perfil</router-link> |
    <router-link to="/home"   @click="logOut">Cerrar sesión</router-link>
  </div> 
</template>

<script lang="ts">
import router from "../router";
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'LoggedIn',
  setup() {
      const logOut = () => {
              localStorage.removeItem('accessToken')
              router.push({ name: 'home' })
          }

      return {
          logOut
      }
  }
})
</script>

<style scoped>
.links {
justify-self: right;
}

a {
text-decoration: none;
color: #44549c;
font-family: 'Josefin Sans', sans-serif, cursive;
transition: 0.25ms;
}

a:hover {
  color: #44549c;
}
</style>