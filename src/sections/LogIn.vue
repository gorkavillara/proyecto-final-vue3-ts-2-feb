<template>
  <div class="login-form">
    <h3>Identifícate en nuestro dashboard</h3>
    <input type="text" v-model="formData.email" placeholder="Tu email" />
    <input
      type="password"
      v-model="formData.password"
      placeholder="Tu contraseña"
    />
    <button @click="hazLogin">Aceptar</button>
    <p>Active user: {{ props.activeUser }}</p>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/models";
import { ref } from "vue";

const props = defineProps<{ activeUser: User | null }>();
const emit = defineEmits(["logIn"])

const formData = ref({
  email: "",
  password: "",
});

const hazLogin = () => {
  // login(formData.value.email, formData.value.password)
  emit("logIn", formData.value.email, formData.value.password)
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
