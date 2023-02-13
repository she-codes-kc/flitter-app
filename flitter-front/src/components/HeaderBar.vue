<!--Nav Bar con logo, bienvenidos a flitter, iniciar sesión y registrarse-->
<template>
  <nav class="bar">
    <div class="logo">
      <router-link to="/">
        <img class="roundimg" alt="Flitter logo" src="../assets/logo-texto.png" width="100" />
      </router-link>
    </div>
    <div class="title">
      <router-link to="/">
        <h2>Bienvenidos ¡Entérate de lo que la gente habla!</h2>
      </router-link>
    </div>
    <div v-if="loggedIn"> 
      <LoggedIn/> 
    </div> 
    <div v-else> 
      <LoggedOut />
    </div> 
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoggedOut from "./LoggedOut.vue";
import LoggedIn from "./LoggedIn.vue";


export default defineComponent({
  name: "HeaderBar",
    components: {
      LoggedOut,
      LoggedIn,
    },
    setup() {
        let loggedIn = ref<boolean>(false) 
        const token = localStorage.getItem('accessToken')
        if(token) {
            loggedIn = ref<boolean>(true)
        }
        return {
            loggedIn,
        }
    },
});
</script>

<style scoped>
.bar {
  grid-template-columns: minmax(5rem, 1fr) 2fr minmax(5rem, 1fr);
  grid-template-rows: repeat(2,min-content) 1fr;
  grid-row-gap: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
  margin: 5px 0;
  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #d2d2d2;
}

.logo {
  display: flex;
  justify-self: left;
}

.title {
  justify-content: center;
  font-size: 20px;
  line-height: 0px;
  padding-left: 7rem;
}

h2 {
  color:#472967;
  font-family: 'Josefin Sans', sans-serif, cursive;
  justify-content: center;
}

a {
  text-decoration: none;
}
</style>