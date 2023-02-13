<!--Pantalla Iniciar sesión-->


<template>
  <form class="login">
    <div class="tagline"><h2>¿Ya tienes una cuenta en Flitter?</h2></div>
    <div class="inputEmail">
      <label for="username">Usuario/email</label>
      <input v-model="email" id="username" type="text" placeholder="juan@mail.com" />
    </div>
    <div class="inputPassword">
      <label for="password">Contraseña</label>
      <input v-model="password" id="password" type="password" placeholder="Password" @keyup.enter="handleLogin"
            :maxlength="15"/>
    </div>
    <button @click="handleLogin">Iniciar sesión</button>
    <div class="forgotPassword">
      <router-link to="/PasswordRecovery">¿Olvidaste la contraseña?</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent} from "vue";


//Código de: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: '',
    }
  },
  methods: {
    handleLogin() {
      this.error = "";
      if (!this.email || !validateEmail(this.email)) {
        this.error = "Email Inválido";
        return;
      }
      if (!this.password) {
        this.error = "Contraseña Inválida";
        return;
      }
      this.loading = true;
      this.$store
        .dispatch("user/login", { email: this.email, password: this.password }) // llama a la accion login de user
        .then(() => this.$router.push({ name: "home" }))
        .catch((error: any) => {
          if (error.response?.status === 401) {
            this.error = "Email o contraseña inválida";
          } else {
            this.error = error.message;
          }
        })
        .finally(() => (this.loading = false));
    },
  },
});

</script>


<style scoped>
.login {
  padding: 10px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

h2 {
  margin-bottom: 40px;
}

.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}

.inputEmail input ,
.inputPassword input{
  width: 100%;
  border: 0.1rem solid #e2e2e2e4;
  border-radius: 3rem;
  background-color: #e2e2e2e4;
  padding-left: 1.5rem;
  transition: all 0.3s;
  align-items: center;
}

.inputEmail input:focus ,
.inputPassword input:focus{
  background-color: white;
  border-color: #472967;
}


img {
  margin: 20px;
}

a{
  font-family: "Josefin Sans", sans-serif,cursive;
  font-size: 20px;
}

.tagline{
  color:#EC6324;
}
</style>


