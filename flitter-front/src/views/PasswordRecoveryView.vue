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
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"></a>
    </div>
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

.inputEmail {
  width: 100%;
  margin-bottom: 40px;
}

.inputEmail input {
  width: 100%;
  border: 0.1rem solid #e2e2e2e4;
  border-radius: 3rem;
  background-color: #e2e2e2e4;
  padding-left: 1.5rem;
  transition: all 0.3s;
  align-items: center;
  display: flex;
}

.inputEmail input:focus {
  background-color: white;
  border-color: #472967;
}

img {
  margin: 20px;
}

h2 {
  color:#EC6324;
  font-family: "Josefin Sans", sans-serif,cursive;
  font-size: 24px;
  margin-bottom: 40px;
}

a{
  font-family: "Josefin Sans", sans-serif,cursive;
  font-size: 20px;
  margin-bottom: 40px;
  color:#472967;
  text-align: center;

}
</style>