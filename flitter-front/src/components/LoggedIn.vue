<!--Mi perfil - Cerrar sesión-->
<template>
  <div class="links">
    <router-link to="/profile">Mi perfil</router-link> |
    <router-link to="/" @click="logout">Cerrar sesión</router-link>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSimpleAlert from 'vue3-simple-alert-next';


export default defineComponent({
  name: 'LoggedIn',
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
      VueSimpleAlert.alert('Nos vemos pronto!', undefined, 'info').then(() => {
        this.$router.push({})
      })
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
color: #EC6324;
font-family: 'Josefin Sans', sans-serif, cursive;
transition: 0.25ms;
}

a:hover {
  color: #44549c;
}
</style>