<template>
  <div id="signup">
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Registro</h3>
      <form v-on:submit.prevent="processSignUp">
        <input v-model="signupData.username" class="form-control" placeholder="Usuario" />
        <input v-model="signupData.password1" class="form-control" placeholder="Contraseña" />
        <input v-model="signupData.password2"  class="form-control" placeholder="Confirmar contraseña" />
        <input v-model="signupData.balance" class="form-control" placeholder="Dinero" />
        <button class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>