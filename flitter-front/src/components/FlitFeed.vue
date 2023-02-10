<!--Página principal/feed-->
<template>
    <h2>Últimas tendencias</h2>
    <div v-for="post in posts" :key="post.id">
      <FlitPost :post="post" />
    </div>
<!--Pie de página con inicio de seión o registro-->
    <div class="loadMore">
      <img alt="Load Rocket" src="../assets/logo.png" />
      <p>
        <a href="#/login">Inicia sesión</a> o <a href="#/signup">registrate</a> ¡para enterarte de lo que la gente habla!
      </p>
    </div>

<!-- Si estás logueado, salen botones de página -->
    <div class="pages" v-if="loggedIn">
      <div class="previous-page">
        <!-- AGREGAR ICONO FLECHA IZQUIERDA// <svg class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"></svg> -->
      </div>
      <img alt="Load Rocket" src="" />
      <div class="next-page">
        <!-- AGREGAR ÍCONO FLECHA DERECHA // <svg class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"></svg> -->
      </div>
    </div>

<!-- Si no estas logueado, sale un mensaje de login -->
    <div class="loadMore" v-else>
      <img alt="Load Rocket" src="" />
        <p>
          <a href="#/login">Inicia sesión</a> o <a href="#/signup">registrate</a> ¡para enterarte de lo que la gente habla!
        </p>  
    </div>

</template>
  
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import FlitPost from "@/components/FlitPost.vue";
import { Flit } from "@/models/flit";

export default defineComponent({
  components: {
    FlitPost,
  },
  props: {
    posts: {
      type: Object as PropType<Flit[]>,
      required: true
    }
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

h2 {
    color: #5060a4;
    font-family: 'Josefin Sans', sans-serif, cursive;
    font-weight: lighter;
    margin-bottom: 40px;
}
  
p {
    font-size: 20px;
    color: #2c3e50;
    text-align: center;
}
  
img {
    width: 100px;
}
  
.loadMore {
    text-align: center;
}
  
a {
    text-decoration: underline;
}

</style>