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
      <router-link :to="`/profile/${post.author.username}`">
        <div class="username">{{ post.author.username }}</div>
      </router-link>
      <div class="message">{{ post.text }}</div>
      <div class="meta">
        <div
          class="publishDate"
          :title="moment(post.date).format('MMMM DD YYYY, hh:mm:ss')"
        >
          {{ moment(post.date).fromNow() }}
        </div>
        <div class="kudos">
          {{ post.kudos.length }}
          <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
          <i
            v-show="myUsername === post.author.username"
            class="fa fa-trash delete"
            aria-hidden="true"
            @click="deleteFlit"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Flit } from "@/models/flit";
import moment from "moment";
import VueSimpleAlert from "vue3-simple-alert-next";
import FlitService from "@/services/FlitService";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Flit>,
      required: true,
    },
  },
  methods: {
    moment,
    deleteFlit() {
      VueSimpleAlert.confirm(
        `"${this.post.text}"`,
        "Seguro que desea borrar este flit?",
        "question"
      )
        .then(() =>
          FlitService.deleteFlit(
            this.post._id,
            this.$store.getters["user/accessToken"]
          )
        )
        .then(() =>
          VueSimpleAlert.alert("Flit eliminado", undefined, "success")
        )
        .then(() => window.location.reload());
    },
  },
  computed: {
    myUsername() {
      return this.$store.getters["user/username"];
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
  margin-top: 2rem;
}

.flit {
  width: 100%;
  margin-bottom: 30px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #ec6324;
  margin: 0 10px 10px 10px;
  font-size: 18px;
  margin-top: 2rem;
}

.username {
  color: #472967;
  font-family: "Josefin Sans", sans-serif, cursive;
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
  color: #472967;
  size: 18px;
}

.message {
  margin: 5px 0;
}

.publishDate {
  color: #ec6324;
  font-style: italic;
  padding-top: 12px;
}

.profile {
  display: flex;
  align-items: start;
  margin-bottom: 10px;
}

i {
  color: #472967;
  size: 18px;
  margin: 10px 10px;
}

.delete {
  cursor: pointer;
}
</style>
