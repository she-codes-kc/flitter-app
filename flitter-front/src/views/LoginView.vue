<!--Pantalla Iniciar sesión-->
<!-- <script lang="ts"></script>

<template>
  <div>
    <form>
      <label for="user">Usuario:</label>
      <input type="text" id="user" name="user" /><br /><br />
      <label for="password">Contraseña:</label>
      <input type="text" id="password" name="password" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>

  <button>LogIn</button>
</template> -->

<template>
  <form class="login">
    <div class="tagline"><h2>¿Ya tienes una cuenta en Flitter?</h2></div>
    <div class="inputEmail">
      <label for="username">Usuario/email</label>
      <input id="username" type="text" placeholder="juan@mail.com" />
    </div>
    <div class="inputPassword">
      <label for="password">Contraseña</label>
      <input id="password" type="password" placeholder="********" />
    </div>
    <button>Iniciar sesión</button>
    <div class="forgotPassword">
      <a href="#/password">¿Olvidaste la contraseña?</a>
    </div>
  </form>
</template>

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


