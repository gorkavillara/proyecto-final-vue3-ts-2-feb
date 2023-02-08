<template>
  <div class="login-form">
    <h3>Identifícate en nuestro dashboard</h3>
    <input type="text" v-on-enter="hazLogin" v-model="formData.email" placeholder="Tu email" />
    <input
      type="password"
      v-model="formData.password"
      placeholder="Tu contraseña"
      v-on-enter="hazLogin"
    />
    <button @click="hazLogin">Aceptar</button>
    <p>Active user: {{ activeUser }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, DirectiveBinding, inject } from "vue";

const vOnEnter = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") return binding.value()
      return
    })
  },
}

const { activeUser, login, logout } = inject("globalAuth") as any
// const login = inject("login") as (email: string, password: string) => any

const formData = ref({
  email: "",
  password: "",
});

const hazLogin = async() => {
  console.log("Haciendo login")
  await login(formData.value.email, formData.value.password)
  // refActiveUser.value = newUser
};
</script>

<style scoped>
div.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
  background-color: white;
  padding: 2rem;
}
input {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
}
</style>
