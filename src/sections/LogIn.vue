<template>
  <div class="login-form">
    <h3 class="text-2xl">Identifícate en nuestro dashboard</h3>
    <q-input label="Tu email" type="text" v-on-enter="hazLogin" v-model="formData.email" />
    <q-input
      label="Tu contraseña"
      type="password"
      v-model="formData.password"
      v-on-enter="hazLogin"
    />
    <q-btn color="red" @click="hazLogin" icon-right="send" label="Aceptar" />
    <!-- <button class="bg-green-500 text-white rounded-lg" @click="hazLogin">Aceptar</button> -->
    <p>Active user: {{ activeUser }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, DirectiveBinding, inject } from "vue"
import { useRouter } from "vue-router"

const vOnEnter = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") return binding.value()
    })
  }
}

const { activeUser, login } = inject("globalAuth") as any
// const login = inject("login") as (email: string, password: string) => any

const formData = ref({
  email: "",
  password: ""
})

const router = useRouter()
const hazLogin = async () => {
  console.log("Haciendo login")
  await login(formData.value.email, formData.value.password)
  // refActiveUser.value = newUser
  router.push("/clientes")
}
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
