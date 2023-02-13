<!--Pantalla inicial, principal-->
<template>
  <div class="home">
    <div class="searchBar">
      <i font-awesome-icon class="fa-solid fa-magnifying-glass" @click="onSearch" :type="searchStatus"></i>
      <input type="text" placeholder="Buscar por @personas | #tags | texto" style="width: 100%" v-model="search"
        @keyup.enter="onSearch"
        :status="searchStatus">
    </div>
    <!--Se muestra el crear flit cuando ya está logueado, sino no
    <div>
      <CreateFlit/>
    </div>-->
      
      <!-- <alert v-if="searchStatus === 'error'" title="Error" type="error">
      Se requiere un mínimo de 3 caracteres para la búsqueda -->
    <!-- </alert> -->
    <div>
    <h2>Últimas tendencias</h2>
    <h2 v-if="loading">Cargando...</h2>
    <FlitFeed v-if="!loading" :posts="flits"/>
    
    
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue';
import { Flit } from "../models/flit";
import FlitService from '@/services/FlitService';
//import CreateFlit from '@/components/CreateFlit.vue';

interface Data {
  flits: Flit[];
  loading: boolean;
}

const LIMIT = 8;

export default defineComponent({
  name: 'HomeView',
  components: {
    FlitFeed,
    //CreateFlit
},
  setup() {
    return {
      page: ref(1),
      search: ref(""),
      searchStatus: ref<"success" | "error">("success"),
      
    };
  },
  data(): Data {
  return {
    flits: [],
    loading: true,
    };
  },
  methods: {
    async fetchFlits() {
      this.loading = true;
      const flits = await FlitService.findFlits(
        this.search,
        (this.page - 1) * LIMIT,
        LIMIT
      );
      this.flits = flits;
      this.loading = false;
    },
    onSearch() {
      if (this.search.length != 0 && this.search.length < 3) {
        this.searchStatus = "error";
      } else {
        this.searchStatus = "success";
        this.page = 1;
        this.fetchFlits();
      }
    },
  },
  mounted() {
    this.fetchFlits();
  },
  watch: {
    page() {
      this.fetchFlits();
    },
  },
});
</script>

<style scoped>

.home {
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
}

.searchBar {
    display: flex;
    align-items: center;
    position: relative;
}

.searchBar input {
    width: 60rem;
    height: 3rem;
    border: 0.1rem solid #e2e2e2e4;
    border-radius: 3rem;
    background-color: #e2e2e2e4;
    padding-left: 5rem;
    transition: all 0.3s;
}

.searchBar input:focus {
    background-color: white;
    border-color: #472967;
}

.searchBar i {
    position: absolute;
    font-size: 1.6rem;
    left: 1.5rem;
    color:#472967;
}

h2 {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-weight: 50;
  font-size: 25px;
  color:#EC6324;
  padding: 20px;
}

</style>