<template>
  <Dashboard />
</template>

<script lang="ts" setup>
import Dashboard from "./views/Dashboard.vue";
</script>

<style>
.sidebarlink {
  padding: 1rem;
  color: #2b2b2b;
  text-decoration: none;
  transition: all 0.3s;
  background: #ffffff;
  border-radius: 15px;
  cursor: pointer;
}
.sidebarlink:hover {
  box-shadow: 5px 5px 20px #d9d9d9, -5px -5px 20px #ffffff;
}
</style>
