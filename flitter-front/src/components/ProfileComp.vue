<!--Perfil privado-->
<template>
  <div class="wrapper">
    <div>
      <img
        class="headerRocket"
        alt="Header Rocket"
        src="../assets/usuario1.jpg"
      />
    </div>
    <div class="username">{{ user.name }}</div>
    <div class="follow">
      <div class="followers">
        <div class="number">{{ user.followers.length }}</div>
        Seguidores
      </div>
      <div class="following">
        <div class="number">{{ user.following.length }}</div>
        Seguidos
      </div>
    </div>
    <div v-show="myProfile">
      <div class="buttons">
      <button class="edit-button">
        <router-link to="/settings">Editar perfil</router-link>
      </button>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "../models/user";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    myProfile: {
      type: Boolean,
      required: true,
  },
}});
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-areas:
    "a b"
    "c d";
  grid-template-columns: minmax(100px, max-content) 1fr;
  column-gap: 20px;
}

img {
  grid-area: a;
  width: 100px;
  border-radius: 100%;
}
.headerRocket {
  grid-area: a;
}
.username {
  grid-area: c;
  font-weight: bold;
  font-size: larger;
  color: #472967;
  padding-top: 5px;
}

.follow {
  grid-area: b;
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.followers,
.following {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.number {
  font-weight: bold;
}

.buttons {
  padding: 10px 2px;
  display: flex;
  grid-area: d;
  column-gap: 5px;
}

.edit-button,
.newFlit-button {
  display: flex;
  color: white;
  background-color: #472967;
  border: none;
}

a {
  color: white;
}
</style>
