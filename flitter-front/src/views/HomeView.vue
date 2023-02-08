<template>
    <div class="home">
      <SearchBar/>
      <FlitFeed :posts="posts"/>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FlitFeed from '@/components/FlitFeed.vue'; 
import SearchBar from '@/components/SearchBar.vue';
import { Post } from "../models/post";
  
export default defineComponent({
    name: 'HomeView',
    components: {
      FlitFeed,
      SearchBar,
    },
      setup() {
        // fetchPosts()
      const fakePosts: Post[] = [
        {
          id: 1,
          user: {
            id: 1,
            username: "Pablo-Castellanos",
          },
          message:
            "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
          image: null,
          publishDate: "3/feb/23",
          kudos: [5, 6, 4, 3],
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "Constanza-Ange",
          },
          message: "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
          image: null,
          publishDate: "4/feb/23",
          kudos: [1, 4, 8, 9, 10, 7],
        },
        {
          id: 3,
          user: {
            id: 3,
            username: "Sabrina-Mont",
          },
          message: "Nueva red social, el código y la música son el comienzo perfecto para mi día. #MondayMotivation #CodingLife #Flitter",
          image: null,
          publishDate: "5/feb/23",
          kudos: [2],
        },
            {
          id: 3,
          user: {
            id: 4,
            username: "Mariano-Gillout",
          },
          message: "Hoy la pasé increíble caminando por las montañas en Barcelona. ¡Las vistas eran impresionantes! No puedo esperar para compartir más aventuras y recuerdos en #Flitter. #OutdoorLife #NatureLovers #HikingGoals 🏔️🌲🚶‍♀️",
          image: null,
          publishDate: "5/feb/23",
          kudos: [2, 7, 9],
        },
      ];
  
      return {
        posts: fakePosts,
      };
    },
  });
</script>