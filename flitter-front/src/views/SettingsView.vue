<template>
    <form class="settings">
      <div class="tagline"><h2>Configuración</h2></div>
      <div class="inputEmail">
        <label for="username">Desactiva tu cuenta</label>
        <p>
          Al hacer clic en el botón a continuación, eliminará su cuenta de Flitter.
        </p>
      </div>
      <button>Desactivar</button>
    </form>
</template>
  
<style scoped>
.settings {
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
  
.inputEmail,
.inputPassword {
    width: 100%;
    margin-bottom: 40px;
}
  
p {
    font-size: 20px;
    color: #2c3e50;
}
  
button {
    background-color: red;
}
  
button:hover {
    background-color: #5060a4;
}
  
img {
    margin: 20px;
}
</style>
