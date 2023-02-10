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
import { Users }  from "../store/users";

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
      id: 1,
      username: props.username,
      email: "juan@gmail.com",
      password: "juan123",
      avatar:
        "https://www.freepik.es/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_13813927.htm#query=personas&position=2&from_view=keyword&track=sph",
      followers: [3, 4],
      following: [1, 4],
    };

    // fetchPostsFilteredByUser()
    const fakePosts: Post[] = [
      {
        id: 5,
        user: {
          id: 1,
          username: props.username,
        },
        message:
          "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
        image: null,
        publishDate: "3/feb/23",
        kudos: [5, 6, 4, 3],
      },
      {
        id: 6,
        user: {
          id: 1,
          username: props.username,
        },
        message:
          "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
        image: null,
        publishDate: "4/feb/23",
        kudos: [1, 4, 8, 9, 10, 7],
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