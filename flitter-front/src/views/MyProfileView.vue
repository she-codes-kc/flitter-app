<!--Pantalla mi perfil-->
<template>
  <ProfileComp :my-profile="true"  :user="user" />
  <CreateFlit/>
  <h2>Mis flits</h2>
  <FlitFeed :posts="posts" />
</template>

<script lang="ts">
import ProfileComp from "../components/ProfileComp.vue";
import CreateFlit from "../components/CreateFlit.vue";
import FlitFeed from "../components/FlitFeed.vue";
import { User } from "../models/user";
import { defineComponent } from "vue";
import { Flit } from "../models/flit";

export default defineComponent({
  name: "MyProfileView",
  components: {
    CreateFlit,
    FlitFeed,
    ProfileComp
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
      id:"1",
      firstName: "georgina",
      lastName: "Castellni",
      name: props.username,
      email: "geor@gmail.com",
      image:
        "",
      followers: [3, 4],
      following: [1, 4],
    };

    // fetchPostsFilteredByUser()
    const fakePosts: Flit[] = [
      {
        id: "1",
        author: props.username,
        text:
          "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
        images: null,
        creation: "3/feb/23",
        kudos: null,
      },
      {
        id: "6",
        author: props.username,
        text:
          "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
        images: null,
        creation: "4/feb/23",
        kudos: null,
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

h2{
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 25px;
  color:#EC6324;
  padding-top: 2rem;
  padding-right: 2rem;
}
</style>
