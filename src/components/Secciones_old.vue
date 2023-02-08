<template>
  <ul>
    <li
      v-for="(seccion, index) in secciones"
      :key="index"
      @click="() => selectRoute(seccion)"
    >
      {{ seccion }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
const secciones = ["home", "clientes", "reservas", "proveedores"];
const emit = defineEmits(["changeRoute"]);

const selectRoute = (seccion: string) => {
    emit("changeRoute", seccion)
};
</script>

<style scoped>
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
li {
  list-style: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.25rem;
}
li:hover {
  background-color: rgb(197, 255, 253);
}
</style>
