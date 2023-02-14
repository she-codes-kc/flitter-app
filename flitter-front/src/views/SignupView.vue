<script lang="ts" setup>
import AuthService from "@/services/AuthService";
import { ref } from "vue";
import { useRouter } from "vue-router";
import VueSimpleAlert from "vue3-simple-alert-next";

const router = useRouter();
const name = ref("");
const lastName = ref("");
const username = ref("@");
const email = ref("");
const password = ref("");

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function onClick() {
  if (name.value === "") {
    VueSimpleAlert.alert("Debe incluir un nombree", undefined, "warning");
    return;
  }
  if (lastName.value === "") {
    VueSimpleAlert.alert("Debe incluir un apellido", undefined, "warning");
    return;
  }
  if (username.value === "" || username.value === "@") {
    VueSimpleAlert.alert(
      "Debe incluir un nombre de usuario",
      undefined,
      "warning"
    );
    return;
  }
  if (email.value === "" || !validateEmail(email.value)) {
    VueSimpleAlert.alert("Debe incluir un email", undefined, "warning");
    return;
  }
  if (password.value === "") {
    VueSimpleAlert.alert("Debe incluir un password", undefined, "warning");
    return;
  }

  const usernamewithat = username.value.startsWith("@")
    ? username.value
    : `@${username.value}`;

  AuthService.register(
    name.value,
    lastName.value,
    usernamewithat,
    email.value,
    password.value
  )
    .then(() =>
      VueSimpleAlert.alert(
        "Te registraste con exito!",
        "Ya podes logearte",
        "success"
      ).then(() => router.push({ name: "login" }))
    )
    .catch((err: any) => {
      if (err.response?.data?.error) {
        VueSimpleAlert.alert(err.response?.data?.error, undefined, "error");
      } else {
        VueSimpleAlert.alert(
          err.message || "Ha ocurrido un error",
          undefined,
          "error"
        );
      }
    });
}
</script>

<template>
  <form class="signup">
    <div class="tagline">
      <h2>¿Nuevo en Flitter?</h2>
    </div>
    <div class="inputName">
      <label for="name">Nombre</label>
      <input v-model="name" id="name" type="text" placeholder="Juan" required />
    </div>
    <div class="inputLastName">
      <label for="lastName">Apellido</label>
      <input
        v-model="lastName"
        id="lastName"
        type="text"
        placeholder="Gonzalez"
        required
      />
    </div>
    <div class="inputUsername">
      <label for="username">Usuario</label>
      <input
        v-model="username"
        id="username"
        type="text"
        placeholder="JuanGonzalez"
        pattern="[A-Za-z]{}"
        required
      />
    </div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input
        v-model="email"
        id="email"
        type="text"
        placeholder="juan@mail.com"
        required
      />
    </div>
    <div class="inputPassword">
      <label for="password">Contraseña</label>
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="*********"
        required
      />
    </div>
    <button type="button" @click="onClick">Registrarme</button>
  </form>
</template>

<style scoped>
.signup {
  padding: 10px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

h2 {
  margin-bottom: 40px;
}

.inputUsername,
.inputEmail,
.inputName,
.inputLastName,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}
.inputEmail input,
.inputUsername input,
.inputName input,
.inputLastName input,
.inputPassword input {
  width: 100%;
  border: 0.1rem solid #e2e2e2e4;
  border-radius: 3rem;
  background-color: #e2e2e2e4;
  padding-left: 1.5rem;
  transition: all 0.3s;
  align-items: center;
  display: flex;
}

.inputEmail input:focus,
.inputUsername input:focus,
.inputLastName input:focus,
.inputName input:focus,
.inputPassword input:focus {
  background-color: white;
  border-color: #472967;
}

img {
  float: right;
  margin: 0 10px 10px 10px;
}

.tagline {
  color: #ec6324;
}

a {
  font-family: "Josefin Sans", sans-serif, cursive;
  font-size: 20px;
}
</style>
