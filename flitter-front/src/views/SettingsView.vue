<!--Pantalla configuración de cuenta-->
<template>
  <div class="card">
    <form class="settings">
      <div class="tagline">
        <h2>Configuración de la cuenta</h2>
      </div>
      <button>
        <router-link to="/" class="labelName">Modificar mis datos</router-link>
      </button>
      <button>
        <router-link to="/" class="labelName">Modificar contraseña</router-link>
      </button>
      <button>
        <router-link to="/" class="labelName">Desactivar mi cuenta</router-link>
      </button>
    </form>
  </div>
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

.card {
  width: 30rem;
  min-height: 200px;
  border: 1px solid rgb(243, 239, 239);
  border-radius: 1rem;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  margin-left: 70px;
}

h2 {
  margin-bottom: 40px;
  color: #EC6324;
}

.inputEmail,
.inputPassword {
  width: 100%;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  color: #000;
}

button {
  background-color: #472967;
  color: white;
  width: 15rem;
}

button:hover {
  background-color: #472967;
}

img {
  margin: 20px;
}

.labelName {
  color: white;
  font-size: 18px;
}
</style>
