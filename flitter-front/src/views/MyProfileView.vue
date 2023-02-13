<!--Pantalla mi perfil privado-->
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
      _id:"1",
      firstName: "georgina",
      lastName: "Castellni",
      username: props.username,
      email: "geor@gmail.com",
      profilePic:
        "",
      followers: ['3', '4'],
      following: ['1', '4'],
    };

    // fetchPostsFilteredByUser()
    const fakePosts: Flit[] = [
      {
        _id: "1",
        author: props.username,
        text:
          "Estoy probando ésta nueva red social. Hasta ahora es muy fácil y divertida de usar. No puedo esperar a ver qué otras cosas geniales tiene guardadas. #RedesSociales #NuevaRed 💻💜",
        images: null,
        date: new Date("2019-01-16").toString(),
        kudos: [],
      },
      {
        _id: "6",
        author: props.username,
        text:
          "¡La pasé muy bien explorando la ciudad con mi familia hoy! #Aventura #Flitter",
        images: null,
        date: new Date("2019-01-16").toString(),
        kudos: [],
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
