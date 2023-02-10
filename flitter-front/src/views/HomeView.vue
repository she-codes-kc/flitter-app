<!--Pantalla inicial, principal-->
<template>
  <div class="home">
    <SearchBar/>
    <h2 v-if="loading">Cargando...</h2>
    <FlitFeed v-if="!loading" :posts="posts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue'; 
import SearchBar from '@/components/SearchBar.vue';
import { Flit } from "../models/flit";
import FlitService from '@/Services/FlitService';

interface Data {
  posts: Flit[];
  loading: boolean;
}

export default defineComponent({
  name: 'HomeView',
  components: {
    FlitFeed,
    SearchBar,
  },
  data(): Data {
  return {
    posts: [],
    loading: true,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.posts = await FlitService.allFlits();
      this.loading = false;
    },
  },
});
</script>