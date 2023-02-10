<template>
    <form class="signup">
      <div class="tagline"><h2>¿Nuevo en Flitter?</h2></div>
      <div class="inputUsername">
        <label for="username">Usuario</label>
        <input id="username" type="text" placeholder="JuanGonzalez" />
      </div>
      <div class="inputEmail">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="juan@mail.com" />
      </div>
      <div class="inputPassword">
        <label for="password">Contraseña</label>
        <input id="password" type="password" placeholder="*********" />
      </div>
      <button>Registrarme</button>
      <div class="validate">
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">(Revisa tu bandeja de entrada y haz clic en el enlace para validar tu cuenta).</a>
      </div>
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
.inputPassword {
    width: 100%;
    margin-bottom: 40px;
}
  
img {
  float: right;
  margin: 0 10px 10px 10px;
}
</style>