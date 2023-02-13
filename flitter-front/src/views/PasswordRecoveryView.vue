<!--Pantalla recuperar contraseña-->
<template>
  <form class="recovery">
    <div class="tagline"><h2>¿No recuerdas tu contraseña?</h2></div>
    <div class="inputEmail">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder="juan@mail.com" />
    </div>
    <button>Recuperar contraseña</button>
    <div class="validate">
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"
        >Revise su bandeja de entrada y haga clic en el enlace para reestablecer su cuenta.</a>
    </div>
    <img alt="Login Rocket" src="" width="50%" />
  </form>
</template>

<style scoped>
.recovery {
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

.inputEmail {
  width: 100%;
  margin-bottom: 40px;
}

img {
  margin: 20px;
}
</style>