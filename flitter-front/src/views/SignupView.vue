<!--Pantalla registrarse-->
<template>
  <form class="signup">
    <div class="tagline"><h2>¿Nuevo en Flitter?</h2></div>
    <div class="inputName">
      <label for="name">Nombre</label>
      <input id="name" type="text" placeholder="Juan" required/>
    </div>
    <div class="inputLastName">
      <label for="lastName">Apellido</label>
      <input id="lastName" type="text" placeholder="Gonzalez" required/>
    </div>
    <div class="inputUsername">
      <label for="username">Usuario</label>
      <input id="username" type="text" placeholder="JuanGonzalez" pattern="[A-Za-z]{}" required/>
    </div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder="juan@mail.com" required/>
    </div>
    <div class="inputPassword">
      <label for="password">Contraseña</label>
      <input id="password" type="password" placeholder="*********" required/>
    </div>
    <button type="submit">Registrarme</button>
    <!-- <div class="validate">
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">(Revisa tu bandeja de entrada y haz clic en el enlace para validar tu cuenta).</a>
    </div> -->
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
.inputPassword input{
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
.inputPassword input:focus{
  background-color: white;
  border-color: #472967;
}

img {
float: right;
margin: 0 10px 10px 10px;
}

.tagline {
  color:#EC6324;
}

a {
  font-family: "Josefin Sans", sans-serif,cursive;
  font-size: 20px;
}
</style>