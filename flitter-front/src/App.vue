<template>
  <HeaderBar />
  <div class="wrapper"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBar from "@/components/HeaderBar.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderBar,
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

body {
  margin: 0;
}

.wrapper {
  padding: 10px;
  max-width: 650px;
  margin: auto;
}

button {
  background-color: #472967;
  font-family: 'Josefin Sans', sans-serif, cursive;
  font-weight: lighter;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin-bottom: 40px;
  transition: 0.25ms;
  border-radius: 40px;
  white-space: nowrap;
}

button:hover {
  background-color: #573877;
  cursor: pointer;
}

input {
  border-style: solid;
  font-family: "Josefin Sans", sans-serif;
  border-width: 2px;
  border-color: #472967;
  border-radius: 5px;
  padding: 10px;
  transition: 0.25s;
  width: 100%;
  font-size: 20px;
}

input:focus {
  outline: none;
}

a {
  text-decoration: none;
  transition: 0.25ms;
  font-size: 20px;
  color: #000;
}

a:hover {
  color: #573877;
}

label {
  font-size: 20px;
  color: #472967;
  font-family: 'Josefin Sans', sans-serif, cursive;
  font-weight: lighter;
  display: block;
  margin-bottom: 10px;
}

.roundimg {
  border-radius: 0%;
}
</style>