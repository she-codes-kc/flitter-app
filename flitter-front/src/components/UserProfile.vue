<template>
  <div class="wrapper">
    <div>
      <img class="headerRocket" alt="Header Rocket" src="../assets/usuario1.jpg" />
    </div>
    <div class="username">{{ user.username }}</div>
    <div class="follow">
      <div class="followers">
        <!-- TODO -->
        <div class="number">{{ 0 }}</div>
        Seguidores
      </div>
      <div class="following">
        <!-- TODO -->
        <div class="number">{{ 0 }}</div>
        Seguidos
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/models/user";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-areas:
    "a b"
    "c d";
  grid-template-columns: minmax(100px, max-content) 1fr;
  column-gap: 40px;
}

.avatar {
  grid-area: a;
  width: max-content;
}

img {
  grid-area: a;
  width: 8rem;
  border-radius: 50%;
}

.headerRocket {
  grid-area: a;
}

.username {
  grid-area: b;
  font-weight: bold;
  font-size: larger;
  color: #472967;
  padding-top: 10px;
  margin-bottom: 5rem;
}

.follow {
  grid-area: b;
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.followers,
.following {
  margin-top: 2rem;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-weight: bold;
}

.buttons {
  grid-area: d;
  display: flex;
  justify-content: left;
  column-gap: 5px;
}

.edit-button,
.newFlit-button {
  width: 100px;
  color: white;
  background-color: #472967;
  border: none;
  border-radius: 5px;
}

a {
  color: white;
}
</style>
