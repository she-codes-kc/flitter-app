<template>
    <div class="profile">
      <div class="logo">
        <img
          class="roundimg"
          alt="Flitter logo"
          src="../assets/logo.png"
          width="40"
        />
      </div>
      <div class="flit">
        <router-link :to="`/profile/${post.user.username}`">
          <div class="username">{{ post.user.username }}</div></router-link
        >
        <div class="message">{{ post.message }}</div>
        <div class="meta">
          <div class="kudos">{{ post.kudos.length }}
            <font-awesome-icon class="fa-solid fa-wand-magic-sparkles" />
          </div>
          <div class="publishDate">{{ post.publishDate }}</div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { Post } from "@/models/post";
  
  export default defineComponent({
    props: {
      post: {
        type: Object as PropType<Post>,
        required: true,
      },
    },
  });
</script>
  
<style scoped>
  .flit {
    width: 100%;
    margin-bottom: 20px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: #5060a4;
    margin: 0 10px 10px 10px;
    font-size: 18px;
  }
  
  .username {
    color: #5060a4;
    font-family: 'Josefin Sans', sans-serif, cursive;
    font-weight: lighter;
  }
  
  .meta {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
  }
  
  .kudos {
    margin: 0 10px;
  }
  
  .message {
    margin: 5px 0;
  }
  
  .publishDate {
    color:#5060a4;
    font-style: italic;
  }
  
  .profile {
    display: flex;
    align-items: start;
    margin-bottom: 10px;
  }
</style>