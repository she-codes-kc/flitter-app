<!--Página principal/feed-->
<template>
    <!-- <h2>Últimas tendencias</h2> -->
    <div v-for="post in posts" :key="post.id">
      <FlitPost :post="post" />
    </div>
<!--Pie de página con inicio de seión o registro-->
 <footer class="loadMore">
      <!-- <img alt="Load Rocket" src="../assets/logo.png" /> -->
      <p>
        <a href="/login">Inicia sesión</a> o <a href="/signup">regístrate</a> ¡para poder crear tus propios flits!
      </p>
    
 </footer>

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
    color: #EC6324;
    font-family: 'Josefin Sans', sans-serif, cursive;
    font-weight: lighter;
    margin-bottom: 40px;
    display: flex;
    justify-content: left;
    margin-left: 1rem;
}
  
p {
    font-size: 20px;
    color: #472967;
    text-align: center;
}
  
img {
    width: 100px;
}
  
.loadMore {
    text-align: center;
    margin-top: 12rem;
}
  
a {
  color: #EC6324;
  text-decoration: underline;
}

</style>