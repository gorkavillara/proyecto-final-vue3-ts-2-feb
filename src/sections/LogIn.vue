<template>
  <div class="bg-white py-4 px-8 flex flex-col gap-4 items-stretch">
    <h3 class="text-2xl">Identifícate en nuestro dashboard</h3>
    <input type="text" v-on-enter="hazLogin" v-model="formData.email" placeholder="Tu email" />
    <input
      type="password"
      v-model="formData.password"
      placeholder="Tu contraseña"
      class="shadow-lg hover:shadow-2xl outline-none"
      v-on-enter="hazLogin"
    />
    <Button text="Aceptar" btnType="info" />
    <!-- <button class="bg-green-500 text-white rounded-lg" @click="hazLogin">Aceptar</button> -->
    <p>Active user: {{ activeUser }}</p>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/Button.vue";
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
