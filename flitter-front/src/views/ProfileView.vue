<template>
  <UserProfile :user="user" />
  <FlitFeed :posts="posts" />
</template>

<script lang="ts">
import UserProfile from "@/components/UserProfile.vue";
import FlitFeed from "@/components/FlitFeed.vue";
import { User } from "@/models/user";
import { defineComponent } from "vue";
import { Flit } from "../models/flit";

export default defineComponent({
  name: "ProfileView",
  components: {
    UserProfile,
    FlitFeed,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isLoggedIn = true;
    const user: User = {
      id: "1",
      name: props.username,
      email: "juan@gmail.com",
      image:
        "https://www.freepik.es/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_13813927.htm#query=personas&position=2&from_view=keyword&track=sph",
      followers: [3, 4],
      following: [1, 4],
    };

    // fetchPostsFilteredByUser()
    const fakePosts: Flit[] = [
      {
        id: "5",
        author: {
          id: "1",
          name: props.username,
        },
        text:
          "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
        images: null,
        creation: "3/feb/23",
        kudos: new Set(["5", "4", "9"]),
      },
      {
        id: "6",
        author: {
          id: "1",
          name: props.username,
        },
        text:
          "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
        images: null,
        creation: "4/feb/23",
        kudos: new Set(["7", "1", "8"]),
      },
    ];

    return {
      user,
      posts: fakePosts,
      isLoggedIn,
    };
  },
});
</script>

<style scoped>
</style>