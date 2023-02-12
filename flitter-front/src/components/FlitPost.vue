<!--Template del flit ya realizado-->
<template>
  <div class="profile">
    <div class="logo">
      <img
        class="roundimg"
        alt="Flitter logo"
        src="../assets/usuario1.jpg"
        width="40"
      />
    </div>
    <div class="flit">
      <router-link :to="`/profile/${post.author}`">  
        <div class="username">{{ post.author }}</div></router-link
      >
      <div class="message">{{ post.text}}</div>
      <div class="meta">
        
        <div class="publishDate">{{ post.creation }}</div>
        <div class="kudos">{{ post.kudos?.size }}
          <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Flit } from "@/models/flit";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Flit>,
      required: true,
    },
  },
});
</script>

<style scoped>

.logo {
  width: 4rem;
  height: 3rem;
  margin-right: 0.5rem;
  margin-left: 1rem;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.flit {
  width: 100%;
  margin-bottom: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #EC6324;
  margin: 0 10px 10px 10px;
  font-size: 18px;
}

.username {
  color: #472967;
  font-family: 'Josefin Sans', sans-serif, cursive;
  font-weight: lighter;
}

.meta {
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  margin-bottom: 10px;
}

.kudos {
  margin: 0 10px;
  color:#472967;
}

.message {
  margin: 5px 0;
}

.publishDate {
  color:#EC6324;
  font-style: italic;
}

.profile {
  display: flex;
  align-items: start;
  margin-bottom: 10px;
}
</style>