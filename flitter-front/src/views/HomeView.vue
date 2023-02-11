<!--Pantalla inicial, principal-->
<template>
  <div class="home">
    <div class="searchBar">
       <input type="text" placeholder="Buscar por @personas | #tags | texto" style="width: 100%" v-model="search"
        @keyup.enter="onSearch"
        :status="searchStatus"/>
      <div class="searchBar-icon" >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" @click="onSearch" :type="searchStatus"/>
      </div>
      <!-- <alert v-if="searchStatus === 'error'" title="Error" type="error">
      Se requiere un mínimo de 3 caracteres para la búsqueda -->
    <!-- </alert> -->
    </div>
    <h2 v-if="loading">Cargando...</h2>
    <FlitFeed v-if="!loading" :posts="flits"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue';
import { Flit } from "../models/flit";
import FlitService from '@/services/FlitService';

interface Data {
  flits: Flit[];
  loading: boolean;
}

const LIMIT = 8;

export default defineComponent({
  name: 'HomeView',
  components: {
    FlitFeed,
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