<!--Pantalla inicial, principal-->
<template>
  <div class="home">
    <div class="searchBar">
      <i font-awesome-icon class="fa-solid fa-magnifying-glass" @click="onSearch" :type="searchStatus"></i>
      <input type="text" placeholder="Buscá en Flitter lo que quieras" style="width: 100%" v-model="search"
        @keyup.enter="onSearch" :status="searchStatus" />
    </div>
    <div class="flittear" v-if="isLoggedIn">
      <h2 class="text-flittear">¡Empieza a flittear!</h2>
      <img class="img-flit" src="../assets/logo2.png" alt="">
    </div>
    <CreateFlit v-if="isLoggedIn" class="creat-flit" />
    <div>
      <h2>Últimas tendencias</h2>
      <h3 v-if="loading">Cargando...</h3>
      <h3 v-if="!loading && flits.length === 0 && page != 1">
        No se encontraron más flits
      </h3>
      <h3 v-if="!loading && flits.length === 0 && page == 1">
        No se encontraron flits
      </h3>
      <FlitFeed v-if="!loading" :posts="flits" />
    </div>
    <div class="pagination">
      <button @click="page++">Siguiente</button>
      <button v-show="page > 1" @click="page--" class="left-button">Anterior</button>
    </div>
    <footer class="footer">
      <div class="footer-img-text">
        <h3 class="text-footer">¡Para comenzar, regístrate o inicia sesión!</h3>
        <img src="../assets/logo2.png">
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlitFeed from "@/components/FlitFeed.vue";
import CreateFlit from "@/components/CreateFlit.vue";
import { Flit } from "../models/flit";
import FlitService from "@/services/FlitService";

interface Data {
  search: string;
  page: number;
  flits: Flit[];
  loading: boolean;
  searchStatus: "success" | "error";
}

const LIMIT = 8;

export default defineComponent({
  name: "HomeView",
  components: {
    CreateFlit,
    FlitFeed,
  },
  data(): Data {
    return {
      search: "",
      page: 1,
      flits: [],
      loading: true,
      searchStatus: "success",
    };
  },
  methods: {
    async fetchFlits() {
      this.loading = true;
      const flits = await FlitService.findFlits({
        text: this.search,
        skip: (this.page - 1) * LIMIT,
        limit: LIMIT,
        sort: "-date",
      });
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
      window.scrollTo(0, 0);
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["user/isLoggedIn"];
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

img {
  width: 10%;
  display: flex;
  margin: 20px;
  margin-bottom: 10px;
}

.footer-img-text {
  display: flex;
  align-items: center;

}

.flittear {
  padding-left: 12rem;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
}

.img-flit {
  width: 10%;
  display: flex;
  margin: 10px;
  margin-bottom: 10px;
}

.text-flittear {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 20px;
  font-weight: bold;
  color: #472967;
  padding: 10px;
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
  color: #472967;
}

h2 {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 25px;
  color: #ec6324;
  font-weight: 20;
  padding: 20px;
}

.pagination {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
}

h3 {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 20px;
  color: #ec6324;
  padding: 15px;
  font-weight: 40;
}

.footer {
  padding-left: 6rem;
  display: flex;
  margin-top: 10rem;
}

.text-footer {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 20px;
  color: #472967;
  padding: 15px;
  font-weight: 40;
}

.left-button {
  margin-left: 30px;
}

.creat-flit {
  margin-top: 10px;
}
</style>
