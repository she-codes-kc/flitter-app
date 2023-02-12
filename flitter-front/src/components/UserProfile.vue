<template>
    <div class="headerPictureName">
    <h1>{{ user.username }}</h1>
    <img
      class="headerRocket"
      alt="Header Rocket"
      src="../assets/usuario1.jpg"
    />
    </div>
    <div class="wrapper">
        <div class="avatar">
            <img :src="user.avatar" :alt="user.username">
        </div>
        <div class="username">{{ user.username }}</div>
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
        <!-- <div class="buttons">
            <button><a href="#/login">Inicia sesión para seguir</a></button>
        </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from "@/models/user";

export default defineComponent({
    name: 'UserProfile',
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
})
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

.avatar {
    grid-area: a;
    width: max-content;
}

img {
    width: 100px;
}

.username {
    grid-area: c;
    font-weight: bold;
    font-size: larger;
    color: #5060a4;
    padding-top: 5px;
}

.follow {
    grid-area: b;
    display: flex;
    align-items: center;
    column-gap: 5px;
}
.followers, .following {
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
.edit-button, .newFlit-button {
    /* display: none; */
    width: 100px;
    color: white;
    background-color:#5060a4;
    border: none;
    border-radius: 5px;
}

a {
    color: white;
}
</style>