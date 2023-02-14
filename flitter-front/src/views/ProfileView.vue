<template>
  <UserProfile :user="user" />
  <h2>Flits</h2>
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
      _id: "1",
      firstName: "Juan",
      lastName: "Perez",
      username: props.username,
      email: "juan@gmail.com",
      profilePic:
        "https://www.freepik.es/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_13813927.htm#query=personas&position=2&from_view=keyword&track=sph",
      followers: ['3', '4'],
      following: ['1', '4'],
    };

    // fetchPostsFilteredByUser()
    const fakePosts: Flit[] = [
      {
        _id: "5",
        author: props.username,
        text:
          "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
        images: null,
        date: new Date("2019-01-16").toString(),
        kudos: ["5", "4", "9"],
      },// como quedo al final esto
      {
        _id: "6",
        author: props.username,
        text:
          "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
        images: null,
        date: new Date("2019-01-16").toString(),
        kudos: ["7", "1", "8"],
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

h2 {
  color:#EC6324;
  font-size: 24px;
  display: flex;
  margin-left: 1rem;
}
</style>